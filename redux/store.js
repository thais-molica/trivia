import {createStore} from 'redux';
import questionReducer from './reducers/questionReducer';

const store = createStore(questionReducer);

export default store;