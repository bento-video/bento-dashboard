import axios from "axios";

const ec2IP = process.env.PUBLIC_EC2_IP

export const fetchVideos = async () => {
  const videosData = await axios
    .get(`http://${ec2IP}:3001/videos`)
    .then((res) => res.data);
  console.log("Got videos:", videosData);
  return videosData;
};

export const fetchVersions = async (id) => {
  const versionData = await axios
    .get(`http://${ec2IP}:3001/videos/${id}`)
    .then((res) => {
      console.log("versions:", res.data.versions);
      return res.data.versions;
    });

  return versionData;
};

export default {
  fetchVersions,
};
