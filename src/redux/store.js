import searchReducer from './search-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  search: searchReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;


window.store = store; // TODO delete this
