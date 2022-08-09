import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

test("ToDo", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  // after rendering our component
  // use DOM APIs (query selector) to make assertions
  // Jest syntax
  expect(root.querySelector("h1").textContent).toBe("To-Do's");
  expect(root.querySelector("label").textContent).toBe("Add a new To-Do:");
  expect(root.querySelector("button").textContent).toBe("Add #4");
});
