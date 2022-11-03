import { useState } from "react";
import { useDispatch , useSelector }from "react-redux"
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { addTodo } from './slices/todos'


function App() {

  const dispatch = useDispatch()

  const todos = useSelector((state) => state.todos)

  const [title , setTitle ] = useState('')

  return (
    <div className="container">
      <header>
          <NewTodo/>
      </header>
      <Todos/>
    </div>
  );
}

export default App;
