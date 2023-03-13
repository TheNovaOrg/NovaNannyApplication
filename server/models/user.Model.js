import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please provide unique username"],
        unique: [true, "username exists"]
    },
    email: {
        type: String,
        required: [true, "Please provide unique Email."],
        unique: [true],
        lowercase:true
    },
    password: {
        type: String,
        required: [true, "Please provide Password."],
        unique: false
    },
});

export default mongoose.model('User', UserSchema);