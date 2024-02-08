import { combineReducers } from "redux";
import amountReduer from "./amountReduer";
// import reducer from "./amountReduer";

const reducers= combineReducers({
    amount:amountReduer
})

export default reducers;
