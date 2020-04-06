import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import Base from "./index";

it("Base renders correctly", () => {
  const tree = renderer.create(<Base><div>teste</div></Base>).toJSON();
  expect(tree).toMatchSnapshot();
});
