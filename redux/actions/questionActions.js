//Action Types
export const INCREMENT_TOTAL_ANSWER = "INCREMENT_TOTAL_ANSWER";


//Action Creator
export const incrementTotalAwswer = (id, isCorrect, difficulty, question) => ({
   type: INCREMENT_TOTAL_ANSWER,
   payload: { id: id, isCorrect: isCorrect, difficulty, question }
});
