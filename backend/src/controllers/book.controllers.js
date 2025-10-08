import prismaClient from "../utils/db.js";
import { addBookSchema, modifyBookSchema, removeBookSchema } from "../utils/schema.zod.js";

export async function getBooks(req, res){
    try {
        const books = await prismaClient.book.findMany({
            include: {
                category: true,
            },
        });

        res.status(200).json({
            data: books 
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Failed to fetch books" 
        });
    }
    
}


export async function addBook(req, res){
    const parsedData = addBookSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }

    try {
        let existingCategory = await prismaClient.category.findUnique({
            where: { 
                name: parsedData.data.category 
            }
        })

        if (!existingCategory) {
            existingCategory = await prismaClient.category.create({
            data: { 
                name: parsedData.data.category
            }
        })
        const categoryId = existingCategory.id

        const existingisbn = await prismaClient.book.findUnique({
            where: { 
                name: parsedData.data.isbn
            }
        })

        if(existingisbn) {
            return res.status(403).json({
                message: "book with given isbn exist"
            })
        }

        const book = await prismaClient.book.create({
            data: {
                isbn: parsedData.data.isbn, 
                title: parsedData.data.title,
                author: parsedData.data.author,
                price: parsedData.data.price,
                categoryId: categoryId,
                totalCopies: parsedData.data.totalCopies,
                condition: parsedData.data.condition
            }
        })

        res.status(200).json({
            message:  "book listed"
        })

    }

    } catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error
        })
    }

}


export async function removeBook(req, res){
        
    const parsedData = removeBookSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }
    
    const isbn = parsedData.data.isbn

    if (!isbn) {
    return res.status(400).json({
        success: false,
        message: "ISBN is required to remove a book.",
    });
    }

    try {

        const book = await prisma.book.findUnique({
            where: { isbn: isbn }
        })

        if (!book) {
            return res.status(403).json({
                message: "Book not found"
            })
        }

        if( book.totalCopies !== book.availableCopies ){
            return res.status(402).json({
                message: "all books are not avilable in the library, so you can not delete the book"
            })
        }

        await prisma.book.delete({ where: { id: book.id } })

        res.status(200).json({
            message:  "book deleted succesfully"
        })

            
    } catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error
        })
    }
}


export async function modifyBook(req, res){
    
    const parsedData = modifyBookSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }

    try {
        const book = await prisma.book.findUnique({
            where: { isbn: parsedData.data.isbn }
        })

        if (!book) {
            return res.status(403).json({
                message: "Book not found"
            })
        }

        const updateData = {}

        if (title !== undefined) updateData.title = parsedData.data.title;
        if (author !== undefined) updateData.author = parsedData.data.author;
        if (price !== undefined) updateData.price = parsedData.data.price;
        if (categoryId !== undefined) {
            let existingCategory = await prismaClient.category.findUnique({
                where: { 
                    name: parsedData.data.category 
                }
            })

            if (!existingCategory) {
                existingCategory = await prismaClient.category.create({
                    data: { 
                        name: parsedData.data.category
                    }
                })
                
                const categoryId = existingCategory.id
            
                updateData.categoryId = categoryId;
            }
        }
        if (condition !== undefined) updateData.condition = parsedData.data.condition;

        if (totalCopies !== undefined) {
            const scope = totalCopies - book.totalCopies;

            if (scope < 0 && book.availableCopies < Math.abs(scope)) {
                return res.status(400).json({
                message: `Cannot reduce total copies below current available copies (${book.availableCopies})`
                });
            }

            updateData.totalCopies = parsedData.data.totalCopies;
            updateData.availableCopies = book.availableCopies + scope;
        }

        const updatedBook = await prisma.book.update({
            where: { isbn },
            data: updateData,
        })

        return res.status(200).json({
            message: "Book updated successfully",
            data: updatedBook
        })        
        
    } 
    catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error
        })
    }
}