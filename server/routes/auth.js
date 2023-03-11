import { Router } from "express";
import * as userController from "../controllers/userController.js";
const authRoutes = Router();

// Post Routes
authRoutes.route('/register').post(userController.registerUser);
authRoutes.route('/login').post(userController.loginUser);

export default authRoutes;