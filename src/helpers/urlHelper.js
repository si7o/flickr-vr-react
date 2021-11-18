const FLICKR_URL = "https://www.flickr.com";
const DEFAULT_URL = "#";

export const getFlickrUserUrl = (username, userId) =>
  username || userId
    ? `${FLICKR_URL}/photos/${username || userId}`
    : DEFAULT_URL;

export const getFlickrPhotoUrl = (username, userId, photoId) =>
  (username || userId) && photoId
    ? `${getFlickrUserUrl(username, userId)}/${photoId}`
    : DEFAULT_URL;

export const getUserUrl = (username, userId) =>
  username || userId ? `/photos/${username || userId}` : DEFAULT_URL;

export const getUserPhotoUrl = (username, userId, photoId) =>
  (username || userId) && photoId
    ? `${getUserUrl(username, userId)}/${photoId}`
    : DEFAULT_URL;

export const extractURLParams = (value) => {
  const urlParams = { pathAlias: "", photoId: "" };

  const photoPageMatch = value.match(/flickr.com\/photos\/([\w-@]+)\/([0-9]+)/);
  const userPageMatch = value.match(/flickr.com\/photos\/([\w-@]+)/);
  // check if its a valid URL
  if (photoPageMatch) {
    urlParams.pathAlias = photoPageMatch[1];
    urlParams.photoId = photoPageMatch[2];
  } else if (userPageMatch) {
    urlParams.pathAlias = userPageMatch[1];
  } else {
    urlParams.pathAlias = value;
  }

  return urlParams;
};

export const getStartHereURL = (value) => {
  const { pathAlias, photoId } = extractURLParams(value);

  if (pathAlias && photoId) {
    return getUserPhotoUrl(pathAlias, "", photoId);
  }

  if (pathAlias) {
    return getUserUrl(pathAlias, "");
  }

  return "";
};
