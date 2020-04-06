import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import questionReducer from "./reducers/questionReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(questionReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
