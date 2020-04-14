import React, {Component} from 'react';

class QMComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: ""
        };
    }

    getImage(){
        if(this.props.selectedQuestionMaster.img === "rubyRabbit"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/rubyRabbit.png"})
        }
        if(this.props.selectedQuestionMaster.img === "rubyRabbit"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/castle.jpg"})
        }

    }
    render(){

            if(!this.props.result){
            return(
            <div>
              <h2>{this.props.selectedQuestionMaster.catchphrase}</h2>
            </div>
        )}
        if(this.props.result === "right"){
            return(
              <div>
                  <h2>
                      {this.props.selectedQuestionMaster.rightAnswerResponse}
                  </h2>
              </div>
            )}
        if(this.props.result === "wrong"){
            return(
                <div>
                    <h2>
                        {this.props.selectedQuestionMaster.wrongAnswerResponse}
                    </h2>
                </div>
            )}

    }
}

export default QMComponent;