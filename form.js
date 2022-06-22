// user input - includes validation
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    // prevent page from reloading
    e.preventDefault();

    // check for submissions with no todo entered
    if (!value) return;

    // add value to todo list
    addTodo(value);

    // clear form by resetting value to empty
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
