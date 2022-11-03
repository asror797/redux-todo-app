import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todos";



const NewTodo = () => {

   const dispatch = useDispatch()
   const [title , setTitle ] = useState('')

   const inputHandler = e => {
         return setTitle(e.target.value);
   }

   const SubmitHandler = () => {
      dispatch(addTodo({
         id:new Date().getTime(),
         title:title,
         isDone:false
      }))
   }

   return(
         <div className="wrapperHeader">
            <input 
               className="todoInput"
               placeholder="Title"
               onChange={inputHandler}/>
            <button
               onClick={SubmitHandler}>
               Add
            </button>
         </div>
   );
}

export default NewTodo;