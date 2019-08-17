import * as actionTypes from "../actionsTypes";
import { Reducer } from "redux";

const initialState = {
    number: 0
}

const reducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: {
            return {
                ...state,
                number: state.number + 1
            }
        }
        default: return state
    }
}

export default reducer;