import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    comment: String,
    rating: Number,
    author : {
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});

export default mongoose.model('Review', ReviewSchema);