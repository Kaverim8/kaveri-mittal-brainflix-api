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
const updateVideo = {
    id: uniqid(),
    title: req.body.title,
    description: req.body.description
}

const videos = readVideos();
videos.push(updateVideo);
fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));
// res.status(200).json(updateVideo);

})







// router.post("/videos", (req, res) => {

//     const newNote = {
//         id: uniqid(),
//         title: req.body.title,
//         content: req.body.content
//     }


//       const notes = readNotes();
//       notes.push(newNote);
//       fs.writeFileSync("./data/video-details.json", JSON.stringify(notes));  
//     // on line 54 we can do error handling and other stuff as well
//       res.status(200).json(newNote);
// })






module.exports = router;