import { combineReducers } from 'redux';
import coverReducer from './coverReducer';
import modalReducer from './modalReducer';
import searchReducer from './searchReducer';
import favoriteReducer from './favoriteReducer';

const discoverReducers = combineReducers({
  coverReducer,
  modalReducer,
  searchReducer,
  favoriteReducer
});

export default discoverReducers;
