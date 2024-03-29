import { Router } from "express";
import { authDecodeToken } from "../middleware/middleware.js";
import * as nannyController from "../controllers/nannyController.js";
import multer from "multer";
import { storage, cloudinaryConfig } from "../Cloudinary/config.js";

const nannyRoutes = Router();
// const upload = multer({ storage: storage });
const upload = multer({ dest: "uploads/" });

/** GET Methods */
nannyRoutes.route('/getNannies').get(authDecodeToken, nannyController.getNannies);
nannyRoutes.route('/getNanny/:nannyId').get(authDecodeToken, nannyController.getNanny);
nannyRoutes.route('/getNanniesBySpecialization/:speciality').get(authDecodeToken, nannyController.getNanniesBySpecialization);
nannyRoutes.route('/getNanniesByPriceRange/:priceRange').get(authDecodeToken, nannyController.getNanniesByPriceRange);

/** POST Methods */
nannyRoutes.route('/create').post(authDecodeToken, nannyController.createNanny);

/** Delete and Update Methods */
nannyRoutes.route('/:nannyId')
    .put(authDecodeToken, nannyController.updateNanny)
    .delete(authDecodeToken, nannyController.deleteNanny);

export default nannyRoutes;