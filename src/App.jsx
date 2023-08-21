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
    <div className="container">
    <h1>Todos Table</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? '✓' : '✗'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
