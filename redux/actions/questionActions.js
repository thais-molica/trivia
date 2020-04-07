import axios from 'axios';
import api from '../../utils/api';
import difficultyDic from '../../utils/difficulty';
//Action Types
export const INCREMENT_TOTAL_ANSWER = "INCREMENT_TOTAL_ANSWER";
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";


//Action Creator
export const incrementTotalAwswer = (id, isCorrect, difficulty, question) => ({
   type: INCREMENT_TOTAL_ANSWER,
   payload: { id: id, isCorrect: isCorrect, difficulty, question }
});


export const getData = (category, difficulty) => {
   return (dispatch) => {
      dispatch({ type: 'GET_DATA_REQUEST' });
      return axios.get(`${api}?amount=1&type=multiple&category=${category}&difficulty=${difficultyDic[difficulty]}`)
        .then((resp) => {if(resp.data.results[0]) {
         dispatch({ type: 'GET_DATA_SUCCESS', payload: resp.data.results[0]})
        } else {dispatch({ type: 'GET_DATA_FAILURE', error: true })}}
        )
        .catch((error) => dispatch({ type: 'GET_DATA_FAILURE', payload: error, error: true }));
   }
 };