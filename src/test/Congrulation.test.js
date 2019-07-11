import React from 'react'
import Enzyme, {shallow} from 'enzyme'
// import EnzymeAdapter from 'enzyme-adapter-react-16'
import Congrulation from '../components/Congrulation'
import checkPropTypes from 'check-prop-types'
import {findByTestAttr, checkProps} from './testUtils'
// Enzyme.configure({adapter:new EnzymeAdapter()})

const setup = (props={})=>{
    return shallow(<Congrulation {...props}/>)
}
test('renders without error',()=>{
const wrapper = setup({success:false});
const congratsComponent = findByTestAttr(wrapper, 'congrats-component');
expect(congratsComponent.length).toBe(1);
})
test(' renders no text when `success` prop is false',()=>{
const wrapper = setup({success:false});
const congratsComponent = findByTestAttr(wrapper, 'congrats-component');
expect(congratsComponent.text()).toBe('')
})
test('renders non-empty congrats message when `success` prop is true',()=>{
const wrapper= setup({success:true})
const messageSuccess = findByTestAttr(wrapper, 'success-message');
expect(messageSuccess.text().length).not.toBe(0);
})
// test('doesnot throw wraning with expected props',()=>{
//     const expectedProps = {success:false};
//     const propError = checkPropTypes(Congrulation.propTypes, expectedProps,'prop',Congrulation.name);
//     expect(propError).toBeUndefined();
// })

// console.error node_modules/prop-types/checkPropTypes.js:20
// Warning: Failed prop type: The prop `success` is marked as required in `Congrulation`, but its value is `undefined`.
// in Congrulation (at Congrulation.test.js:10)
//solve: here is required so pass props in main component here 1 case
test('doesnot throw wraning with expected props',()=>{
    const expectedProps = {success:false};
    checkProps(Congrulation , expectedProps)
})