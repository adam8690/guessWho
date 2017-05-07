import React from 'react'
import GuessComponent from '../components/GuessComponent'

class GuessContainer extends React.Component{

    constructor(props){
        super(props)
        this.guessClick = this.guessClick.bind(this)
    }

    guessClick(){
        var guessIndex = document.querySelector('#guess').selectedIndex
        this.props.onGuessClick(this.props.cards[guessIndex].name)
    }

    render(){
    
        const options = this.props.cards.map((card, index) =>{
            return (
               <option key={index} value={card.name}>{card.name}</option> 
            )
        })

        return (
            <div>
                <h3>Make a Guess</h3>
                <select id="guess">
                    {options}
                </select>
                <button onClick={this.guessClick}>Guess!</button>
            </div>
        )
    }


}

export default GuessContainer