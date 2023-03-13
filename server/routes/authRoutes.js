import { Router } from "express";
import * as userController from "../controllers/userController.js";
import * as mailerController from "../controllers/mailerController.js";
import verifyUserExistence from "../middleware/middleware.js";
const authRoutes = Router();

// Post Routes
authRoutes.route('/register').post(userController.registerUser);
authRoutes.route('/login').post(verifyUserExistence, userController.loginUser);
authRoutes.route('/authenticate').post(verifyUserExistence, (req, res) => res.end()); // authenticate user
authRoutes.route('/registerEmail').post(verifyUserExistence,mailerController.registerEmail); // authenticate user

// Get Routes
authRoutes.route('/generateOTP').get(verifyUserExistence,userController.generateOTP);
authRoutes.route('/verifyOTP').get(verifyUserExistence,userController.verifyOTP);



export default authRoutes;