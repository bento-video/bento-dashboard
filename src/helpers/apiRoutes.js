const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export const VIDEOS_ROUTE = `${API_ENDPOINT}/videos/`;
export const VERSIONS_ROUTE = `${API_ENDPOINT}/versions/`;
export const FETCH_PRESIGNEDURL_ROUTE = `${API_ENDPOINT}/videos/new`;

export default {
  VIDEOS_ROUTE,
  FETCH_PRESIGNEDURL_ROUTE,
  VERSIONS_ROUTE,
};
