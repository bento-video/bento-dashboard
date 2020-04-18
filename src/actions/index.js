import axios from "axios";
import { VIDEOS_ROUTE } from "../helpers/apiRoutes";

export const fetchVideos = async () => {
  const videosData = await axios.get(VIDEOS_ROUTE).then((res) => res.data);
  return videosData;
};

export const fetchVersions = async (id) => {
  const versionData = await axios.get(`${VIDEOS_ROUTE}${id}`).then((res) => {
    return res.data.versions;
  });

  return versionData;
};

export default {
  fetchVersions,
  fetchVideos,
};
