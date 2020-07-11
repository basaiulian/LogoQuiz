import React, { Component } from 'react'
import Answers from './Answers'
import LogoQuestion from './LogoQuestion'
import myQuestions from "../data/questions.json"
import AnswerButton from './AnswerButton';
const questionsList = myQuestions.questions;

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}
var currentQuestion = questionsList[getRandomInt(questionsList.length)]

class BoxContent extends Component{
    
        state = { data : currentQuestion }

    render(){
        
        return(
            <div className="box_content">
            <LogoQuestion logoFromParent = {this.state.data.logo_src}/>
            <Answers answersFromParent = {this.state.data.answers } correctFromParent = {this.state.data.correct} />
            </div>
        )
    }
}


export default BoxContent