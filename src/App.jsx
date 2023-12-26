import { useEffect, useState } from "react";
import ThemeChanger from "./components/ThemeChanger";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useThemeChanger from "./hooks/useThemeChanger";
import axios from "axios";
function App() {
  const { toggleDarkMode } = useThemeChanger();

  const [todoList, setTodoList] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="fixed bottom-6 left-6">
        <ThemeChanger toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="flex w-full justify-center pt-12">
        <div className="wrapper">
          <TodoForm />

          <div className="mt-12">
            {todoList &&
              todoList.map((todo) => {
                return <TodoList key={todo._id} todo={todo} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
