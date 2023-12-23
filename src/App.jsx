import ThemeChanger from "./components/ThemeChanger";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useThemeChanger from "./hooks/useThemeChanger";
function App() {
  const { toggleDarkMode } = useThemeChanger();
  return (
    <>
      <div className="fixed bottom-6 left-6">
        <ThemeChanger toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="flex w-full justify-center pt-12">
        <div className="wrapper">
          <TodoForm />

          <div className="mt-12">
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
