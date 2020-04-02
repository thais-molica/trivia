import { createStore } from "redux";
import questionReducer from "./reducers/questionReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(questionReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
