import searchFormReducer from './search-form-reducer';
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
  search: searchFormReducer
});

const store = createStore(reducers);

export default store;
