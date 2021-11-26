// Default manual mocks for skyboxService methods

export const getHomePhotos = jest.fn(async () => ({
  page: 1,
  pages: 889,
  perpage: 50,
  total: 44410,
  photos: [
    {
      id: "51704730656",
      title: "Piazza della Chiesa",
      thumbnail:
        "https://live.staticflickr.com/65535/51704730656_7d284c8029_n.jpg",
      username: "hapePHOTOGRAPHIX",
      owner: "49550796@N08",
      pathAlias: "hapephotographix",
    },
    {
      id: "51700768038",
      title: "Dragonfly FAA Museum 17th Sept 2021 #4",
      thumbnail:
        "https://live.staticflickr.com/65535/51700768038_766648c803_n.jpg",
      username: "JDurston2009",
      owner: "42110410@N06",
      pathAlias: "jdurston2009",
    },
  ],
}));

export const getUserPhotos = jest.fn(async () => ({
  username: "Sitoo",
  owner: "7470842@N04",
  pathAlias: "sitoo",
  page: 1,
  pages: 1,
  perpage: 100,
  total: 64,
  photos: [
    {
      id: "51308196665",
      title:
        "360\u00ba Panorama @ Castillo de Chirel, Cortes de Pall\u00e1s, Valencia",
      thumbnail: "/65535/51308196665_82b9ff364d_n.jpg",
    },
    {
      id: "50231114598",
      title: "360 panorama of the Milky Way from Cap de Ses Salines, Mallorca",
      thumbnail: "/65535/50231114598_6c56889991_n.jpg",
    },
  ],
}));

export const getUserPhoto = jest.fn(async () => ({
  thumbnail: "/65535/50231114598_6c56889991_m.jpg",
  username: "sitoo",
  canLoad: true,
  photoId: "50231114598",
  title: "360 panorama of the Milky Way from Cap de Ses Salines, Mallorca",
  desc: "Equirectangular panorama of the Milky Way taken from Cap de Ses Salines.\nTaken using a nodal ninja tripod mount.",
  url: "https://www.flickr.com/photos/sitoo/50231114598/",
  sdUrl: "/65535/50231114598_34de3cb5c7_h.jpg",
  hdUrl: "/65535/50231114598_71ae920a6e_f.jpg",
  equirectangular: "true",
}));
