import Nanny from "../models/nanny.model.js";
import Review from "../models/review.model.js";
import User from "../models/user.model.js";

/** POST: http://localhost:3002/api/reviews/:userId/:nannyId */
export async function createReviews(req, res) {
    try {
        let { userId, nannyId } = req.params;
        const user = await User.findById(userId);
        const nannies = await Nanny.findById(nannyId);
        if (!nannies) return res.status(501).send({ error: "Couldn't Find Nannies to create reviews." });
        const review = new Review(req.body.review);
        console.log(review);
        review.author = user._id;
        nannies.reviews.push(review);
        await nannies.save();
        await review.save();
        res.status(200).send("Review created successfully!");
    } catch (e) {
        return res.status(500).send({ error: "Something went wrong creating reviews." });
    }
}

/** DELETE: http://localhost:3002/api/reviews/:userId/:nannyId/:reviewId */
export async function deleteReview(req, res) {
    try {
        const { nannyId, reviewId } = req.params;
        try {
            await Nanny.findByIdAndUpdate(nannyId, { $pull: { reviews: [reviewId] } });
        } catch (e) {
            return res.status(501).send({ error: "Couldn't Find Nannies to delete reviews." });
        }
        try {
            await Review.findByIdAndDelete(reviewId);
        } catch (e) {
            return res.status(501).send({ error: "Unable to delete find and delete reviews." });
        }
        res.status(200).send("Review deleted successfully!");
    } catch (e) {
        return res.status(500).send({ error: "Something went wrong deleting reviews." });
    }
};