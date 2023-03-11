import express from "express";
import multer from "multer";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const upload = multer({ dest: 'uploads/' })
const PORT = 3000;

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

app.listen(PORT, () => {
    console.log(`Server Connection Succesfull! Listening to ${PORT}`);
});
