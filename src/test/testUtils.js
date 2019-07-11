import checkPropsTypes from 'check-prop-types'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import {middlewares} from '../store'



/**
 * create a testing store with imported reducers, middleware and initialstate.
 * globals: rootReducer, middleware
 * @param {object} initialState - Initial State for store.
 * @function - storeFactory
 * @return {store} - Redux Store
 */

export const storeFactory = (initialState)=>{
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

    return createStoreWithMiddleware(rootReducer , initialState)
}

  


/***To find and match data-test value in Component here counter
 * return shallow wrapper containning node(s) with the given data-test value
 * @param {shallowWrapper} wrapper - enzyame shallow wrapper to search within
 * @param {string} val- value of data test attribute search
 * @return {shallowWrapper}
 */
export const findByTestAttr = (wrapper,val)=>{
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component , conformingProps)=>{
    const propError = checkPropsTypes(component.propTypes,
        conformingProps , 'prop', component.name)
        expect(propError).toBeUndefined()
}