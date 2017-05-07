import React from 'react'

// stateless component const?
var Card = function(props){
    
    return (
        <div className="card">
            <img src={props.card.img} />
            <p className="card-text">{props.card.name}</p>
        </div>
    )
    
}

export default Card