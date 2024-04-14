import { ACTION } from "../actions/types";

const initialState = {
    actionData: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION:
            return {
                ...state,
                actionData: action.payload
            }
        default:
            return state;
    }
}