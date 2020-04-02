import { INCREMENT_TOTAL_ANSWER } from "../actions/questionActions";

let initialState = [];

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TOTAL_ANSWER: {
      const itemIndex = state.findIndex(el => el.id == action.payload.id);
      if (itemIndex >= 0) {
        let item = state[itemIndex];
        if (action.payload.isCorrect) {
          item.totalCorrect += 1;
        } else {
          item.totalIncorrect += 1;
        }
        item.total += 1;
        state[itemIndex] = item;
        return [...state];
      } else {
        const item = {
          id: action.payload.id,
          totalCorrect: action.payload.isCorrect ? 1 : 0,
          totalIncorrect: action.payload.isCorrect ? 0 : 1,
          total: 1
        };
        return [...state, item];
      }
    }
    default:
      return state;
  }
};

export default questionReducer;
