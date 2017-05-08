import React from 'react'

var Card = function(props){
    
    return (
        <div className="card" onClick={props.toggleClass}>
            <img src={props.card.img} />
            <p className="card-text">{props.card.name}</p>
        </div>
    )
    
}

export default Card