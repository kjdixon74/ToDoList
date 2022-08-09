import React from "react";
import Todo from "./Components/todo";
import Form from "./Components/form";
import "./App.css";

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

  return (
    <div className="app">
      <h1>To-Do's</h1>
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo} />
        ))}
        <br />
        <div>Add a new To-Do:</div>
        <br />
        <Form addTodo={addTodo} />
        <button>Add #{todos.length + 1}</button>
      </div>
    </div>
  );
}

export default App;
