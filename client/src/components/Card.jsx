import React from 'react'

// stateless component const?
var Card = function(props){
    
    return (
        <div className="card">
            {props.card.name}
        </div>
    )
    
}

export default Card