import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from './itinerariesReducer'

// reducer habilitado a modificar el store
const rootReducer = combineReducers({
   citiesRed : citiesReducer,
   itinerariesRed : itinerariesReducer
}) // le paso como parametro un obj que contiene mis reducers.
export default rootReducer