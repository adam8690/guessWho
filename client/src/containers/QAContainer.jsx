import React from 'react'
import QAComponent from '../components/QAComponent'

class QAContainer extends React.Component{

    constructor(props){
        super(props)
        this.questions = this.props.questions
        this.questionsArray = Object.keys(this.questions)
        this.askQuestion = this.askQuestion.bind(this)
        this.questionChange = this.questionChange.bind(this)
        this.detailChange = this.detailChange.bind(this)
        this.state = {
            selectedQuestionIndex: 0,
            selectedDetailIndex: 0
        }
    }

    askQuestion(){
        console.log(this.state)
        console.log(this.questions)

        var questionText = this.questionsArray[this.state.selectedQuestionIndex]
        console.log(questionText)
        console.log('array of answers to selected question',this.props.questions[questionText][0])      
        console.log('selected card', this.props.selectedCard)
        // this will check for what question has been asked and pass the correct parameters to the game answerquestion method.
        
        switch(this.state.selectedQuestionIndex){
            case 0: if(this.props.selectedCard.hair === this.props.questions[questionText][this.state.selectedDetailIndex]){
                console.log("yes");
            }
            else console.log("no") 
            break;
            case 1: if(this.props.selectedCard.glasses === this.props.questions[questionText][this.state.selectedDetailIndex]){
                console.log("yes");
            }
            else console.log("no") 
            break;
            case 2: if(this.props.selectedCard.eyes === this.props.questions[questionText][this.state.selectedDetailIndex]){
                console.log("yes");
            }
            else console.log("no") 
            break;
            case 3: if(this.props.selectedCard.gender === this.props.questions[questionText][this.state.selectedDetailIndex]){
                console.log("yes");
            }
            else console.log("no") 
            break;
            case 4: if(this.props.selectedCard.surname === this.props.questions[questionText][this.state.selectedDetailIndex]){
                console.log("yes");
            }
            else console.log("no")    
            break;              
        }
        
        console.log('asked a question')

    }

    questionChange(){
        this.setState({selectedQuestionIndex: document.querySelector('#question').selectedIndex})
    }
    detailChange(){
        this.setState({selectedDetailIndex: document.querySelector('#details').selectedIndex})
    }

    render(){
        var questions = this.questionsArray.map((question, index) => {
            return (
            <option key={index} value={question}>{question}</option>
            )
        })

        var selectedKey = this.questionsArray[this.state.selectedQuestionIndex]
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
                    
                    <select name="Details" id="details" onChange={this.detailChange}>
                        {details}
                    </select>

                    <button onClick={this.askQuestion}>Ask!</button>
     
            </div>
        )
    }

}

export default QAContainer