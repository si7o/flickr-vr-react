import reducer, { QUALITY, toggleQuality } from "../photoPageSlice";

describe("photoPageSlice", () => {
  test("can toggle quality", () => {
    const initialState = {
      quality: QUALITY.SD,
    };

    expect(reducer(initialState, toggleQuality())).toEqual({
      quality: QUALITY.HD,
    });
  });
});
