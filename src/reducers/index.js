import { combineReducers } from 'redux';
import coverReducer from './coverReducer';
import modalReducer from './modalReducer';
import searchReducer from './searchReducer';

const discoverReducers = combineReducers({
  coverReducer,
  modalReducer,
  searchReducer
});

export default discoverReducers;
