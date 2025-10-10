import { Router } from "express";
import { authRouter } from "./auth.routes.js";
import { bookRouter } from "./book.routes.js";
import { groupRouter } from "./group.routes.js";
import { borrowRouter } from "./borrow.routes.js";
import { returnRouter } from "./return.routes.js";

export const router = Router();

router.use("/auth", authRouter);

router.use("/book", bookRouter )

router.use("/group", groupRouter)

router.use("/borrow", borrowRouter)

router.use("/return", returnRouter)