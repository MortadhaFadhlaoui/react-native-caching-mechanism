import renderer from "react-test-renderer";
import React from "react";
import Item from "../../src/components/Item";

const title = "Name";
const subTitle = "Age";

describe("Item", () => {
  it("should show new Item", () => {
    const tree = renderer
      .create(<Item title={title} subtitle={subTitle} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
