import {storeFactory} from '../test/testUtils'
import {guessWord} from '../action'

describe('guessWord action dispatcher',()=>{
    const secretWord = 'party';
    const unsuccessfulGuess = 'great'; 
    describe('no guessed words',()=>{
        let store;
        const initialState = {secretWord};
        beforeEach(()=>{
            store = storeFactory(initialState);
        })
        test('update state correctly for unucessful guess',()=>{
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords:[{
                    guessWord:unsuccessfulGuess,
                    letterMatchCount:3,
                }]
            };
            expect(newState).toEqual(expectedState)
        })
        test('update state correctly for successful guess',()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords:[{
                    guessWord:secretWord,
                    letterMatchCount:5,
                }]
            };
            expect(newState).toEqual(expectedState)
        })
    })

    describe('some guessed words',()=>{
        const guessedWords = [{guessedWord:'agile', letterMatchCount:1}]
        const initialState = {guessedWords, secretWord}
        let store;
        beforeEach(()=>{
            store=storeFactory(initialState)
        })
        test('update state correctly for unucessful guess',()=>{
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState={
                secretWord,
                success:false,
                guessedWords:[...guessedWords,{guessedWord:unsuccessfulGuess, letterMatchCount:3}]
            }
            expect(newState).toEqual(expectedState);
        })
        test('update state correctly for successful guess',()=>{
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState={
                secretWord,
                success:true,
                guessedWords:[...guessedWords,{guessWord:secretWord , letterMatchCount:5}]
            }
            expect(newState).toEqual(expectedState)
        })
    })
})