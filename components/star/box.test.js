import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Star from "./index";

it("Star renders correctly", () => {
  const tree = renderer.create(<Star alt="alt" />).toJSON();
  expect(tree).toMatchSnapshot();
});
