import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr , storeFactory} from '../test/testUtils'
import UserInput from '../components/UserInput'



const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<UserInput store={store} />).dive();
    //console.log(wrapper.debug())
    return wrapper;
  }
// setup();

describe('renders',()=>{
    describe('word has not been guessed',()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState = {success:false};
            wrapper = setup(initialState)
        })
        test('renders component without error',()=>{
            const component = findByTestAttr(wrapper,'user-input-component')
            expect(component.length).toBe(1)
       })
        test('renders input box',()=>{
            const userInput = findByTestAttr(wrapper,'user-input')
            expect(userInput.length).toBe(1)
        })
        test('renders submit button',()=>{
            const submitButton = findByTestAttr(wrapper, 'submit-button')
            expect(submitButton.length).toBe(1)
        })
    })
})

describe('word has been guessed',()=>{
  let wrapper;
  beforeEach(()=>{
      const initialState = {success:true};
      wrapper = setup(initialState)
  })
    test('renders component without error',()=>{
      const component = findByTestAttr(wrapper,'user-input-component')
      expect(component.length).toBe(1)
    })
    test('does not render input box',()=>{
      const userInput = findByTestAttr(wrapper,'user-input')
      expect(userInput.length).toBe(0)
    })
    test('does not render submit button',()=>{
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
})

describe('redux props',()=>{
  test('has success piece of state as props',()=>{
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success)
  })
  test('`guessWord` action creator is a function prop',()=>{
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  })
})