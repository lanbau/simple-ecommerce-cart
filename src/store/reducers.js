import { SET_CURRENT, SET_BOOKS } from "./actionTypes";

const initialState = {
    currentItem: {},
    books: []
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
        default:
            return state
    }
}
export default reducers