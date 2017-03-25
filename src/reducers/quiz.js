import { GET_QUIZ } from '../actions';

const initialState = {
    setId: undefined,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUIZ: {
            console.log(action.payload);
            return { ...state }
        }
        default:
            return state;
    }
}