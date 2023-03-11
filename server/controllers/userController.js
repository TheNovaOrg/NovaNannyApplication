import User from "../models/user.Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from '../config.js';
/** POST: http://localhost:3002/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
}
*/
export async function registerUser(req, res) {
    console.log("Register User was called!");
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
        res.status(500).send(e);
    }
}

/** POST: http://localhost:3002/api/login 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
}
*/
export async function loginUser(req, res) {
    console.log("Login user was called!!");
    try {
        const { username, password } = req.body;
        const loggedInUser = await User.findOne({ username });
        if (!loggedInUser) {
            return res.status(404).send("Username not found.");
        }
        console.log(password);
        console.log(loggedInUser);
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