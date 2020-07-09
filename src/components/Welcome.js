import React from 'react'

function Welcome(){
    const currentDate = new Date();
    let timeOfDay
    if(currentDate.getHours() < 12){
        timeOfDay = "morning";
    } else 
    if (currentDate.getHours() > 12 && currentDate.getHours() < 18){
        timeOfDay = "afternoon";
    } else 
    if(currentDate.getHours() > 18 && currentDate.getHours() <= 23){
        timeOfDay = "evening";
    } else {
        timeOfDay = "night";
    }
    return(
    <div id="welcomeMessage">
    <h1>I hope your {`${timeOfDay}`} is good, Guest!</h1>
    </div>
    )
}

export default Welcome