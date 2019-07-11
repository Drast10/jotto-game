import React from 'react'
import PropTypes from 'prop-types'

function GuessedWords(props){
    let contents;
    let userGuessWord = props.guessedWords
    if(userGuessWord.length === 0){
        contents = (
            <h3 data-test='guess-instruction'>
                Try to Guess the secret word!
            </h3>
        )
    }
    else{
        const guessWordsRows = props.guessedWords.map((word,index) =>{
         return <tr key={index} data-test='guess-word'>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        });
        contents=(
            <div data-test='guessed-words'>
                <h3 className='text-lg-center'>Gussed Words</h3>
                <table className='table table-md table-dark '>
                    <thead className='thead thead-light'>
                    <tr className='text-lg'><th>Guess</th>
                        <th>Matching Letter</th>
                    </tr>
                    </thead>
                    <tbody className='table-striped'>
                        {guessWordsRows}
                    </tbody>
                </table>
            </div>
        )  
    }
 return(<div data-test='guessed-word-component'>

     {contents}
 </div>)
}

GuessedWords.propTypes = {
    guessedWords:PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords;