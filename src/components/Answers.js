import React, { Component } from 'react'
import AnswerButton from './AnswerButton'

class Answers extends Component{

    render(){
    return(
        <div className="answers_box">
            {/* <AnswerButton answerText={this.props.answersFromParent[0]}/>*/}
            <AnswerButton answerText={this.props.answersFromParent[0]} correctAnswer = {this.props.correctFromParent}/> 
            <AnswerButton answerText={this.props.answersFromParent[1]} correctAnswer = {this.props.correctFromParent}/> 
            <AnswerButton answerText={this.props.answersFromParent[2]} correctAnswer = {this.props.correctFromParent}/> 
            <AnswerButton answerText={this.props.answersFromParent[3]} correctAnswer = {this.props.correctFromParent}/> 
        </div>
    )
    }
}



export default Answers