import express from "express";
import 'dotenv/config'
import { router } from "./routes/index.routes.js";

const PORT = process.env.PORT || 8001;

const app = express();

app.use(express.json());

app.use("/api/v1", router)

app.listen(PORT, ()=> {
    console.log(`backend is running on port ${PORT}`)
})