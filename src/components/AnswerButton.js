import React, {Component} from 'react'
import UserGreeting from './UserGreeting'

    class AnswerButton extends Component{

        constructor(){
            super();
            this.handleClick = this.handleClick.bind(this);
            this.state = { correct : "false"};
        }

        handleClick(){
            if(!this.props.answerText.localeCompare(this.props.correctAnswer)){
                this.setState({correct: "true"})
            } else{
                this.setState({correct: "false"})
            }

            if(!this.state.correct.localeCompare("false")){
                //do nothing
            } else if(!this.state.correct.localeCompare("true")){
                alert("True")
                //increment score
                //next question
            }
        }

        

        render(){
            return(
                <div className="answer_button" id="clickedButton" onClick={this.handleClick}>
                    <h4 id="answer_button" >{this.props.answerText}</h4>
                </div>
            )
        }
    }



export default AnswerButton