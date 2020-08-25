import { SET_CURRENT, SET_BOOKS, SET_BOOK, UPDATE_CART, UPDATE_ORDERS, CLEAR_CART } from "./actionTypes";

const initialState = {
    currentItem: {},
    books: [],
    cart: [],
    orders: []
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT:
            return {
                ...state,
                currentItem: action.payload,
                
            }
        case SET_BOOKS:
            return {
                ...state,
                books: action.payload,
                
            }
        case SET_BOOK:
            return {
                ...state,
                book: action.payload,
                
            }
        
        case UPDATE_CART:
            return {
                ...state,
                cart: state.cart.concat(action.payload)
            }

        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }

        case UPDATE_ORDERS:
            return {
                ...state,
                orders: state.orders.concat(action.payload)
            }
        default:
            return state
    }
}
export default reducers