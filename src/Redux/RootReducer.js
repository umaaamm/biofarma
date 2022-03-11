import { combineReducers } from "redux";
import LoginReducer from './Reducer/LoginReducer';

const rootReducer = () => 
    combineReducers({
        Login: LoginReducer,
    });

export default rootReducer;