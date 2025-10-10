import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { returnBook } from "../controllers/return.controllers.js";

export const returnRouter = new Router()

returnRouter.post("/", authMiddleware, returnBook)