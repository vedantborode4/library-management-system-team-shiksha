import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET

if(!JWT_SECRET){
    console.log("error while loading JWT_SECRET")
}

export async function authMiddleware(req, res, next) {
    const header = req.headers["authorization"]

    if (!header) {
        return res
        .status(401)
        .json({ message: "Unauthorized: No authorization header provided" });
    }

    const token = header.startsWith("Bearer ") ? header.split(" ")[1] : header;

    if (!token) {
        return res
        .status(401)
        .json({ message: "Unauthorized: Token missing!" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (error) {
        return res
        .status(401)
        .json({ message: "Unauthorized: Invalid or expired token" });
  }
}