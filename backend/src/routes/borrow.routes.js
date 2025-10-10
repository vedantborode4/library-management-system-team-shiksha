import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { borrowGroup, borrowIndividual } from "../controllers/borrow.controllers.js";

export const borrowRouter = new Router();

borrowRouter.post("/individual", authMiddleware, borrowIndividual)
borrowRouter.post("/group", authMiddleware, borrowGroup)