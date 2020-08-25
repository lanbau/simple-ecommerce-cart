import { put, takeEvery, all, call } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
}

 // step 2
export function* fetchBooks() {
    console.log('Increment Async ?')
    // wait 1 sec
    // put is an effect
    // put is like dispatch?
    try {
      const payload = yield call(getData);
      console.log('hi')
      console.log(payload)
      yield put({ type: "SET_BOOKS", payload });
    } catch (err) {
      console.log(err)
    }
  }
  
  // WATCHES THE ABOVE FUNC
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    console.log('Watch Increment Async')

    // step 1
    yield takeEvery('FETCH_BOOKS', fetchBooks)
}



  // notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
      // helloSaga(),
      watchIncrementAsync()
    ])
}
  