import React from 'react'
import Card from '../components/Card'

class CardsContainer extends React.Component{

    constructor(props){
        super(props)
    }

    toggleClass(event){
        console.log('toggleClass target', event.target)
        event.target.classList.add('greyedOutCard')
    }

    render(){

        const CardsDisplay = this.props.cards.map((card, index) => {
            return <Card key={index} card={card} toggleClass={this.toggleClass}/>
        })

        return(
            <div className="cards-container" >
                {CardsDisplay}
            </div>
        )}

}

export default CardsContainer