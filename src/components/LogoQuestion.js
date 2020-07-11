import React, { Component } from 'react'

class LogoQuestion extends Component{
    render(){
    return(
    <div className="logo_question">
        <img src={`../logos/${this.props.logoFromParent}`} alt="Logo for quiz"></img>
    </div>
    )
    }
}

export default LogoQuestion