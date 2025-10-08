import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createGroup } from "../controllers/group.controllers.js";

export const groupRouter = new Router();

groupRouter.post("/create", authMiddleware, createGroup)