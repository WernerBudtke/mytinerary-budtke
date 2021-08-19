import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";

// reducer habilitado a modificar el store
const rootReducer = combineReducers({
   citiesRed : citiesReducer
}) // le paso como parametro un obj que contiene mis reducers.
export default rootReducer