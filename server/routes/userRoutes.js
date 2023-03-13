import { Router } from "express";
import * as userController from "../controllers/userController.js";
const userRoutes = Router();

/** GET Methods */
userRoutes.route('/:username').get(userController.getUser); // user with username

export default userRoutes;