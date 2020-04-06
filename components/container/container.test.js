import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Container from "./index";

it("Container renders correctly", () => {
  const tree = renderer.create(<Container><div>teste</div></Container>).toJSON();
  expect(tree).toMatchSnapshot();
});
