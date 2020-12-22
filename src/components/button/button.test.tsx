import React from "react";
import ReactDOM from "react-dom";
import Button from "../button/button";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("button renders correctly", () => {
  const { getByTestId } = render(<Button label="Click me please"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Click me please");
});
