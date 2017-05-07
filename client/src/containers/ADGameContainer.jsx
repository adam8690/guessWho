import React from 'react'
import CardsContainer from './CardsContainer'
import QAContainer from './QAContainer'
import GuessContainer from './GuessContainer'

class ADGameContainer extends React.Component{

constructor(props){
    super(props)
    this.cards = [
        {name: "Michael Bluth", hairColour: "Brown", hasHair:"yes", eyes: "Blue", img: "http://cdn2us.denofgeek.com/sites/denofgeekus/files/jasonbateman_michael.png"},
        {name: "Gob Bluth", hairColour: "Brown", hasHair:"yes", eyes: "Brown", img: "http://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/b/e0/be024d5c-07f3-5153-b1cf-bc1e67cf5dd5/519fb7561dd53.preview-620.jpg"}
    ]
}

render(){
    return (
        <div id="Game">
            <h2>Arrested Development Edition</h2>
            <CardsContainer cards={this.cards}/>
            <QAContainer />
            <GuessContainer />
        </div>
    )
}

}

export default ADGameContainer