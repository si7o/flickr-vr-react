const API_URL = "https://vr.andeandaran.com/api";

export const getHomePhotos = async () =>
  fetch(`${API_URL}/flickr`, { method: "GET" }).then((data) => data.json());

export const getUserPhotos = async (username) =>
  fetch(`${API_URL}/flickr/photos/${username}`, {
    method: "GET",
  }).then((data) => data.json());

export const getUserPhoto = async (username, photoId) =>
  fetch(`${API_URL}/flickr/photos/${username}/${photoId}`, {
    method: "GET",
  }).then((data) => data.json());
