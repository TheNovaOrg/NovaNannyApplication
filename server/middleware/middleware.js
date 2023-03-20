import User from "../models/user.Model.js";
import jwt from "jsonwebtoken";
import ENV from "../config.js";

// middleware to verify username existence in DB.
export default async function verifyUserExistence(req, res, next) {
    console.log("VerifyUser was called!");
    try {
        console.log(req.query);
        const { username } = req.method == "GET" ? req.query : req.body;

        // check the user
        let exist = await User.findOne({ username });
        if (!exist) return res.status(404).send({ error: "Cannot find User!" });
        next();

    } catch (error) {
        return res.status(404).send({ error: "Authentication Error" });
    }
}

// setting local variables for OTP generation and verification
export function localVariables(req, res, next) {
    req.app.locals = {
        OPT: null,
        resetSession: false
    }
    next();
}

// middleware for auth token decode
export default async function authDecodeToken(req, res, next) {
    console.log("Decode token was called!");
    try {
        // accessingg authorize header to validate request
        const token = req.headers.authorization.split(" ")[1];

        const decodedToken = jwt.verify(token, ENV.JWT_SECRET);

        req.user = decodeToken;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Authentication Error : Decode Token failure" });
    }
}