import prismaClient from "../utils/db.js"

export async function adminMiddleware(req, res, next){
    const userId = req.userId

    if (!userId) {
        return res.status(401).json({ 
            message: "User ID not found" 
        })
    }

    try {
        const user = await prismaClient.user.findUnique({
            where:  {
                id: userId
            }
        })
    
        if(!user || user.role !== "ADMIN"){
            return res.status(403).json({
                error: "Access denied"
            })
        }
        next()

    } catch (error) {
        res
        .status(401)
        .json({
            message: "Internal Server Error"
        })
    }
}
