import React, {Component} from 'react'

    class AnswerButton extends Component{

        constructor(){
            super();
            this.isCorrect = this.isCorrect.bind(this);
            this.clickHandler = this.clickHandler.bind(this);
            this.state = { answer : ""};
        }

        clickHandler(){
            this.isCorrect()
            this.props.action()
        }

        isCorrect(){

            
            if(!this.props.answerText.localeCompare(this.props.correctFromParent)){//true->Correct
                  this.props.updateScore()
                  this.props.sendResult("Correct")
            } else if(this.props.answerText.localeCompare(this.props.correctFromParent)){ //false->Incorrect
                  this.props.sendResult("Incorrect")
            }



        }


        render(){
            return(
                <div className="answer_button" id="clickedButton" onClick={this.clickHandler}>
                    <h4 id="answer_button">{this.props.answerText}</h4>
                </div>
            )
        }
        
    
    }



export default AnswerButton