import { put, takeEvery } from 'redux-saga/effects';

function* fetchCovers(action) {
  yield put({ type: 'CONTENT_LOADING' });
}

function* sagas() {
  yield takeEvery('FETCH_COVER_REQUESTED', fetchCovers);
}

export default sagas;
