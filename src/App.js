import { Provider } from "react-redux";
import store from "./store";
import { TodoListStore } from "./components/todoList";
import { TodoFilterStore } from "./components/todoFilter";
import { AddTodoForm } from "./components/addTodoForm";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Learn Redux</h1>
        <TodoFilterStore />
        <TodoListStore />
        <AddTodoForm />
      </div>
    </Provider>
  );
}

export default App;
