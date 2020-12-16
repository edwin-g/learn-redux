import { Provider } from "react-redux";
import store from "./store";
import { TodoListStore } from "./components/todoList";
import { TodoFilterStore } from "./components/todoFilter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Learn Redux</h1>
        <TodoListStore />
        <TodoFilterStore />
      </div>
    </Provider>
  );
}

export default App;
