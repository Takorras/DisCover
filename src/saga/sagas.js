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
  yield put({ type: 'CONTENT_SEARCH_LOADING' });
  const threshold = yield select(state => state.searchReducer.threshold);
  const index = yield select(state => state.searchReducer.index);

  try {
    const books = yield call(api.fetchBooks, action.query, threshold, index);
    yield put({ type: 'BOOKS_FETCH_SEARCH_SUCCEEDED', books: books });
  } catch (e) {
    yield put({ type: 'BOOKS_FETCH_SEARCH_FAILED', message: e.message });
  }
}

function* addFavorite(action) {
  let favorites = yield select(state => state.favoriteReducer.books);
  if (favorites && favorites.includes(action.book)) return;
  if (!favorites) favorites = [];
  try {
    favorites = favorites.concat(action.book);
    yield call(api.setDB, 'favorites', favorites);
    yield put({ type: 'ADD_FAVORITE_SUCCEEDED', books: favorites });
  } catch (e) {
    yield put({ type: 'DB_FETCH_FAILED', message: e.message });
  }
}

function* fetchFavorite(action) {
  try {
    const favorites = yield call(api.fetchDB, 'favorites');
    yield put({ type: 'FAVORITES_FETCH_SUCCEEDED', books: favorites });
  } catch (e) {
    yield put({ type: 'DB_FETCH_FAILED', message: e.message });
  }
}

function* saveImage(action) {
  try {
    yield call(api.downloadFile, action.url);
  } catch (e) {
    yield put({ type: 'DB_FETCH_FAILED', message: e.message });
  }
}

function* sagas() {
  yield takeEvery('FETCH_COVER_REQUESTED', fetchCovers);
  yield takeEvery('FETCH_SEARCH_COVER_REQUESTED', fetchSearchCovers);
  yield takeEvery('ADD_FAVORITE', addFavorite);
  yield takeEvery('FETCH_FAVORITE', fetchFavorite);
  yield takeEvery('SAVE_IMAGE', saveImage);
}

export default sagas;
