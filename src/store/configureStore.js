import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//importing reducers
import binReducers from '../reducers/binReducers';

export default () => {
    const store = createStore(combineReducers({
        bins : binReducers
    }));

    return store;
}