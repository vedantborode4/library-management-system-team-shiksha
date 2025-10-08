import { Router } from "express";
import { addBook, getBooks, modifyBook, removeBook } from "../controllers/book.controllers.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const bookRouter = new Router();

bookRouter.get("/", getBooks)
bookRouter.post("/add", authMiddleware, adminMiddleware , addBook )
bookRouter.post("/remove", authMiddleware, adminMiddleware , removeBook )
bookRouter.post("/modify", authMiddleware, adminMiddleware , modifyBook )