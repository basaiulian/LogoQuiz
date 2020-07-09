import React from 'react'

function AnswerButton({answerText}){
    return(
        <div className="answer_button">
            <h4>{`${answerText}`}</h4>
        </div>
    )
}

export default AnswerButton