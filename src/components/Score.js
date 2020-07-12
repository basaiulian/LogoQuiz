import React, {Component} from 'react'

class Score extends Component{

    constructor(props){
        super(props);
        this.state = { score : 0, correct : 1};
        var score_button = document.getElementById('score');
    }

    increment() {
        if (this.state.correct === 1){
            this.setState({
                score: this.state.score + 1
            });
        }
      };
      
      decrement() {
        this.setState({
          score: this.state.score - 1
        });
      };
    
      reset() {
        this.setState({
          score: 0
        });
      };

          

    render(){
        

        return(
            <div className="score_box">
                <h2 className="score_text">Score: {this.state.score}</h2>
                <button className='inc' id='score' onClick={(e) => this.increment(e)}>Increment!</button>
            </div>
        )
    }
}

export default Score