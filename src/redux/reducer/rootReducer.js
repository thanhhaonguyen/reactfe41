import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import cartReducer from "./cartReducer";
import sinhVienReducer from "./sinhVienReducer";

// collect all reducer
export default combineReducers({
    todosReducer,
    cartReducer,
    sinhVienReducer,
});