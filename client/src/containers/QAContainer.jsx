import React from 'react'
import QAComponent from '../components/QAComponent'

class QAContainer extends React.Component{

    render(){
        return (
            <div>
                <h3>Ask a question</h3>
                
                    <select name="Questions">
                        <option>Questions</option>
                    </select>

                    <select name="Questions">
                        <option>Detail</option>
                    </select>
                    
                    <button onClick={this.props.answerQuestion}>Ask!</button>
               
                {/*<QAComponent />*/}
            </div>
        )
    }

}

export default QAContainer