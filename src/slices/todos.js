import { createSlice } from "@reduxjs/toolkit";

const initialState = [ 
   {
      id:1,
      title:'ToDo test',
      isDone:false
   }
]

const TodoSlice = createSlice({
   name:'todos',
   initialState,
   reducers: {
      addTodo(state,action) {
         state.push(action.payload) ;
      },
      deleteTodo(state,action) {
         return state.filter((item) => item.id !== action.payload.id);
      }
   }
})


export const { addTodo , deleteTodo } = TodoSlice.actions
export default TodoSlice.reducer