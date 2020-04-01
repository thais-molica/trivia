import {INCREMENT_TOTAL_ANSWER} from '../actions/questionActions';

const questionReducer = (state = {totalAnswer: 1}, action) => {
    switch (action.type) {
        case INCREMENT_TOTAL_ANSWER:
            return {...state, totalAnswer: state.totalAnswer + 1};
        default:
            return {...state};
    }
};

export default questionReducer;