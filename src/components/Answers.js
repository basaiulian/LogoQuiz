import React, { Component } from 'react'
import AnswerButton from './AnswerButton'
import NextButton from './NextQuestion'

class Answers extends Component{

    constructor(){
        super();
        this.state = { message: "" }
        this.sayHello = this.sayHello.bind(this)
    }
    
    callbackFunction = (childData) => {
      this.setState({message: childData})
    }
    sayHello() {
        this.setState((state, props) => {
            return {message: state.message};
          });
    }

    render(){

    return(
        <div className="answers_big_box">
            <div className="answers_box">
            <AnswerButton parentCallback = {this.callbackFunction} answerText={this.props.answersFromParent[0]} correctAnswer = {this.props.correctFromParent}/> 
            <AnswerButton parentCallback = {this.callbackFunction} answerText={this.props.answersFromParent[1]} correctAnswer = {this.props.correctFromParent}/> 
            <AnswerButton parentCallback = {this.callbackFunction} answerText={this.props.answersFromParent[2]} correctAnswer = {this.props.correctFromParent}/> 
            <AnswerButton parentCallback = {this.callbackFunction} answerText={this.props.answersFromParent[3]} correctAnswer = {this.props.correctFromParent}/>
            <button className="next_button" onClick={this.sayHello}>
                Next
            </button>
            </div>
            <div className="result">
                <h2 id="correct" ><p> {this.state.message} </p></h2> 
            </div>
        </div>
    )
    }
}

/* style={{visibility:"hidden"}} */

export default Answers