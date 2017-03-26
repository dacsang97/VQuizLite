import { GET_QUIZ } from '../actions';
import _ from 'lodash';

const initialState = {
    title: "",
    created_date: 0,
    modified_date: 0,
    creator: {},
    list: [],
    trueAns: [],
    userAns: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_QUIZ: {
            let { data } = action.payload.loadedQuiz;
            let trueAns = [];
            data.list = data.list.map((item) => {
                trueAns.push(item.trueAns);
                return _.omit(item, ['trueAns'])
            });
            let userAns = _.fill(Array(data.list.length), -1);
            return {
                ...state,
                trueAns,
                ...data,
                userAns,
            }
        }
        default:
            return state;
    }
}