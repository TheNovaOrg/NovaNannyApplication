import { Router } from "express";
import { authDecodeToken } from "../middleware/middleware.js";
import * as nannyController from "../controllers/nannyController.js";
const nannyRoutes = Router();

/** GET Methods */
nannyRoutes.route('/getNannies').get(authDecodeToken, nannyController.getNannies); // user with username

export default nannyRoutes;