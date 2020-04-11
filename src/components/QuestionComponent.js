import React, {Component} from 'react';

class QuestionComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
        }

        this.getValues = this.getValues.bind(this);
        this.getResult = this.getResult.bind(this);
    }


    getValues(){
        const wrongAnswers = [];
        for(const value in this.props.question.incorrect_answers){
            wrongAnswers.push(this.props.question.incorrect_answers[value]);
        };
        return wrongAnswers;
    }

    shuffle(array) {
        let counter = array.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    getResult(event){
        this.props.getResult(event);
    }


    render(){
        const newArray = this.getValues();
        newArray.push(this.props.question.correct_answer);
        this.shuffle(newArray);

        if(!this.props.result){
            return(
                <div>
                    <p>{this.props.question.question}</p>
                    <div>
                        <ul id="list">
                            <li><button type="submit" value={newArray[0]} onClick={this.getResult}>{newArray[0]} </button></li>
                            <li><button type="submit" value={newArray[1]} onClick={this.getResult}>{newArray[1]} </button></li>
                            <li><button type="submit" value={newArray[2]} onClick={this.getResult}>{newArray[2]} </button></li>
                            <li><button type="submit" value={newArray[3]} onClick={this.getResult}>{newArray[3]} </button></li>
                        </ul>
                    </div>

                </div>

            )
        }
        return null;

    }
}

export default QuestionComponent;