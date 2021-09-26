import renderer from "react-test-renderer";
import React from "react";
import EmptyList from "../../src/components/EmptyList";

describe("EmptyList", () => {
  it("should show new EmptyList", () => {
    const tree = renderer.create(<EmptyList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
