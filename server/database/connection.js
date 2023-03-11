import mongoose from 'mongoose';

async function connectToDb() {

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


