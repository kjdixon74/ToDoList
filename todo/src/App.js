import React from "react";
import Todo from "./Components/todo";
import "./App.css";
import { api } from "./api";

function App() {
  // set initial state
  const [todos, setTodos] = React.useState([
    {
      text: "Do laundry",
      isCompleted: false,
    },
    {
      text: "Exercise",
      isCompleted: false,
    },
    {
      text: "Call mom",
      isCompleted: false,
    },
  ]);
  const [userInput, setUserInput] = React.useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    // get current todos
    let temp = [...todos];

    // remove clicked todo based on index
    temp.splice(index, 1);

    // update todo list
    setTodos(temp);
  };

  // user input - includes validation
  const handleSubmit = (e) => {
    // prevent page from reloading
    e.preventDefault();

    // check for submissions with no todo entered
    if (!userInput) return;

    // Mock a fulfilled promise
    api.createItem(userInput).then((persistedItem) => {
      // add userInput to todo list
      addTodo(userInput);

      // clear form by resetting userInput to empty
      setUserInput("");
    });
  };

  return (
    <div className="app">
      <h1>To-Do's</h1>
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="new-todo">Add a new To-Do:</label>
        <input
          type="text"
          className="input"
          id="new-todo"
          value={userInput}
          placeholder="Add To-Do..."
          onChange={(e) => setUserInput(e.target.value)}
        />

        <button>Add #{todos.length + 1}</button>
      </form>
    </div>
  );
}

export default App;
