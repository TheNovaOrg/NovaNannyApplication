import User from "../models/user.model.js";
import Review from "../models/review.model.js";
import jwt from "jsonwebtoken";
import ENV from "../config.js";

// middleware to verify username existence in DB.
export default async function verifyUserExistence(req, res, next) {
    console.log("VerifyUser was called!");
    try {
        const { username } = req.method == "GET" ? req.query : req.body;

        // Check the user
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
export async function authDecodeToken(req, res, next) {
    try {
        // accessing authorize header to validate request
        const token = (req.headers.authorization).toString().split(" ")[1];
        console.log(token);
        
        const decodedToken = jwt.verify(token, ENV.JWT_SECRET);

        req.user = decodedToken;

        next();
    } catch (error) {
        return res.status(401).json({ error: "Authentication Error : Decode Token failure" });
    }
}

export async function isReviewAuthor(req, res, next) {
    const { userId, reviewId } = req.params;
    const reviews = await Review.findById(reviewId);
    if (!reviews) return res.status(404).send({ error: "Couldn't find review in the database." });
    if (!reviews.author.equals(userId)) {
        return res.status(403).json({ error: "Permission denied to delete review." });
    } else next();
}