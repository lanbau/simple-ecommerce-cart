import { SET_CURRENT } from "./actionTypes";

const initialState = {
    currentItem: {}
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT:
            return {
                ...state,
                currentItem: action.payload,
                
            }
        default:
            return state
    }
}
export default reducers