import renderer from "react-test-renderer";
import React from "react";
import DataLoading from "../../src/components/DataLoading";

describe("DataLoading", () => {
  it("should show new DataLoading", () => {
    const tree = renderer.create(<DataLoading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
