import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from '../config.js';
import otpGenerator from "otp-generator";

/** POST: http://localhost:3002/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
}
*/
export async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;
        // check if username already exists in DB.
        const userExists = await User.exists({ username });
        // check if email already exists in DB.
        const emailExists = await User.findOne({ email });
        if (!userExists && !emailExists && password) {
            // hash password with bcrypt
            const hashedPwd = await bcrypt.hash(password, 10);
            try {
                const newUser = await User.create(
                    {
                        username,
                        email,
                        password: hashedPwd
                    }
                );
                const dbRes = await newUser.save();
                if (dbRes) {
                    res.status(201).send("User Registration Success!");
                } else {
                    res.status(500).send("User Registration Failed!");
                }
            } catch (e) {
                return res.status(500).send(e)
            }
        }
    } catch (e) {
        console.log(e, "Either Username or Email already exists!");
        res.status(500).send({ error: "Either Username or Email already exists!" });
    }
}

/** POST: http://localhost:3002/api/login 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
}
*/
export async function loginUser(req, res) {
    try {
        const { username, password } = req.body;
        const loggedInUser = await User.findOne({ username });
        if (!loggedInUser) {
            return res.status(404).send("Username not found.");
        }
        bcrypt.compare(password, loggedInUser.password)
            .then((pwdCheck) => {
                if (!pwdCheck) return res.status(400).send({ error: "Don't have password." });
                // create/issue jwt token
                const token = jwt.sign({
                    id: loggedInUser._id,
                    username
                }, ENV.JWT_SECRET, { expiresIn: "24h" });

                if (token) {
                    res.status(200).send({
                        msg: "Login Successfull!",
                        username: loggedInUser.username,
                        token
                    });
                }
            }).catch((e) => {
                res.status(400).send({ error: "Password does not match." });
            })
    } catch (e) {
        res.status(500).send(e);
    }
}

/** GET: http://localhost:3002/api/user/eric123 */
export async function getUser(req, res) {
    const { username } = req.params;

    if (!username) return res.status(501).send({ error: "Invalid Username." });

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(501).send({ error: "Couldn't Find the User." });
        /** remove password from user */
        // mongoose return unnecessary data with object so convert it into json
        const { password, ...rest } = Object.assign({}, user.toJSON());
        return res.status(201).send(rest);
    } catch (e) {
        return res.status(404).send({ error: "Cannot Find User Data." });
    }
}

/** GET: http://localhost:3002/api/generateOTP */
export async function generateOTP(req, res) {
    try {
        req.app.locals.OTP = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false });
        return res.status(200).send({ OTP: req.app.locals.OTP });
    } catch (error) {
        res.status(500).send({ error: "Failed to generate OTP." });
    }
}

/** GET: http://localhost:3002/api/verifyOTP */
export async function verifyOTP(req, res) {
    try {
        const { OTP } = req.query;
        if (parseInt(OTP) === parseInt(req.app.locals.OTP)) {
            // reset OTP value
            req.app.locals.OTP = null;
            /// start session for reset password
            req.app.locals.resetSession = true;
            return res.status(201).send({ msg: 'OTP Verifification Successsful!' });
        }
    } catch (error) {
        return res.status(400).send({ error: "Invalid OTP" });
    }
}

// successfully redirect user when OTP is valid.
/** GET: http://localhost:3002/api/createResetSession */
export async function createResetSession(req, res) {
    if (req.app.locals.resetSession) {
        return res.status(201).send({ isValidSession: req.app.locals.resetSession });
    }
    return res.status(440).send({ msg: "Session expired!" });
}

// update the password when we have valid session
/** PUT: http://localhost:3002/api/resetPassword */
export async function resetPassword(req, res) {
    console.log("Reset Password was called!!");
    try {
        if (!req.app.locals.resetSession) return res.status(440).send({ error: "Session expired!" });

        const { username, password } = req.body;

        const foundUser = await User.findOne({ username });
        if (!foundUser) return res.status(404).send({ error: "User not found!" });

        // hash the new password
        const hashedPwd = await bcrypt.hash(password, 10);
        if (!hashedPwd) return res.status(500).send({ error: "Unable to hash password." });

        // update the user's password in DB.
        const updatedUser = await User.updateOne({ _id: foundUser._id }, { password: hashedPwd });
        if (!updatedUser) return res.status().send({ error: "Failed to update user. Database error!" });
        if (updatedUser.acknowledged) {
            req.app.locals.resetSession = false; // reset session
            console.log("record updated!");
            return res.status(201).send({ msg: "Record Updated...!" });
        }
    } catch (error) {
        return res.status(401).send({ error });
    }
}

// /** DELETE: http://localhost:3002/api/logout */
// export async function logoutUser(req, res) {
//     console.log("Logout was called!!");
//     try {
//         const { refreshToken } = req.body;
//         console.log(refreshToken);
//         if(!refreshToken) return res.status(400).send("Bad Request");
//         const token = jwt.verify(refreshToken);
//         if(token === refreshToken)
//     } catch (e) {
//         return res.status(401).send({ e });
//     }
// }
