import reducer, { setPathAlias } from "../userPageSlice";

describe("userPageSlice", () => {
  test("can change pathAlias", () => {
    const expectedPathAlias = "expectedValue";
    const initialState = {
      pathAlias: "",
    };

    expect(reducer(initialState, setPathAlias(expectedPathAlias))).toEqual({
      pathAlias: expectedPathAlias,
    });
  });
});
