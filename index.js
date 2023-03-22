const express = require("express");
const app = express();
const PORT = 8080;
const videos = require("./routes/videos");
const cors = require('cors');

app.use(cors());

// console.log("hello world");

app.use("/", videos );

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})