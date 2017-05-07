import React from 'react'
import ReactDOM from 'react-dom'
import ADGameContainer from './containers/ADGameContainer'

window.onload = function(){
  ReactDOM.render(
    <div>
      <h1>Guess Who?</h1>
      <ADGameContainer />
    </div>,
    document.getElementById('app')
  );
}