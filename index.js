const express = require("express");
const app = express();
const PORT = 8080;
const videos = require("./routes/videos");
const cors = require('cors');
const fs = require("fs");

app.use(cors());

app.use(express.json());


app.use(express.static("public"));


app.use("/", videos );

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})