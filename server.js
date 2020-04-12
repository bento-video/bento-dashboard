const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const { bentoS3Upload, allDBVideos, singleDBVideo } = require('./awsMethods');
cors = require('cors');
//const router = express.Router();
//const { bentoS3Upload, allDBVideos, singleDBVideo } = require('../awsMethods');

app.use(cors());
app.listen(port, () => console.log("Backend server live on port " + port));

/* GET home page. */
app.get('/', (req, res, next) => {
  allDBVideos((videos) => {
    res.send({ title: 'Bento', videos: videos });
  });
});

app.get('/videos/:id', (req, res, next) => {
  const id = req.params.id;
  singleDBVideo(id, (video) => {
    console.log(video);
    res.send({
      title: 'Bento',
      videos: [{
        name: video.name.S,
        size: video.size.S,
        resolution: video.resolution.S,
        versions: video.versions.S
      }]
    })
  });
});

app.post('/videos', (req, res, next) => {
  console.log("REQUEST: ", req);
  if (req.files) {
    console.log("files recieved.", req.files);
    const { video } = req.files;
    bentoS3Upload(video, () => {
      console.log("video uploaded successfully");
    });
  } else {
    console.log('no files');
  }
  res.send(req);
});
