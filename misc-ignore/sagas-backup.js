import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task

 // step 2
export function* incrementAsync({ payload }) {
    console.log('Increment Async ?')
    // wait 1 sec
    yield delay(1000)
    // put is an effect
    // put is like dispatch?
    yield put({ type: 'SET_CURRENT', payload })
  }
  
  // WATCHES THE ABOVE FUNC
  // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    console.log('Watch Increment Async')

    // step 1
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

  // notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
}
  