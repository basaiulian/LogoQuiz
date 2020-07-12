import React, {Component} from 'react'

    class AnswerButton extends Component{

        constructor(){
            super();
            this.isCorrect = this.isCorrect.bind(this);
            this.clickHandler = this.clickHandler.bind(this);
            // this.state = { correct : ""};
        }

        clickHandler(){
            this.isCorrect()
        }

        isCorrect(){

            //true->Correct
            if(!this.props.answerText.localeCompare(this.props.correctFromParent)){

                this.setState((state, props) => {
                    return {answer: "Correct"};
                  });
            //false->Incorrect
            } else if(this.props.answerText.localeCompare(this.props.correctFromParent)){

                this.setState((state, props) => {
                    return {answer: "Incorrect"};
                  });

            }



        }


        render(){
            return(
                <div className="answer_button" id="clickedButton" onClick={this.clickHandler}>
                    <h4 id="answer_button" >{this.props.answerText}</h4>
                </div>
            )
        }
        
    
    }



export default AnswerButton