import { runSaga } from 'redux-saga'
import { fetchBooks } from '../store/sagas'
import { setBooks } from '../store/actions'
import { api } from '../services'

test('Saga test', async () => {
    // when an action is dispatched it is added to this array
    const dispatchedActions = []
    
    const mockedBooks = [{}, {}]
    // mocked function, do not test implementation of method
    api.getBooks = jest.fn(() => Promise.resolve(mockedBooks))
    
    const fakeStore = {
        getState: () => ({ }),
        dispatch: action => dispatchedActions.push(action)
    }

    // this simulates fetchBook worker saga when the 'watcher' is called in real scenarios
    await runSaga(fakeStore, fetchBooks).done
    
    // api called once when runSaga is run
    expect(api.getBooks.mock.calls.length).toBe(1)
    
    // redux action fired and check equality
    expect(dispatchedActions).toContainEqual(setBooks(mockedBooks))
})