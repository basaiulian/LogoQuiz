import React from 'react'
import BoxContent from './BoxContent'
import BoxBackground from './BoxBackground'

function QuestionBox(){
    return(
        <div className="question_box">
            <BoxBackground />
            <BoxContent />
        </div>
    )
}

export default QuestionBox