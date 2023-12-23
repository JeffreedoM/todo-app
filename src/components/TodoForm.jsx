export default function TodoForm() {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="shadow-9 bg-secondary placeholder:text-primary w-full rounded p-3.5 pr-5 outline-none placeholder:font-semibold"
        />
      </div>
    </div>
  );
}
