import { useState } from "react";
import { ImCross } from "react-icons/im";

export default function TodoList() {
  const [check, setCheck] = useState(false);

  return (
    <div
      className={`border-b-primary dark:border-dark-accent mb-5 flex w-full items-center border-b p-4 ${
        check && "opacity-30"
      } `}
    >
      {/* checkbox */}
      <div className="bg-secondary dark:bg-dark-500 border-primary/[0.3] mr-8 h-6 w-6 rounded-sm border">
        <input
          onChange={(e) => setCheck(!check)}
          checked={check}
          type="checkbox"
          className="checkbox h-6 w-6 rounded-sm border-none border-blue-500 dark:[--chkbg:theme(colors.dark.accent)] dark:[--chkfg:theme(colors.primary)]"
        />
      </div>
      {/* text */}
      <h1
        className={`text-primary dark:text-dark-primary w-full pr-3 font-semibold ${
          check && "line-through"
        }`}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        sed.
      </h1>
      {/* delete icon */}
      <button className="text-primary dark:text-dark-accent text-lg">
        <ImCross />
      </button>
    </div>
  );
}
