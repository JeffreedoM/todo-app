import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function TodoList({ todo }) {
  const [check, setCheck] = useState(false);

  return (
    <div
      className={`mb-5 flex w-full items-center border-b border-b-primary p-4 dark:border-dark-accent ${
        check && "opacity-30"
      } `}
    >
      {/* checkbox */}
      <div className="mr-8 h-6 w-6 rounded-sm border border-primary/[0.3] bg-secondary dark:bg-dark-500">
        <input
          onChange={(e) => setCheck(!check)}
          checked={check}
          type="checkbox"
          className="checkbox h-6 w-6 rounded-sm border-none border-blue-500 dark:[--chkbg:theme(colors.dark.accent)] dark:[--chkfg:theme(colors.primary)]"
        />
      </div>
      {/* text */}
      <h1
        className={`w-full pr-3 font-semibold text-primary dark:text-dark-primary ${
          check && "line-through"
        }`}
      >
        {todo.todo}
      </h1>
      {/* delete icon */}
      <button className="text-lg text-primary dark:text-dark-accent">
        <ImCross />
      </button>
    </div>
  );
}
