import React, {Component} from 'react';
import Request from "../helpers/requests";
import QuestionComponent from "../components/QuestionComponent";
import QMComponent from "../components/QMComponent";
import TreasureComponent from "../components/TreasureComponent";
import StartComponent from "../components/StartComponent";


class QuestContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            question: [],
            rooms: [],
            questionMasters: [],
            treasure: [],
            result: "",
            selectedRoom: "",
            selectedQuestionMaster: "",
            selectedTreasure: "",
            selectedDifficulty: "",
            hasStarted: false
        }

        this.logResult = this.logResult.bind(this);
        this.startGame = this.startGame.bind(this);
        this.setDifficulty = this.setDifficulty.bind(this);
    }

    componentDidMount(){
        const request1 = new Request();
        request1.get('/api/rooms')
            .then((data) => {
                this.setState({ rooms: data })
                this.returnRandomRoom()
                })

        const request2 = new Request();
        request2.get('/api/questionmasters')
            .then((data) => {
                this.setState({ questionMasters: data })
                this.returnRandomQuestionMaster()})

        const request3 = new Request();
        request3.get('/api/treasures')
            .then((data) => {
                this.setState({ treasure: data })
                this.returnRandomTreasure()})
    }

    returnRandomRoom(){
        const randomRoom = this.state.rooms[Math.floor(Math.random()*this.state.rooms.length)];
        this.setState({selectedRoom: randomRoom});
    }

    returnRandomQuestionMaster(){
        const randomQuestionMaster = this.state.questionMasters[Math.floor(Math.random()*this.state.questionMasters.length)];
        this.setState({selectedQuestionMaster: randomQuestionMaster});
    }

    returnRandomTreasure(){
        const randomTreasure = this.state.treasure[Math.floor(Math.random()*this.state.treasure.length)];
        this.setState({selectedTreasure: randomTreasure});
    }

    getQuestions(){
        let updatedString = this.state.selectedDifficulty;
        updatedString = updatedString.replace(/['"]+/g, '');

        if(this.state.selectedRoom.category === "Entertainment:Film"){
            fetch(`https://opentdb.com/api.php?amount=1&category=11&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                    })
        }
        if(this.state.selectedRoom.category === "Mythology"){
            fetch(`https://opentdb.com/api.php?amount=1&category=20&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                })
        }
        if(this.state.selectedRoom.category === "Entertainment:Comics"){
            fetch(`https://opentdb.com/api.php?amount=1&category=29&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                })
        }
        if(this.state.selectedRoom.category === "Science:Computers"){
            fetch(`https://opentdb.com/api.php?amount=1&category=18&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                })
        }
        if(this.state.selectedRoom.category === "Celebrities"){
            fetch(`https://opentdb.com/api.php?amount=1&category=26&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                })
        }
        if(this.state.selectedRoom.category === "Sports"){
            fetch(`https://opentdb.com/api.php?amount=1&category=21&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                })
        }
        if(this.state.selectedRoom.category === "Animals"){
            fetch(`https://opentdb.com/api.php?amount=1&category=27&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                })
        }
        if(this.state.selectedRoom.category === "general"){
            fetch(`https://opentdb.com/api.php?amount=1&category=9&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                })
        }
        if(this.state.selectedRoom.category === "Science:Gadgets"){
            fetch(`https://opentdb.com/api.php?amount=1&category=30&type=multiple&difficulty=${updatedString}`)
                .then(res => res.json())
                .then((data)=>{
                    this.setState({question: data.results[0]});
                })
        }
    }

    setDifficulty(event){
        if(event.target.value === "any"){
            return null;
        }
        this.setState({selectedDifficulty: event.target.value})
    }

    logResult(event){
        if(event.target.value === this.state.question.correct_answer){
            this.setState({result: "right"});
        } else {
            this.setState({result: "wrong"});
        }

    }

    startGame(){
        this.setState({hasStarted: true});
        this.getQuestions();
    }

    render(){
        if(this.state.hasStarted === false){
            return (
                <div>
                    <StartComponent startGame={this.startGame} setDifficulty={this.setDifficulty}/>
                </div>
            )
        }
        return(
            <div>
            <h1>hello</h1>
                <QuestionComponent question={this.state.question} getResult={this.logResult} result={this.state.result}/>
                <QMComponent selectedQuestionMaster={this.state.selectedQuestionMaster} result={this.state.result}/>
                <TreasureComponent treasure={this.state.selectedTreasure}/>
            </div>
        )
    }
}

export default QuestContainer;
