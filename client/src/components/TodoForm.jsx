export default function TodoForm() {
  return (
    <div className="flex gap-x-2">
      <div className="grow">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="shadow-9 w-full rounded bg-secondary p-3.5 pr-5 outline-none placeholder:font-semibold placeholder:text-primary dark:bg-dark-secondary dark:text-dark-accent placeholder:dark:text-dark-500"
        />
      </div>
      <button className="shadow-9 bg-accent2 rounded p-3 px-4 font-semibold text-white dark:bg-dark-accent dark:text-black dark:shadow-none">
        Add Todo
      </button>
    </div>
  );
}
