import { combineReducers } from 'redux';
import coverReducer from './coverReducer';
import modalReducer from './modalReducer';

const discoverReducers = combineReducers({
  coverReducer,
  modalReducer
});

export default discoverReducers;
