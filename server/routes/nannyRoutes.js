import { Router } from "express";
import { authDecodeToken } from "../middleware/middleware.js";
import * as nannyController from "../controllers/nannyController.js";
const nannyRoutes = Router();

/** GET Methods */
nannyRoutes.route('/getNannies').get(authDecodeToken, nannyController.getNannies); // user with username
nannyRoutes.route('/getNanniesBySpecialization/:speciality').get(authDecodeToken, nannyController.getNanniesBySpecialization);
nannyRoutes.route('/getNanniesByPriceRange/:priceRange').get(nannyController.getNanniesByPriceRange);

export default nannyRoutes;