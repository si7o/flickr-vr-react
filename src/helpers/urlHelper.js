export const FLICKR_URL = "https://www.flickr.com";
export const DEFAULT_URL = "#";

/**
 * Builds Flickr User URL
 *
 * @param {String} username
 * @param {String} userId
 * @returns {String} Flickr User URL
 */
export const getFlickrUserUrl = (username, userId) =>
  username || userId
    ? `${FLICKR_URL}/photos/${username || userId}`
    : DEFAULT_URL;

/**
 * Builds Flickr Photo URL
 *
 * @param {String} username
 * @param {String} userId
 * @param {String} photoId
 * @returns {String} Flickr Photo URL
 */
export const getFlickrPhotoUrl = (username, userId, photoId) =>
  (username || userId) && photoId
    ? `${getFlickrUserUrl(username, userId)}/${photoId}`
    : DEFAULT_URL;

/**
 * Builds User URL
 *
 * @param {String} username
 * @param {String} userId
 * @returns {String} User URL
 */
export const getUserUrl = (username, userId) =>
  username || userId ? `/photos/${username || userId}` : DEFAULT_URL;

/**
 * Builds User Photo URL
 *
 * @param {String} username
 * @param {String} userId
 * @param {String} photoId
 * @returns {String} User Photo URL
 */
export const getUserPhotoUrl = (username, userId, photoId) =>
  (username || userId) && photoId
    ? `${getUserUrl(username, userId)}/${photoId}`
    : DEFAULT_URL;

/**
 * @typedef {Object} UrlParams
 * @property {String} pathAlias
 * @property {String} photoId
 */
/**
 * Extracts pathAlias & photoId params from a flicker URL or username
 * @param {String} value
 * @returns {UrlParams} containing {pathAlias, photoId}
 */
export const extractURLParams = (value) => {
  const urlParams = { pathAlias: "", photoId: "" };

  const hasNoSpaces = /^\S*$/.test(value.trim());
  const photoPageMatch =
    hasNoSpaces && value.match(/flickr.com\/photos\/([\w@]+)\/([0-9]+)/);
  const userPageMatch =
    hasNoSpaces && value.match(/flickr.com\/photos\/([\w@]+)/);
  const validUsername = hasNoSpaces && /^[a-z0-9@]+$/gi.test(value.trim());

  // check if its a valid URL
  if (photoPageMatch) {
    urlParams.pathAlias = photoPageMatch[1].toLowerCase();
    urlParams.photoId = photoPageMatch[2].toLowerCase();
  } else if (userPageMatch) {
    urlParams.pathAlias = userPageMatch[1].toLowerCase();
  } else if (validUsername) {
    urlParams.pathAlias = value.trim().toLowerCase();
  }

  return urlParams;
};

/**
 * Returns the URL
 * @param {String} value Flickr URL or username
 * @returns {String} Internal URL to redirect the user
 * @throws if no URL
 */
export const getStartHereURL = (value) => {
  const { pathAlias, photoId } = extractURLParams(value);

  if (pathAlias && photoId) {
    return getUserPhotoUrl(pathAlias, "", photoId);
  }

  if (pathAlias) {
    return getUserUrl(pathAlias, "");
  }

  throw "The URL or username is not valid!";
};
