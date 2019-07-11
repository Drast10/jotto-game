import React from 'react';
import App from '../components/App';
import {shallow} from 'enzyme'
import {findByTestAttr, storeFactory} from './testUtils'

const setup = (state={})=>{
  const store=storeFactory(state)
  const wrappeer = shallow(<App store={store}/>).dive();
  return wrappeer;
}

describe('redux properties',()=>{
  test('has access to success state',()=>{
    const success = true;
    const wrapper = setup({success})
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  })
  test('has access to secretWord state',()=>{
    const secretWord = 'party';
    const wrapper = setup({secretWord});
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  })
  test('has access to gussedWords state',()=>{
    const gussedWords = [{gussedWord:'train', letterMatchCount:3}]
    const wrapper = setup({gussedWords})
    const gussedWordsProp = wrapper.instance().props.gussedWords;
    expect(gussedWordsProp).toEqual(gussedWords)
  })
})



