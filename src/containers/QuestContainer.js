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
        fetch("https://opentdb.com/api.php?amount=10")
        .then(res => res.json())
        .then((data)=>{
            this.setState({questions: data.results});
            this.returnRandomQuestion()})

        const request1 = new Request();
        request1.get('/api/rooms')
            .then((data) => {
                this.setState({ rooms: data })
                this.returnRandomRoom()})

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

    render(){
        return(
            <div>
            <h1>hello</h1>
            </div>
        )
    }
}

export default QuestContainer;
