import {actionTypes} from './types'
import {getLetterMatchCount} from '../helper'
import axios from 'axios'
/**
 * Returns Redux thunk function that dispatch GUESS_WORD
 *  action and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - user Guessed Word
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = (guessedWord) =>{
    return function(dispatch , getState){
        const secertWord = getState().secertWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secertWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload:{guessedWord , letterMatchCount}
        });

        if(guessedWord === secertWord){
            dispatch({type:actionTypes.CORRECT_GUESS})
        }
    }
}

export const getSecertWord = ()=>{
    return(dispatch)=>{
       return axios.get('http://localhost:3000')
       .then(response=>{
           dispatch({
               type:actionTypes.SET_SECRET_WORD ,
               payload:response.data
           })
       })
    }
}
