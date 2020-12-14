import { Provider } from "react-redux";
import store from "./store";
import { TodoList } from "./components/todoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Learn Redux</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
