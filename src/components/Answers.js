import React from 'react'
import AnswerButton from './AnswerButton'

function Answers(){
    return(
        <div className="answers_box">
            <AnswerButton answerText={"Answer1"}/>
            <AnswerButton answerText={"Answer2"}/>
            <AnswerButton answerText={"Answer3"}/>
            <AnswerButton answerText={"Answer4"}/>
        </div>
    )
}
export default Answers