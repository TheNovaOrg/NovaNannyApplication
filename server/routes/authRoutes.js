import { Router } from "express";
import * as userController from "../controllers/userController.js";
import verifyUserExistence from "../middleware/middleware.js";
const authRoutes = Router();

// Post Routes
authRoutes.route('/register').post(userController.registerUser);
authRoutes.route('/login').post(verifyUserExistence, userController.loginUser);
authRoutes.route('/authenticate').post(verifyUserExistence, (req, res) => res.end()); // authenticate user

export default authRoutes;