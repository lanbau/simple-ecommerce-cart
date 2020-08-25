import { put, takeEvery, all, call } from 'redux-saga/effects'
import { api } from '../services'
import * as actions from './actions'

export function* fetchBooks() {
    try {
      const payload = yield call(api.getBooks);
      yield put(actions.setBooks(payload))
    } catch (err) {
      console.log(err)
    }
}
export function* watchIncrementAsync() {
    yield takeEvery('FETCH_BOOKS', fetchBooks)
}

export default function* rootSaga() {
    yield all([
      watchIncrementAsync()
    ])
}
  