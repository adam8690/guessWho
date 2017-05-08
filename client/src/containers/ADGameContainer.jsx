import React from 'react'
import CardsContainer from './CardsContainer'
import QAContainer from './QAContainer'
import GuessContainer from './GuessContainer'

class ADGameContainer extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            guess: null
        }
        this.cards = [
            {name: "Michael Bluth", hair: "Brown", eyes: "Blue", glasses:false, gender:"Male", surname:"Bluth", img: "http://cdn2us.denofgeek.com/sites/denofgeekus/files/jasonbateman_michael.png"},
            {name: "Gob Bluth", hair: "Brown", eyes: "Brown", glasses:false, gender:"Male", surname:"Bluth", img: "http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/e0/be024d5c-07f3-5153-b1cf-bc1e67cf5dd5/519fb7561dd53.preview-620.jpg"},
            {name: "George Michael Bluth", hair: "Brown", eyes: "Brown", glasses:false, gender:"Male", surname:"Bluth", img: "http://vignette2.wikia.nocookie.net/arresteddevelopment/images/a/ab/GeorgeMichael.jpg/revision/latest?cb=20111027201032"},
            {name: "Lindsey Bluth Funke", hair: "Blonde", eyes: "Blue", glasses:false, gender:"Female", surname:"Funke", img: "https://vignette1.wikia.nocookie.net/arresteddevelopment/images/f/f4/Purple_-_Season_One_photoshoot_%288%29.jpeg/revision/latest?cb=20120429230807"},
            {name: "Tobias Funke", hair: "Bald", eyes: "Brown", glasses:true, gender:"Male", surname:"Funke", img: "https://pbs.twimg.com/profile_images/644157694136422400/d4ho5P5S.jpg"},
            {name: "Maebe Funke", hair: "Black", eyes: "Brown", glasses:false, gender:"Female", surname:"Funke", img: "http://cdn2.crushable.com/wp-content/uploads/2013/04/Maeby-Funke-2.jpeg"},
            {name: "George Bluth", hair: "Bald", eyes: "Brown", glasses:false, gender:"Male", surname:"Bluth", img: "http://cdn.playbuzz.com/cdn/be0eb2e0-beed-4505-8a7d-c6be40555d5b/593fca2c-ee49-44d2-8503-d5af443e347e.jpg"},
            {name: "Lucille Bluth", hair: "Brown", eyes: "Brown", glasses:false, gender:"Female", surname:"Bluth", img: "http://vignette4.wikia.nocookie.net/arresteddevelopment/images/8/88/S4_Lucille_%2801%29.jpg/revision/latest?cb=20130502032638"},
        ]
        this.selectedCard = this.cards[Math.floor(Math.random() * (this.cards.length - 1) + 1)]
        this.questions = {
            "Is their hair": ["Brown", "Black", "Blonde", "Bald"],
            "Do they wear": ["Glasses"] ,
            "Are their eyes": ["Brown", "Blue"],
            "Are they": ["Male", "Female"],
            "Is their Surname": ["Bluth", "Funke"],
        }
        this.checkCorrectGuess = this.checkCorrectGuess.bind(this)
        this.answerQuestion = this.answerQuestion.bind(this)
    }


    checkCorrectGuess(guess){
        console.log("Guess button pressed", guess)
        if(this.selectedCard.name === guess){
            console.log("Guessed correctly")
            this.setState({guess: "Correct"})
        }
        else{
            console.log('wrong guess')
            this.setState({guess: "Incorrect"})
        }
    }

    answerQuestion(question){
        console.log("question button pressed", question)
    }


    render(){

        switch(this.state.guess){
            case "Correct":
            return <div id="won"><h2>You won, Huzzah!</h2></div>;
            
            case "Incorrect":
            return <div id="lost"><h2>You've made a huge mistake.</h2></div>;
            
            default:
            return (
            <div id="Game">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Arrested_Development.svg/2000px-Arrested_Development.svg.png" />
                <CardsContainer cards={this.cards}/>
                <QAContainer questions={this.questions} answerQuestion={this.answerQuestion} selectedCard={this.selectedCard}/> 
                <GuessContainer cards={this.cards} onGuessClick={this.checkCorrectGuess}/>
            </div>
            )
        }
    }

}

export default ADGameContainer