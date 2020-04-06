import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Button from "./index";

it("Button renders correctly", () => {
  const tree = renderer.create(<Button label="btn" onClick={() => console.log('click')} />).toJSON();
  expect(tree).toMatchSnapshot();
});
