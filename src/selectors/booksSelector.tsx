import { BookInterface } from '../interfaces'

interface RootState {
    books: BookInterface[]
}

export default (state: RootState) => state.books