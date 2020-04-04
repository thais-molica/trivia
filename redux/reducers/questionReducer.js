import { INCREMENT_TOTAL_ANSWER } from "../actions/questionActions";

let initialState = [];

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_TOTAL_ANSWER: {
      const itemIndex = state.findIndex(el => el.id == action.payload.id);
      if (itemIndex >= 0) {
        let item = state[itemIndex];
        if (item.total < 10) {
          if (action.payload.isCorrect) {
            item.totalCorrect += 1;
            item.level[action.payload.difficulty].totalCorrect += 1;
          } else {
            item.totalIncorrect += 1;
            item.level[action.payload.difficulty].totalIncorrect += 1;
          }
          item.prevCorrect = item.isCorrect;
          item.isCorrect = action.payload.isCorrect;
          item.total += 1;
          item.prevDifficulty = item.difficulty;
          item.difficulty = action.payload.difficulty;
          state[itemIndex] = item;
        }
        return [...state];
      } else {
        const item = {
          id: action.payload.id,
          totalCorrect: action.payload.isCorrect ? 1 : 0,
          totalIncorrect: action.payload.isCorrect ? 0 : 1,
          total: 1,
          difficulty: action.payload.difficulty,
          prevDifficulty: null,
          prevCorrect: null,
          isCorrect: action.payload.isCorrect,
          level: [
            {
              type: "easy",
              totalCorrect: 0,
              totalIncorrect: 0
            },
            {
              type: "medium",
              totalCorrect: 0,
              totalIncorrect: 0
            },
            {
              type: "hard",
              totalCorrect: 0,
              totalIncorrect: 0
            }
          ]
        };
        if (action.payload.isCorrect) {
          item.level[action.payload.difficulty].totalCorrect = 1;
        } else {
          item.level[action.payload.difficulty].totalIncorrect = 1;
        }
        return [...state, item];
      }
    }
    default:
      return state;
  }
};

export default questionReducer;
