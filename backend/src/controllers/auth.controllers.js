import prismaClient from "../utils/db.js";
import { userSigninSchema, userSignupSchema } from "../utils/schema.zod.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET

if(!JWT_SECRET){
    console.log("error while loading JWT_SECRET")
}

export async function signup (req, res) {
    const parsedData = userSignupSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }

    try {
        const existingEmail = await prismaClient.user.findUnique({
            where:{
                email: parsedData.data.email
            }
        })
        if(existingEmail){
            return res.status(402).json({
                message: "Email already exist"
            })
        }
        const existingUsername = await prismaClient.user.findUnique({
            where:{
                username: parsedData.data.username
            }
        })
        if(existingUsername){
            return res.status(402).json({
                message: "Username already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(parsedData.data.password, 5)
        
        const user = await prismaClient.user.create({
            data: {
                email: parsedData.data.email,
                username: parsedData.data.username,
                password: hashedPassword,
                firstName: parsedData.data.firstName,
                lastName: parsedData.data.lastName
            }
        })

        res.status(200).json({
            message:  "User created successfully"
        })
    } catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error
        })
    }
}

export async function signin (req, res){
    const parsedData = userSigninSchema.safeParse(req.body)

    if(!parsedData.success){
        return res.status(401).json({
            message: parsedData.error.format()
        })
    }

    try {
        const user = await prismaClient.user.findUnique({
            where: {
                username: parsedData.data.username
            }
        })

        if(!user){
            return res.status(402).json({
                message: "Username doesn't exist"
            })
        }

        const isValid = await bcrypt.compare(parsedData.data.password, user.password,);
    
        if(!isValid){
            res.status(402).json({ message: "Incorrect Password" });
            return;
        }

        const token = jwt.sign({
            userId: user.id 
        }, JWT_SECRET,{
            expiresIn: "12h"
        }
        )

        res.status(200).json({
            message: "Signin successfully",
            token: token
        })

    } catch (error) {
        res.status(403)
        .json({
            message: "Internal server error, Please try again",
            error: error
        })
    }
}