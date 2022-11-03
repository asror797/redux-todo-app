import { useSelector } from "react-redux";
import TodoItem from "./Todo";



const Todos = () => {

   const todos = useSelector((state) => state.todos)
   return(
      <div className="todosWrapper">
         <ul>
         {
            todos.map(e => {
               return(
                  <TodoItem title={e.title}  id={e.id}/>
               )
            })
         }
         </ul>
      </div>
   );
}

export default Todos;