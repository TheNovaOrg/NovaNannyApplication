import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NannySchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Please provide unique Email."],
        unique: [true],
        lowercase: true
    },
    address: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: [true, "Please provide unique Phone number."],
        required: true
    },
    languages: [
        {
            type: String,
            required: true,
        }
    ],
    specialities: [
        {
            type: String,
            required: true,
        }
    ],
    price: {
        type: Number,
        required: true
    },
    image: {
        // path: String,
        // filename: String
        type: String,
    }
    ,
    gender: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    availability: {
        type: [String],
        require: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review' // model name
        }
    ]
});

export default mongoose.model('Nanny', NannySchema);