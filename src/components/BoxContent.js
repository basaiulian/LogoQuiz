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
        this.handler = this.handler.bind(this);
        this.state = { data : currentQuestion, score : 0, message : "", reload: false}

        // Bind the this context to the handler function
        
        
        }
    
        // This method will be sent to the child component
        handler() {
            this.setState({
                score: this.state.score+1,
                message: "Correct",
                reload: true
            });
        
            
        }

    render(){
        currentQuestion = currentQuestionList[getRandomInt(questionList.length)]
        return(
            <div className="box_content">
            <h2>Score: {this.state.score}</h2>
            <LogoQuestion logoFromParent = {this.state.data.logo_src}/>
            {/* <Answers answersFromParent = {this.state.data.answers } correctFromParent = {this.state.data.correct} /> */}
            {/* parentCallback = {this.callbackFunction} answerText={this.props.answersFromParent[0]} correctAnswer = {this.props.correctFromParent} */}
            <div className="answers_box">
            <AnswerButton  action={this.handler} answerText={this.state.data.answers[0]} correctFromParent = {this.state.data.correct}/> 
            <AnswerButton  action={this.handler} answerText={this.state.data.answers[1]} correctFromParent = {this.state.data.correct}/> 
            <AnswerButton  action={this.handler} answerText={this.state.data.answers[2]} correctFromParent = {this.state.data.correct}/> 
            <AnswerButton  action={this.handler} answerText={this.state.data.answers[3]} correctFromParent = {this.state.data.correct}/>
            </div>
            <div className="result">
                <h2 id="correct" ><p> {this.state.message}  {Math.floor(Math.random() * Math.floor(100))} </p></h2> 
            </div>
            </div>
        )
        
    }
}


export default BoxContent