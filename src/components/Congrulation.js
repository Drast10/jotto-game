import React from 'react'
import PropTypes from 'prop-types'

function Congrulation(props){
    const success = props.success;
    if(success){
        return(
            <div data-test='congrats-component' className='alert alert-success'>
                <span data-test='success-message' >
                Congrats! You guessed the right word...!
                </span>
            </div>
        )}
        else{
            return(
                <div data-test='congrats-component'></div>
            )
    }

}

Congrulation.propTypes={
    success:PropTypes.bool.isRequired,
}

export default Congrulation