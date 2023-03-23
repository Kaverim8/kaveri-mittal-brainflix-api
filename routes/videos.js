const express = require("express");
const router = express.Router(); // To use router, instantiate it like this
const fs = require("fs");
const uniqid = require("uniqid");


function readVideos() {
    const videosJson = fs.readFileSync('./data/video-details.json');
    const parsedVideos = JSON.parse(videosJson);
    return parsedVideos;
}


router.get('/videos', (req, res) => {
    res.json(readVideos());
})


router.get("/videos/:id", (req, res) => {
    const videos = readVideos();


    const singlevideo = videos.find((video) =>
        video.id === req.params.id);
        res.json(singlevideo);

})


router.post("/videos", (req, res, next) => {

const imagePath = "http://localhost:8080/images/image2.jpeg"

const updateVideo = {
    id: uniqid(),
    title: req.body.title,
    description: req.body.description,
    image: imagePath
}
// console.log(req.body);

const videos = readVideos();
videos.push(updateVideo);
fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));
res.status(200).json(updateVideo);

})


router.get("/videos/:id/comments", (req, res) => {
    const commentsJson = fs.readFileSync('./data/video-details.json');
    const parsedComments = JSON.parse(commentsJson);
    console.log(parsedComments);


})








module.exports = router;


// req.body.image ?? 'hardcoded file path'