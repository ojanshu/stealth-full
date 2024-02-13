const express = require("express");
const cors = require('cors');
const app = express();
const query = require("./routes/route");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

//to use frontend (which i have not created)
// app.use(express.static("./public"))

app.use(cors({ origin: "http://localhost:5173"}));

//to parse json data
app.use(express.json());

//specifies the basic api route
app.use("/api/v1/query", query)

//uses middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

//to connect it to the PORT given else 3000
const port= process.env.PORT || 3000;

const start = async () => {
    try {
        //this gets MONGO_URI from .env file to connect to the database
        await connectDB(process.env.MONGO_URI);
        app.listen( port, console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();