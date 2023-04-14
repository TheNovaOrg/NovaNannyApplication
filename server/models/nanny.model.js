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
    addresses: [
        {
            address: {
                type: String,
                required: true
            },
            postalCode: {
                type: String,
                required: true
            }
        }
    ],
    phone: {
        type: String,
        required: true,
        unique: [true]
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
        path: String,
        filename: String
    }
    ,
    gender: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review' //model name
        }
    ]
});

export default mongoose.model('Nanny', NannySchema);