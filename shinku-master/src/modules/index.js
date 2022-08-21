import { combineReducers } from "redux";
import userReducer from "./UserModule";
import formReducer from "./FormModules";

const rootReducer = combineReducers({
    userReducer,
    formReducer

});

export default rootReducer;
