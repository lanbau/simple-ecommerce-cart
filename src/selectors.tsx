// import { useSelector } from 'react-redux'
import { BookInterface } from './interfaces'

interface RootState {
    books: BookInterface[]
}

const getBooks = (state: RootState) => state.books

export { getBooks }