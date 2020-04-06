import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Level from "./index";

it("Level renders correctly", () => {
  const tree = renderer.create(<Level id="easy"/>).toJSON();
  expect(tree).toMatchSnapshot();
});
