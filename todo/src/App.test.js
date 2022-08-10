import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";
import { api } from "./api";

// mock API
const mockCreateItem = (api.createItem = jest.fn());

/*
test("ToDo", () => {
  const { getByText, getByLabelText } = render(<App />);

  // after rendering our component

  // use DOM APIs (query selector) to make assertions
  // Jest syntax
  // expect(root.querySelector("h1").textContent).toBe("To-Do's");
  // expect(root.querySelector("label").textContent).toBe("Add a new To-Do:");
  // expect(root.querySelector("button").textContent).toBe("Add #4");

  // use React Library to make assertions
  getByText("To-Do's");
  getByLabelText("Add a new To-Do:");
  getByText("Add #4");
});

// fireEvent
test("add items to list", () => {
  const { getByText, getByLabelText } = render(<App />);

  // after rendering our component
  getByText("To-Do's");
  const input = getByLabelText("Add a new To-Do:");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(getByText("Add #4"));

  // confirm data
  getByText("Add #5");
  getByText("wash car");
});

// userEvent expresses intent better
test("user-events allow users to add...", () => {
  const { getByText, getByLabelText } = render(<App />);

  // after rendering our component
  const input = getByLabelText("Add a new To-Do:");
  const button = getByText("Add #4");

  userEvent.type(input, "Learn spanish");
  userEvent.click(button);

  // confirm data
  getByText("Learn spanish");
  getByText("Add #5");
});
*/

test("add items to list", async () => {
  const todoText = "Learn spanish";
  mockCreateItem.mockResolvedValueOnce(todoText);

  // create render of app
  const { getByText, getByLabelText } = render(<App />);

  // enter content, interact with page
  const input = getByLabelText("Add a new To-Do:");
  fireEvent.change(input, { target: { value: "wash car" } });
  fireEvent.click(getByText("Add #4"));

  await waitFor(() => getByText("🔘 wash car"));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(expect.stringContaining("wash car"));
});
