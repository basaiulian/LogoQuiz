import React, { Component } from 'react'
import { render } from '@testing-library/react'

class NextButton extends Component{
    render(){
    return(
        <div className="next_button" id="clickedButton">
            <h4 id="next_button" >{this.props.answerText}</h4>
        </div>
    )
    }
}


export default NextButton