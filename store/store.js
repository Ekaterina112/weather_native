import weatherReducers from "./reducers/weatherReducers";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    weather: weatherReducers,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
