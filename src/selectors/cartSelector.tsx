import { BookInterface } from '../interfaces'

interface RootState {
    cart: BookInterface[]
}

export default (state: RootState) => state.cart