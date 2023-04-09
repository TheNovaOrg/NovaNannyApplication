import { Router } from "express";
import { authDecodeToken, isReviewAuthor } from "../middleware/middleware.js";
import * as reviewController from "../controllers/reviewController.js";
const reviewRoutes = Router();

/** POST Methods */
reviewRoutes.route('/:userId/:nannyId').post(authDecodeToken, reviewController.createReviews);

/** DELETE Methods */
reviewRoutes.route('/:userId/:nannyId/:reviewId').delete(authDecodeToken, isReviewAuthor, reviewController.deleteReview);

export default reviewRoutes;