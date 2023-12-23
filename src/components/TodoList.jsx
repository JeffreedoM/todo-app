import { ImCross } from "react-icons/im";

export default function TodoList() {
  return (
    <div className="border-b-primary mb-5 flex w-full items-center border-b p-4">
      {/* checkbox */}
      <div className="bg-secondary border-primary/[0.3] border mr-8 h-6 w-6 rounded-sm">
        <input
          type="checkbox"
          className="checkbox h-6 w-6 rounded-sm border-none border-blue-500 [--chkbg:theme(colors.primary)]"
        />
      </div>
      {/* text */}
      <h1 className="w-full pr-3 font-semibold text-sky-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
        sed.
      </h1>
      {/* delete icon */}
      <button className="text-primary text-lg">
        <ImCross />
      </button>
    </div>
  );
}
