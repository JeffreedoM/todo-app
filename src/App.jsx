import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex w-full justify-center pt-16 ">
      <div className="wrapper">
        <TodoForm />

        <div className="mt-12">
          <TodoList />
          <TodoList />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
