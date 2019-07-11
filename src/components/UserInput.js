import React from 'react'
import {connect} from 'react-redux'
import {guessWord} from '../action/index'
class UserInput extends React.Component{
     
    render(){
       const contents = this.props.success
      ? null
      :(
         <form className='form-inline'>
             <input data-test='user-input'
             className='mb-2 mx-sm-3'
             id='word-guess'
             type='text'
             placeholder='enter guess'/>
             <button data-test='submit-button'
                type='submit'
                className='btn btn-primary mb-2'>
                Submit
             </button>
         </form>  
      )
        return(
            <div data-test='user-input-component'>
             {contents}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{success:state.success}
}

export default connect(mapStateToProps,{guessWord})(UserInput)