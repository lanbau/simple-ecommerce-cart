import { OrderInterface } from '../interfaces'

interface RootState {
    orders: OrderInterface[]
}

export default (state: RootState) => state.orders