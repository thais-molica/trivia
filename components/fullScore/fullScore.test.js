import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import FullScore from "./index";

it("FullScore renders correctly", () => {
  const tree = renderer.create(<FullScore correct={1}  error={1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
