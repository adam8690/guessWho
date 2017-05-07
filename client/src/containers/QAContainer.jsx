import React from 'react'
import QAComponent from '../components/QAComponent'

class QAContainer extends React.Component{

    constructor(props){
        super(props)
        this.askQuestion = this.askQuestion.bind(this)
    }

    askQuestion(){
        // this will check for what question has been asked and pass the correct parameters to the game answerquestion method.
        console.log('asked a question')
        this.props.answerQuestion()
    }
    
    render(){
        return (
            <div>
                <h3>Ask a question</h3>
                
                    <select name="Questions" id="question">
                        <option>Questions</option>
                    </select>

                    <select name="Questions" id="detail">
                        <option>Detail</option>
                    </select>
                    
                    <button onClick={this.askQuestion}>Ask!</button>
               
                {/*<QAComponent />*/}
            </div>
        )
    }

}

export default QAContainer