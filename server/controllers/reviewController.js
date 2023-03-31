import Nanny from "../models/nanny.model.js";
import Review from "../models/review.model.js";
import User from "../models/user.Model.js";

/** POST: http://localhost:3002/api/nanny/reviews/:nannyId
*/
export async function createReviews(req, res) {
    console.log("Create Review was called!!");
    try {
        let { nannyId } = req.params;
        console.log(req.body);
        console.log(req.params);
        const user = await User.findById();
        console.log(user);
        const nannies = await Nanny.findById(nannyId);
        console.log(nannies);
        if (!nannies) return res.status(501).send({ error: "Couldn't Find Nannies to create reviews." });
        const review = new Review(req.body.review);
        review.author = user._id;
        nannies.reviews.push(review);
        await nannies.save();
        await review.save();
        res.status(200).send("Review created successfully!");
    } catch (e) {
        return res.status(404).send({ error: "Something went wrong creating reviews." });
    }
}