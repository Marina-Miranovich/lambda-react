import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../apis';

function* search(action) {
  try {
    const results = yield call(Api.search, action.payload.q);
    yield put({type: 'SEARCH_SUCCEEDED', results: results.items});
  } catch (e) {
    yield put({type: 'SERCH_FAILED', message: e.message});
  }
}

function* searchSaga() {
  yield takeLatest('SEARCH_REQUESTED', search);
}

export default searchSaga;