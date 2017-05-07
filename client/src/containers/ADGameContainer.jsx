import React from 'react'
import CardsContainer from './CardsContainer'
import QAContainer from './QAContainer'
import GuessContainer from './GuessContainer'

class ADGameContainer extends React.Component{

constructor(props){
    super(props)
    this.cards = [
        {name: "Michael Bluth", hair: "Brown", eyes: "Blue", glasses:false, gender:"male", surname:"Bluth", img: "http://cdn2us.denofgeek.com/sites/denofgeekus/files/jasonbateman_michael.png"},
        {name: "Gob Bluth", hair: "Brown", eyes: "Brown", glasses:false, gender:"male", surname:"Bluth", img: "http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/e0/be024d5c-07f3-5153-b1cf-bc1e67cf5dd5/519fb7561dd53.preview-620.jpg"}
    ]
    this.selectedCard = this.cards[0]
    this.questions = [
        { "Is their hair": ["Brown", "Black", "Blonde", "Bald"] },
        { "Do they wear": ["Glasses"] },
        { "Are their eyes": ["Brown", "Blue"] },
        { "Are they": ["Male", "Female"] },
        { "Is their Surname": ["Bluth", "Funke"] },
    ]
    this.checkCorrectGuess = this.checkCorrectGuess.bind(this)
}


checkCorrectGuess(guess){
    console.log("Guess button pressed", guess)
    if(this.selectedCard.name === guess){
        console.log("Guessed coreectly")
    }
    else{
        console.log('wrong guess')
    }
}

answerQuestion(question){
    console.log("question button pressed", question)
}


render(){
    return (
        <div id="Game">
            <h2>Arrested Development Edition</h2>
            <CardsContainer cards={this.cards}/>
            <QAContainer questions={this.questions} answerQuestion={this.answerQuestion}/> 
            <GuessContainer cards={this.cards} onGuessClick={this.checkCorrectGuess}/>
        </div>
    )
}

}

export default ADGameContainer