import { Router } from "express";
import * as userController from "../controllers/userController.js";
import * as mailerController from "../controllers/mailerController.js";
import verifyUserExistence, { localVariables } from "../middleware/middleware.js";
const authRoutes = Router();

// Post Routes
authRoutes.route('/register').post(userController.registerUser);
authRoutes.route('/login').post(verifyUserExistence, userController.loginUser);
authRoutes.route('/authenticate').post(verifyUserExistence, (req, res) => res.end()); // authenticate user
authRoutes.route('/registerEmail').post(verifyUserExistence, mailerController.registerEmail); // authenticate user

// Get Routes
authRoutes.route('/generateOTP').get(verifyUserExistence, localVariables, userController.generateOTP);
authRoutes.route('/verifyOTP').get(verifyUserExistence, userController.verifyOTP);
authRoutes.route('/createResetSession').get(userController.createResetSession);

// Put Routes
authRoutes.route('/resetPassword').put(verifyUserExistence, userController.resetPassword);

export default authRoutes;