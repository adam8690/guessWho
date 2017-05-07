import React from 'react'

// stateless component const?
var Card = function(props){
    
    return (
        <div className="card" key="card1">
            {props.card.name}
        </div>
    )
    
}

export default Card