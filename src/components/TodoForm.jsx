import { useState } from "react";
import axios from "axios";
export default function TodoForm() {
  const [todo, setTodo] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/", { todo })
      .then((response) => {
        console.log(response);
        setTodo("");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-x-2 gap-y-3">
      <div className="grow">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Create a new todo..."
          className="shadow-9 w-full rounded bg-secondary p-3.5 pr-5 outline-none placeholder:font-semibold placeholder:text-primary dark:bg-dark-secondary dark:text-dark-accent placeholder:dark:text-dark-500"
        />
      </div>
      <button
        type="submit"
        className="shadow-9 w-full rounded bg-accent2 p-3 px-4 font-semibold text-white md:w-auto dark:bg-dark-accent dark:text-black dark:shadow-none"
      >
        Add Todo
      </button>
    </form>
  );
}
