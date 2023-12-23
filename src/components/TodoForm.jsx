export default function TodoForm() {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="shadow-9 bg-secondary dark:text-dark-accent dark:bg-dark-secondary placeholder:text-primary placeholder:dark:text-dark-500 w-full rounded p-3.5 pr-5 outline-none placeholder:font-semibold"
        />
      </div>
    </div>
  );
}
