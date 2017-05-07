import React from 'react'
import GuessComponent from '../components/GuessComponent'

class GuessContainer extends React.Component{

    render(){
        return (
            <div>
                <h3>Make a Guess</h3>
                <select>
                    <option>Guess an name</option>
                </select>
                <button onClick={this.props.onGuessClick}>Guess!</button>
            </div>
        )
    }


}

export default GuessContainer