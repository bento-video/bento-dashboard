const getExt = (filename) => {
  return filename.split(".").pop();
};

const getContentType = (filename) => {
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

export const formatSeconds = (seconds) => {
  seconds = Math.round(+seconds);
  let result = [];
  let duration;
  while (seconds > 0) {
    duration = seconds % 60;
    result.unshift(duration.toString().padStart(2, "0"));
    seconds -= duration;
    seconds /= 60;
  }
  if (result.length === 1) {
    result.unshift("00");
  }
  return result.length > 0 ? result.join(":") : "00:00";
};

export default {
  getContentType,
  formatSeconds,
};
