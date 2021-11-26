import {
  DEFAULT_URL,
  FLICKR_URL,
  extractURLParams,
  getFlickrUserUrl,
  getFlickrPhotoUrl,
  getUserUrl,
  getUserPhotoUrl,
} from "../urlHelper";

const mockedUsername = "username";
const mockedUserId = "user@ID";
const mockedPhotoId = "123456789";

describe("urlHelper", () => {
  describe("getFlickrUserUrl tests", () => {
    test("username only", () => {
      const result = getFlickrUserUrl(mockedUsername);
      const expectedResult = `${FLICKR_URL}/photos/${mockedUsername}`;

      expect(result).toEqual(expectedResult);
    });

    test("userId only", () => {
      const result = getFlickrUserUrl(null, mockedUserId);
      const expectedResult = `${FLICKR_URL}/photos/${mockedUserId}`;

      expect(result).toEqual(expectedResult);
    });

    test("username & userId", () => {
      const result = getFlickrUserUrl(mockedUsername, mockedUserId);
      const expectedResult = `${FLICKR_URL}/photos/${mockedUsername}`;

      expect(result).toEqual(expectedResult);
    });

    test("no username or userId", () => {
      const result = getFlickrUserUrl(null, "");

      expect(result).toEqual(DEFAULT_URL);
    });
  });

  describe("getFlickrPhotoUrl tests", () => {
    test("username only", () => {
      const result = getFlickrPhotoUrl(mockedUsername, "", mockedPhotoId);
      const expectedResult = `${FLICKR_URL}/photos/${mockedUsername}/${mockedPhotoId}`;

      expect(result).toEqual(expectedResult);
    });

    test("userId only", () => {
      const result = getFlickrPhotoUrl(null, mockedUserId, mockedPhotoId);
      const expectedResult = `${FLICKR_URL}/photos/${mockedUserId}/${mockedPhotoId}`;

      expect(result).toEqual(expectedResult);
    });

    test("username & userId", () => {
      const result = getFlickrPhotoUrl(
        mockedUsername,
        mockedUserId,
        mockedPhotoId
      );
      const expectedResult = `${FLICKR_URL}/photos/${mockedUsername}/${mockedPhotoId}`;

      expect(result).toEqual(expectedResult);
    });

    test("no username or userId", () => {
      const result = getFlickrPhotoUrl(null, "", mockedPhotoId);

      expect(result).toEqual(DEFAULT_URL);
    });

    test("no photoId", () => {
      const result = getFlickrPhotoUrl(mockedUsername, mockedUserId, null);

      expect(result).toEqual(DEFAULT_URL);
    });
  });

  describe("getUserUrl tests", () => {
    test("username only", () => {
      const result = getUserUrl(mockedUsername);
      const expectedResult = `/photos/${mockedUsername}`;

      expect(result).toEqual(expectedResult);
    });

    test("userId only", () => {
      const result = getUserUrl(null, mockedUserId);
      const expectedResult = `/photos/${mockedUserId}`;

      expect(result).toEqual(expectedResult);
    });

    test("username & userId", () => {
      const result = getUserUrl(mockedUsername, mockedUserId);
      const expectedResult = `/photos/${mockedUsername}`;

      expect(result).toEqual(expectedResult);
    });

    test("no username or userId", () => {
      const result = getUserUrl(null, "");

      expect(result).toEqual(DEFAULT_URL);
    });
  });
  describe("getUserPhotoUrl tests", () => {
    test("username only", () => {
      const result = getUserPhotoUrl(mockedUsername, "", mockedPhotoId);
      const expectedResult = `/photos/${mockedUsername}/${mockedPhotoId}`;

      expect(result).toEqual(expectedResult);
    });

    test("userId only", () => {
      const result = getUserPhotoUrl(null, mockedUserId, mockedPhotoId);
      const expectedResult = `/photos/${mockedUserId}/${mockedPhotoId}`;

      expect(result).toEqual(expectedResult);
    });

    test("username & userId", () => {
      const result = getUserPhotoUrl(
        mockedUsername,
        mockedUserId,
        mockedPhotoId
      );
      const expectedResult = `/photos/${mockedUsername}/${mockedPhotoId}`;

      expect(result).toEqual(expectedResult);
    });

    test("no username or userId", () => {
      const result = getUserPhotoUrl(null, "", mockedPhotoId);

      expect(result).toEqual(DEFAULT_URL);
    });

    test("no photoId", () => {
      const result = getUserPhotoUrl(mockedUsername, mockedUserId, null);

      expect(result).toEqual(DEFAULT_URL);
    });
  });
  describe("extractURLParams tests", () => {
    test("valid username returns urlParams", () => {
      const mockedValidUsernames = [
        {
          username: "  username ",
          expectedParams: { pathAlias: "username", photoId: "" },
        },
        {
          username: "Username",
          expectedParams: { pathAlias: "username", photoId: "" },
        },
        {
          username: "user1234@Name",
          expectedParams: { pathAlias: "user1234@name", photoId: "" },
        },
      ];

      mockedValidUsernames.forEach((item) => {
        expect(extractURLParams(item.username)).toMatchObject(
          item.expectedParams
        );
      });
    });

    test("invalid username returns empty urlParams", () => {
      const expectedUrlParams = { pathAlias: "", photoId: "" };
      const mockedInvalidUsernames = [
        "user name",
        "User name",
        "user1234 @ Name",
        "",
        "     ",
      ];

      mockedInvalidUsernames.forEach((username) => {
        expect(extractURLParams(username)).toMatchObject(expectedUrlParams);
      });
    });

    test("valid flickr URLs returns urlParams", () => {
      const mockedValidFlickrURLs = [
        {
          url: "flickr.com/photos/useRName",
          expectedParams: { pathAlias: "username", photoId: "" },
        },
        {
          url: "flickr.com/photos/username",
          expectedParams: { pathAlias: "username", photoId: "" },
        },
        {
          url: "flickr.com/photos/username/12345678",
          expectedParams: { pathAlias: "username", photoId: "12345678" },
        },
        {
          url: "flickr.com/photos/user@Name/12345678/whatever",
          expectedParams: { pathAlias: "user@name", photoId: "12345678" },
        },
      ];

      mockedValidFlickrURLs.forEach((item) => {
        expect(extractURLParams(item.url)).toMatchObject(item.expectedParams);
      });
    });

    test("invalid flickr photoURL returns empty urlParams", () => {
      const expectedUrlParams = { pathAlias: "", photoId: "" };
      const mockedValidFlickrURLs = [
        "flickr.com/useRName",
        "whatever.com/photos/username",
        "",
        "flickr.com/user@Name/12345678/whatever",
      ];

      mockedValidFlickrURLs.forEach((url) => {
        expect(extractURLParams(url)).toMatchObject(expectedUrlParams);
      });
    });
  });
});
