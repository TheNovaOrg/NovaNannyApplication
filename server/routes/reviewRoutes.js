import { Router } from "express";
import { authDecodeToken } from "../middleware/middleware.js";
import * as reviewController from "../controllers/reviewController.js";
const reviewRoutes = Router();

/** POST Methods */
reviewRoutes.route('/:nannyId').post(reviewController.createReviews);

/** DELETE Methods */
// reviewRoutes.route('/:reviewId').delete(authDecodeToken, reviewController.deleteReview);

export default reviewRoutes;