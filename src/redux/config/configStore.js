import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
//새로운 카운터로 변경

const rootReducer = combineReducers({
  todos, //새로운 카운터로 변경
});
const store = createStore(rootReducer);

export default store;
