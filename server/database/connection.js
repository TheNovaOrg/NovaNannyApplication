import mongoose from 'mongoose';
import ENV from "../config.js";

async function connectToDb() {

    // Connection to ATLAS.
    // const db = await mongoose.connect(ENV.ATLAS_URI);

    // connection to local mongo db with conn string.
    mongoose.connect('mongodb://localhost:27017/nannyApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Database connection error:"));
    db.once("open", () => {
        console.log("---- Database connected!! ----");
    });

    return db;
}

export default connectToDb;


