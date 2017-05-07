import React from 'react'

// stateless component const?
var Card = function(props){
    return (
        <div className="card" key="card1">
            <p>Card Component</p>
            {/*{props}*/}
        </div>
    )
}

export default Card