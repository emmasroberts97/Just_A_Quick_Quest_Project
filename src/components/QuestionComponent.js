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

        if(!this.props.question){
            return <div>loading...</div>
        }

        if(!this.props.result && this.props.question.question){
            let answer1 = newArray[0];
            answer1 = answer1.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/, "<").replace(/&gt;/, ">").replace(/&eacute;/g, "é").replace(/&aacute;/g, "á").replace(/&amp;/g, "&").replace(/&ntilde;/g, "ñ");

            let answer2 = newArray[1];
            answer2 = answer2.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/, "<").replace(/&gt;/, ">").replace(/&eacute;/g, "é").replace(/&aacute;/g, "á").replace(/&amp;/g, "&").replace(/&ntilde;/g, "ñ");

            let answer3 = newArray[2];
            answer3 = answer3.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/, "<").replace(/&gt;/, ">").replace(/&eacute;/g, "é").replace(/&aacute;/g, "á").replace(/&amp;/g, "&").replace(/&ntilde;/g, "ñ");

            let answer4 = newArray[3];
            answer4 = answer4.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/, "<").replace(/&gt;/, ">").replace(/&eacute;/g, "é").replace(/&aacute;/g, "á").replace(/&amp;/g, "&").replace(/&ntilde;/g, "ñ");

            let question = this.props.question.question;
            question = question.replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/, "<").replace(/&gt;/, ">").replace(/&eacute;/g, "é").replace(/&aacute;/g, "á").replace(/&amp;/g, "&").replace(/&ntilde;/g, "ñ");
            return(
                <div>
                    <p>{question}</p>
                    <div>
                        <ul id="list">
                            <li><button type="submit" value={newArray[0]} onClick={this.getResult}>{answer1}</button></li>
                            <li><button type="submit" value={newArray[1]} onClick={this.getResult}>{answer2}</button></li>
                            <li><button type="submit" value={newArray[2]} onClick={this.getResult}>{answer3}</button></li>
                            <li><button type="submit" value={newArray[3]} onClick={this.getResult}>{answer4}</button></li>
                        </ul>
                    </div>

                </div>

            )
        }
        return null;

    }
}

export default QuestionComponent;