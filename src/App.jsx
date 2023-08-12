import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  return (
    <div className="parent">
      {todos.map(todo => {
        return (
          <div className="todo" key={todo.id}>
            <p>{JSON.stringify(todo)}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
