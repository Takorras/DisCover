import { put, call, select, takeEvery } from 'redux-saga/effects';
import api from '../api';

function* fetchCovers(action) {
  yield put({ type: 'CONTENT_LOADING' });
  const threshold = yield select(state => state.coverReducer.threshold);
  const index = yield select(state => state.coverReducer.index);

  try {
    const books = yield call(api.fetchBooks, action.query, threshold, index);
    yield put({ type: 'BOOKS_FETCH_SUCCEEDED', books: books });
  } catch (e) {
    yield put({ type: 'BOOKS_FETCH_FAILED', message: e.message });
  }
}

function* fetchSearchCovers(action) {
  yield put({ type: 'CONTENT_LOADING' });
  const threshold = yield select(state => state.coverReducer.threshold);
  const index = yield select(state => state.coverReducer.index);

  try {
    const books = yield call(api.fetchBooks, action.query, threshold, index);
    yield put({ type: 'BOOKS_FETCH_SEARCH_SUCCEEDED', books: books });
  } catch (e) {
    yield put({ type: 'BOOKS_FETCH_SEARCH_FAILED', message: e.message });
  }
}

function* sagas() {
  yield takeEvery('FETCH_COVER_REQUESTED', fetchCovers);
  yield takeEvery('FETCH_SEARCH_COVER_REQUESTED', fetchSearchCovers)
}

export default sagas;
