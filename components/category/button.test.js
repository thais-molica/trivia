import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Category from "./index";

it("Category renders correctly", () => {
  const tree = renderer.create(<Category name="category" />).toJSON();
  expect(tree).toMatchSnapshot();
});
