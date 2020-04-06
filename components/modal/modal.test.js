import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Modal from "./index";

it("Modal renders correctly", () => {
  const tree = renderer.create(<Modal/>).toJSON();
  expect(tree).toMatchSnapshot();
});
