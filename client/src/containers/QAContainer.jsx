import React from 'react'
import QAComponent from '../components/QAComponent'

class QAContainer extends React.Component{

    constructor(props){
        super(props)
        this.askQuestion = this.askQuestion.bind(this)
        this.questionChange = this.questionChange.bind(this)
        this.state = {
            selectedQuestionIndex: 0
        }
    }

    askQuestion(){
        // this will check for what question has been asked and pass the correct parameters to the game answerquestion method.
        console.log('asked a question')
        this.props.answerQuestion()
    }

    questionChange(){
        this.setState({selectedQuestionIndex: document.querySelector('#question').selectedIndex})
        console.log(this.state.selectedQuestionIndex)
    }

    render(){
        console.log(Object.keys(this.props.questions))
        var questions = Object.keys(this.props.questions).map((question, index) => {
            return (
            <option key={index} value={question}>{question}</option>
            )
        })

        var selectedKey = Object.keys(this.props.questions)[this.state.selectedQuestionIndex]
        var details = this.props.questions[selectedKey].map((detail, index) => {
            return (
                <option key={index} value={detail}>{detail}</option>
            )
        })

        return (
            <div>
                <h3>Ask a question</h3>
                
                    <select name="Questions" id="question" onChange={this.questionChange}>
                        {questions}
                    </select>

                    {/*<QAComponent questions={this.questions} selectedQuestionIndex={this.state.selectedQuestionIndex}/>*/}
                    
                    <select name="Details" id="details">
                        {details}
                    </select>

                    <button onClick={this.askQuestion}>Ask!</button>
     
            </div>
        )
    }

}

export default QAContainer