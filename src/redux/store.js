import searchReducer from './search-reducer';
import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
  search: searchReducer
});

const store = createStore(reducers);

export default store;


window.store = store; // TODO delete this
