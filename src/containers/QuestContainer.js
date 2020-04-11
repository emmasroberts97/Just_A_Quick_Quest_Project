import React, {Component} from 'react';
import Request from "../helpers/requests";

class QuestContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            questions: [],
            rooms: [],
            questionMasters: [],
            treasure: [],
            result: "",
            selectedRoom: "",
            selectedQuestionMaster: "",
            selectedTreasure: "",
            selectedQuestion: "",
            selectedDifficulty: ""
        }
    }

    componentDidMount(){

        const request1 = new Request();
        request1.get('/api/rooms')
            .then((data) => {
                this.setState({ rooms: data })
                this.returnRandomRoom()
                this.getQuestions()})

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

    returnRandomQuestion(){
        const randomQuestion = this.state.questions[Math.floor(Math.random()*this.state.questions.length)];
        this.setState({selectedQuestion: randomQuestion});
    }

    getQuestions(){
        if(this.state.selectedRoom.category === "Entertainment:Film"){
            fetch("https://opentdb.com/api.php?amount=1&category=11&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
        if(this.state.selectedRoom.category === "Mythology"){
            fetch("https://opentdb.com/api.php?amount=1&category=20&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
        if(this.state.selectedRoom.category === "Entertainment:Comics"){
            fetch("https://opentdb.com/api.php?amount=1&category=29&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
        if(this.state.selectedRoom.category === "Science:Computers"){
            fetch("https://opentdb.com/api.php?amount=1&category=18&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
        if(this.state.selectedRoom.category === "Celebrities"){
            fetch("https://opentdb.com/api.php?amount=1&category=26&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
        if(this.state.selectedRoom.category === "Sports"){
            fetch("https://opentdb.com/api.php?amount=1&category=21&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
        if(this.state.selectedRoom.category === "Animals"){
            fetch("https://opentdb.com/api.php?amount=1&category=27&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
        if(this.state.selectedRoom.category === "General"){
            fetch("https://opentdb.com/api.php?amount=1&category=9&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
        if(this.state.selectedRoom.category === "Science:Gadgets"){
            fetch("https://opentdb.com/api.php?amount=1&category=30&type=multiple")
                .then(res => res.json())
                .then((data)=>{
                    this.setState({questions: data.results});
                    this.returnRandomQuestion()})
        }
    }

    render(){
        return(
            <div>
            <h1>hello</h1>
            </div>
        )
    }
}

export default QuestContainer;
