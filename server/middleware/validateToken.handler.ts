import jwt from "jsonwebtoken";

export const validateToken = async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) =>{
            if (err) {
                res.status(401);
                throw new Error("User not authorized");
            }

            req.employee = decoded.employee;
            next();
        });

        if (!token) {
            res.status(401);
            throw new Error("Please provide a token for your request");
        }
    }
};