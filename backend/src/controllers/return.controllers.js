import prismaClient from "../utils/db.js";
import { calculateFine } from "../utils/fine.js";
import { returnBookSchema } from "../utils/schema.zod.js";

export async function returnBook(req, res) {
    const parsedData = returnBookSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }

    const { borrowingId, damageLevel } = parsedData.data;

    try {
        const borrowing = await prismaClient.borrowing.findUnique({
            where: { id: borrowingId },
            include: { book: true }
        })

        if (!borrowing) {
            return res.status(403).json({ 
                message: "Borrowing record not found" 
            })
        }

        if (borrowing.isReturned) {
            return res.status(400).json({ 
                message: "Book already returned" 
            })
        }

        const now = new Date();

        const fineData = calculateFine({
            bookPrice: borrowing.book.price,
            dueDate: borrowing.dueDate,
            returnDate: now,
            damageLevel: damageLevel || "NONE"
        })

        await prismaClient.borrowing.update({
            where: { id: borrowingId },
            data: {
                isReturned: true,
                returnDate: now,
                damageLevel: damageLevel || "NONE"
            }
        });

        let fineRecord = null;
        if (fineData.totalAmount > 0) {
            fineRecord = await prismaClient.fine.create({
                data: {
                    borrowingId,
                    totalAmount: fineData.totalAmount,
                    missingBook: fineData.missingBook,
                    lateDays: fineData.lateDays,
                    damageLevel: fineData.damageLevel
                }
            })
        }

        await prismaClient.book.update({
            where: { id: borrowing.bookId },
            data: {
                availableCopies: {
                    increment: 1
                }
            }
        })

        return res.status(200).json({
            message: "Book returned successfully",
            fine: fineRecord || null
        })  

    } catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error
        })
    }
}