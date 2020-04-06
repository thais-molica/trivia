import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Score from "./index";

it("Score renders correctly", () => {
  const tree = renderer.create(<Score title="easy" correct={3} error={5} />).toJSON();
  expect(tree).toMatchSnapshot();
});
