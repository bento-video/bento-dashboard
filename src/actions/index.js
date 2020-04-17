import axios from "axios";

export const fetchVideos = async () => {
  const videosData = await axios
    .get("http://localhost:3001/videos")
    .then((res) => res.data);
  console.log("Got videos:", videosData);
  return videosData;
};

export const fetchVersions = async (id) => {
  const versionData = await axios
    .get(`http://localhost:3001/videos/${id}`)
    .then((res) => {
      console.log("versions:", res.data.versions);
      return res.data.versions;
    });

  return versionData;
};

export default {
  fetchVersions,
};
