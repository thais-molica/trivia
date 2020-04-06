import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Box from "./index";

it("Box renders correctly", () => {
  const tree = renderer.create(<Box>teste</Box>).toJSON();
  expect(tree).toMatchSnapshot();
});
