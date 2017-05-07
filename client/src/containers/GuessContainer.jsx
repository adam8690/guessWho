import React from 'react'
import GuessComponent from '../components/GuessComponent'

class GuessContainer extends React.Component{

    render(){
        return (
            <div>
                <p>Guess Container</p>
                <GuessComponent />
            </div>
        )
    }


}

export default GuessContainer