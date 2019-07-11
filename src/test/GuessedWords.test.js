import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr, checkProps} from '../test/testUtils'
import GuessedWords from '../components/GuessedWords'


const defaultProps = {
    guessedWords:[{guessedWord:'agile', letterMatchCount:3}]
}

const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
}


test('does not throw warning with expected props',()=>{
    checkProps(GuessedWords , defaultProps)
})

describe('if there are no words guessed',()=>{
    let wrapper;
    beforeEach(()=>{
        //userinput words
    wrapper = setup({ guessedWords:[] })
    })
test('render without error',()=>{
const component = findByTestAttr(wrapper,'guessed-word-component' )
expect(component.length).toBe(1);
});
test('render instruction to guess a word',()=>{
    const instructions = findByTestAttr(wrapper,'guess-instruction' )
    expect(instructions.text().length).not.toBe(0);
})
})

describe('if there are words guessed',()=>{
  let wrapper;
    let guessedWords =[
        {guessedWord:'train', letterMatchCount:3},
        {guessedWord:'agile', letterMatchCount:1 },
        {guessedWord:'party',letterMatchCount:5}
    ];
    beforeEach(()=>{
        wrapper = setup({ guessedWords })
    })
    test('render without error',()=>{
        const component = findByTestAttr(wrapper,'guessed-word-component' )
        expect(component.length).toBe(1);
    })
    test('renders guesss words section',()=>{
        const guessedWordsNode = findByTestAttr(wrapper,'guessed-words')
        expect(guessedWordsNode.length).toBe(1)
    })
    test('correct number of guessed words ',()=>{
        const guessedWordsNode = findByTestAttr(wrapper,'guess-word')
        expect(guessedWordsNode.length).toBe(guessedWords.length)
    })
})