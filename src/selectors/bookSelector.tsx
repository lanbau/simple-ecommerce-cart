import { BookInterface } from '../interfaces'

interface RootState {
    book: BookInterface
}

export default (state: RootState) => state.book