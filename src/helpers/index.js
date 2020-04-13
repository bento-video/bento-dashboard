const getExt = (filename) => {
  return filename.split(".").pop();
};

export const getContentType = (filename) => {
  let contentType;
  switch (getExt(filename)) {
    case "mkv":
      contentType = "video/x-matroska";
      break;
    case "mp4":
      contentType = "video/mp4";
      break;
    case "mov":
      contentType = "video/quicktime";
      break;
    default:
      contentType = "video/mp4";
  }
  return contentType;
};

export default {
  getContentType,
};
