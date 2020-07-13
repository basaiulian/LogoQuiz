import React, { Component } from 'react'
import AnswerButton from './AnswerButton'
import LogoQuestion from './LogoQuestion'
import myQuestions from "../data/questions.json"

//whole questionList
const questionList = myQuestions.questions;
//current questionList
var currentQuestionList = questionList;

//random item
function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}
var currentQuestion = currentQuestionList[getRandomInt(questionList.length)]

//delete item
function deleteItem(correctAnswer){
    var index = currentQuestionList.indexOf(currentQuestion.correct);
    delete currentQuestionList[index];
    return currentQuestionList
}

currentQuestionList = deleteItem(currentQuestion.correct);

class BoxContent extends Component{
    constructor(){
        super()
        const questionList = myQuestions.questions;
        var currentQuestion = questionList[getRandomInt(questionList.length)]
        
        this.updateScore = this.updateScore.bind(this);
        this.updateResult = this.updateResult.bind(this);
        this.newQuestion = this.newQuestion.bind(this);

        this.state = { data : currentQuestion, score : 0, message : "", reload: false}
        }
    
      

        updateResult(myResult){
            this.setState({
                result : myResult
            });
        }

        updateScore(){
            this.setState({
                score : this.state.score+1
            });
        }

        newQuestion(question){
            this.setState({
                data : question
            });
        }

    render(){
        currentQuestion = questionList[getRandomInt(questionList.length)]
        return(
            <div className="box_content">
            <h2 id="score" >Score: {this.state.score}</h2>
            <LogoQuestion logoFromParent = {currentQuestion.logo_src}/>
            <div className="answers_box">
                <AnswerButton  sendResult = {this.updateResult} updateScore={this.updateScore} action={this.newQuestion} answerText={currentQuestion.answers[0]} correctFromParent = {currentQuestion.correct}/> 
                <AnswerButton  sendResult = {this.updateResult} updateScore={this.updateScore} action={this.newQuestion} answerText={currentQuestion.answers[1]} correctFromParent = {currentQuestion.correct}/> 
                <AnswerButton  sendResult = {this.updateResult} updateScore={this.updateScore} action={this.newQuestion} answerText={currentQuestion.answers[2]} correctFromParent = {currentQuestion.correct}/> 
                <AnswerButton  sendResult = {this.updateResult} updateScore={this.updateScore} action={this.newQuestion} answerText={currentQuestion.answers[3]} correctFromParent = {currentQuestion.correct}/>
            </div>
            <div className="result">
                <h2 id="correct" ><p> {this.state.result} </p></h2> 
            </div>
            </div>
        )
        
    }
}


export default BoxContent