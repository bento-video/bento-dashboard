const bytes = require("bytes");
const path = require("path");

const VALID_FILETYPES = [".mp4", ".mov", ".ts", ".mkv", ".3gp"];

const getContentType = (filename) => {
  let contentType;
  switch (path.extname(filename)) {
    case ".mkv":
      contentType = "video/x-matroska";
      break;
    case ".mp4":
      contentType = "video/mp4";
      break;
    case ".mov":
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

export const formatBytes = (num) => bytes(+num, { unitSeparator: " " });

export const sortFilenames = (videoA, videoB) => {
  const a = videoA.filename.toUpperCase();
  const b = videoB.filename.toUpperCase();
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

export const formatResolution = (resolution) => `${resolution.split("x")[1]}p`;

export const resolutionOptions = (resLimit) => {
  const supportedResolutions = [
    "3840x2160",
    "1920x1080",
    "1280x720",
    "640x360",
  ];
  const limit = Number(resLimit.split("x")[1]);
  return supportedResolutions.reduce(
    (opts, cur) => {
      const curRes = Number(cur.split("x")[1]);
      if (curRes < limit) {
        opts.push(cur);
      }
      return opts;
    },
    [resLimit]
  );
};

export const getVersionFilename = ({ filename, resolution, outputType }) => {
  resolution = resolution.split("x")[1];
  return `${filename}-${resolution}${outputType}`;
};

export const validateFileInput = (file) => {
  if (!file) {
    return {
      error: true,
      msg: "Must select a file to upload.",
    };
  } else if (!VALID_FILETYPES.includes(path.extname(file.name))) {
    return {
      error: true,
      msg: `Accepted video formats: ${VALID_FILETYPES.join(", ")}`,
    };
  } else {
    return {
      msg: "File accepted.",
    };
  }
};

export default {
  getContentType,
  formatSeconds,
  formatBytes,
  sortFilenames,
  formatResolution,
  getVersionFilename,
  validateFileInput,
};
