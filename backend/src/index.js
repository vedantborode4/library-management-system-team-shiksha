import express from "express";
import 'dotenv/config'
import { router } from "./routes/index.routes.js";
import cors from "cors";

const PORT = process.env.PORT || 8001;
const FrontendURL = process.env.FrontendURL|| "http://localhost:3000"

const app = express();

app.use(express.json());
app.use(cors());

app.use(cors({
    origin: FrontendURL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));


app.use("/api/v1", router)

app.listen(PORT, ()=> {
    console.log(`backend is running on port ${PORT}`)
})