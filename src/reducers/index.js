import { combineReducers } from "redux";
import todos from '../slices/todos'


const rootReducer = combineReducers({
   todos:todos
})


export default rootReducer;