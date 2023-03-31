if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}
import dotenv from 'dotenv';
import express from "express";
import multer from "multer";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import authRoutes from "./routes/authRoutes.js";
import connectToDb from './database/connection.js';
import userRoutes from './routes/userRoutes.js';
import nannyRoutes from './routes/nannyRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();
const upload = multer({ dest: 'uploads/' })
const PORT = 3002;

// middlewares
app.use(cors());
app.use(express.json());
// parser for formdata post request
app.use(bodyParser.urlencoded({ extended: true }));
// parsing json req body 
app.use(bodyParser.json());
// logging http requests on server terminal
app.use(morgan('tiny'));
// stack not exposed to hackers
app.disable("x-powered-by");
//configuring request body parsing
app.use(express.urlencoded({ extended: true }));
//configuring http verbs
app.use(methodOverride('_method'));

// middleware for setting response headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});

connectToDb().then(() => {
    console.log("Database Connected!");
    try {
        // Connect to server only when DB is connected.
        app.listen(PORT, () => {
            console.log(`Connected to server, listening to port: ${PORT}`);
        });
    } catch (error) {
        console.log("Connection to server failed!!");
    }
}).catch(e => console.error(e, "Database connection error"))

// middleware routes setup
app.use('/api', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/nanny', nannyRoutes);
app.use('/api/reviews/', reviewRoutes);

app.get('/', (req, res) => {
    res.send("Home");
})