import User from "../models/user.Model.js";

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