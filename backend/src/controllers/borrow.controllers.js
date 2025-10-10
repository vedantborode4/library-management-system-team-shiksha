import prismaClient from "../utils/db.js";
import { groupBorrowSchema, individualBorrowSchema } from "../utils/schema.zod.js"

export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export async function borrowIndividual(req, res) {
    const parsedData = individualBorrowSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }

    const { bookId } = parsedData.data;
    const userId = req.userId
    
    try {
        const existingBorrow = await prismaClient.borrowing.findFirst({
            where: {
                userId: userId,
                isReturned: false
            }
        })

        if (existingBorrow) {
            return res.status(403).json({
                message: "User already has an active borrowing"
            })
        }

        const book = await prismaClient.book.findUnique({
            where: { id: bookId }
        })
        
        if (!book) {
            return res.status(403).json({ 
                message: "Book not found" 
            })
        }

        if (book.availableCopies < 1) {
            return res.status(403).json({ 
                message: "No available copies for this book" 
            })
        }

        const borrowDate = new Date();
        const dueDate = addDays(borrowDate, 30)

        const borrowing = await prismaClient.borrowing.create({
            data: {
                userId,
                bookId,
                borrowDate,
                dueDate
            }
        })

        await prismaClient.book.update({
            where: { 
                id: bookId 
            },
            data: { 
                availableCopies: { decrement: 1 } 
            }
        })

        return res.status(200).json({
            message: "Book borrowed successfully",
            borrowingId: borrowing.id,
            dueDate: dueDate.toISOString()
        })

    } catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error
        })
    }
}


export async function borrowGroup(req, res) {
    const parsedData = groupBorrowSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }

    const { groupId, bookId } = parsedData.data;
    const userId = req.userId;


    try {

        const group = await prismaClient.group.findUnique({
            where: {
                id: groupId 
            },
            include: { 
                members: true 
            }
        })

        if (!group) {
            return res.status(402).json({ 
                message: "Group not found" 
            })
        }

        const isMember = group.members.some(member => member.userId === userId)

        if (!isMember) {
            return res.status(403).json({ 
                message: "User is not a member of this group" 
            })
        }

        const memberCount = group.members.length;

        if (memberCount < 3 || memberCount > 6) {
            return res.status(403).json({
                message: "Group must have between 3 and 6 members to borrow a book"
            })
        }

        const existingGroupBorrow = await prismaClient.borrowing.findFirst({
            where: {
                groupId: groupId,
                isReturned: false
            }
        })

        if (existingGroupBorrow) {
            return res.status(403).json({
                message: "Group already has an active borrowing"
            })
        }

        const book = await prismaClient.book.findUnique({
            where: { 
                id: bookId 
            }
        })

        if (!book) {
            return res.status(404).json({ 
                message: "Book not found" 
            })
        }

        if(book.availableCopies < 1) {
            return res.status(403).json({ 
                message: "No available copies for this book" 
            })
        }

        const borrowDate = new Date();
        const dueDate = addDays(borrowDate, 180);

        const borrowing = await prismaClient.borrowing.create({
            data: {
                groupId,
                bookId,
                borrowDate,
                dueDate
            }
        })

        await prismaClient.book.update({
            where: { 
                id: bookId 
            },
            data: { 
                availableCopies: { decrement: 1 }
            }
        })

        return res.status(200).json({
            message: "Book borrowed successfully by group",
            borrowingId: borrowing.id,
            dueDate: dueDate.toISOString()
        })
        
    } catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error.message
        })
    }
}