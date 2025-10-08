import { Router } from "express";
import { authRouter } from "./auth.routes.js";
import { bookRouter } from "./book.routes.js";

export const router = Router();

router.use("/auth", authRouter);

router.use("/book", bookRouter )