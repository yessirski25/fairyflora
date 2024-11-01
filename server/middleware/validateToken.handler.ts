import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
    const token = req.cookies.auth_token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            console.log("Token verification failed:", err);
            return res.status(403).json({ message: "Unauthorized: Invalid token" });
        }

        req.employee = decoded.employee;
        next();
    });
};