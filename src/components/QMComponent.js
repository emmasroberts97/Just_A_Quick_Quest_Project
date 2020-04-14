import React, {Component} from 'react';

class QMComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: ""
        };
    }

    componentDidMount() {
        this.getImage();
    }

    getImage(){
        if(this.props.selectedQuestionMaster.img === "rubyRabbit"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/rubyRabbit.png"})
        }
        if(this.props.selectedQuestionMaster.img === "peterPython"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/peterPython.png"})
        }
        if(this.props.selectedQuestionMaster.img === "cSharpSteve"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/cSharpSteve.png"})
        }
        if(this.props.selectedQuestionMaster.img === "html"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/html.png"})
        }
        if(this.props.selectedQuestionMaster.img === "javaTheHut"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/javaTheHut.png"})
        }
        if(this.props.selectedQuestionMaster.img === "machineCodeMouse"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/machineCodeMouse.png"})
        }
        if(this.props.selectedQuestionMaster.img === "nial"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/nial.png"})
        }
        if(this.props.selectedQuestionMaster.img === "pascalan"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/pascalan.png"})
        }
        if(this.props.selectedQuestionMaster.img === "craig"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/craig.png"})
        }
        if(this.props.selectedQuestionMaster.img === "sqlSquirrel"){
            this.setState({img: process.env.PUBLIC_URL +"/images/quizmaster/sqlSquirrel.png"})
        }
    }
    render(){

            if(!this.props.result){
            return(
            <div className="width">
                <h1>{this.props.selectedQuestionMaster.name}</h1>
                <img className="qmImage" src={this.state.img} alt={this.props.selectedQuestionMaster.name} height="300px" width="300px"/>
              <h3 className="qmHeading text-wrap">"{this.props.selectedQuestionMaster.catchphrase}"</h3>
            </div>
        )}
        if(this.props.result === "right"){
            return(
              <div className="width">
                  <h1>{this.props.selectedQuestionMaster.name}</h1>
                  <img className="qmImage" src={this.state.img} alt={this.props.selectedQuestionMaster.name} height="300px" width="300px"/>
                  <h3 className="qmHeading text-wrap">
                      "{this.props.selectedQuestionMaster.rightAnswerResponse}"
                  </h3>
              </div>
            )}
        if(this.props.result === "wrong"){
            return(
                <div className="width">
                    <h1>{this.props.selectedQuestionMaster.name}</h1>
                    <img className="qmImage" src={this.state.img} alt={this.props.selectedQuestionMaster.name} height="300px" width="300px"/>
                    <h3 className="qmHeading text-wrap">
                        "{this.props.selectedQuestionMaster.wrongAnswerResponse}"
                    </h3>
                </div>
            )}

    }
}

export default QMComponent;