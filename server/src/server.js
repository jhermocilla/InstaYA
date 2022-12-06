const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const userRoute = require("./routes/autentication");
const cors = require('cors')

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors("/api", userRoute))
app.use("/api", userRoute);

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");

  });
  
// mongodb connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connectado a base de datos MongoDb"))
.catch((error) => console.error(error));

	
// server listening
app.listen(port, () => console.log(`http://localhost:${port}`))