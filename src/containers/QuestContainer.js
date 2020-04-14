import React, {Component} from 'react';
import Request from "../helpers/requests";
import QuestionComponent from "../components/QuestionComponent";
import QMComponent from "../components/QMComponent";
import TreasureComponent from "../components/TreasureComponent";
import StartComponent from "../components/StartComponent";
import RoomComponent from "../components/RoomComponent";
import EndComponent from "../components/EndComponent";


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
            hasStarted: false,
            hasFinished: false,
            hasEnteredRoom: false,
            character: null,
            collectedItems: [],
            savedCharacters: []
        }

        this.logResult = this.logResult.bind(this);
        this.startGame = this.startGame.bind(this);
        this.setDifficulty = this.setDifficulty.bind(this);
        this.nextRoom = this.nextRoom.bind(this);
        this.setCharacter = this.setCharacter.bind(this);
        this.enterRoom = this.enterRoom.bind(this);
    }

    componentDidMount(){
        const request1 = new Request();
        request1.get('/api/rooms')
            .then((data) => {
                this.setState({ rooms: data })
                this.returnRandomRoom()});

        const request2 = new Request();
        request2.get('/api/questionmasters')
            .then((data) => {
                this.setState({ questionMasters: data })
                this.returnRandomQuestionMaster()});

        const request3 = new Request();
        request3.get('/api/treasures')
            .then((data) => {
                this.setState({ treasure: data })
                this.returnRandomTreasure()});
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
        this.setState({selectedDifficulty: event.target.value});
    }

    logResult(event) {
        if (event.target.value === this.state.question.correct_answer) {
            this.setState({result: "right"});

            let collected = this.state.collectedItems;
            collected.push(this.state.selectedTreasure);
            this.setState({collectedItems: collected});

            let newTreasure = this.state.treasure;
            let indexTreasure = newTreasure.indexOf(this.state.selectedTreasure);
            newTreasure.splice(indexTreasure,1);
            this.setState({treasure: newTreasure});

            this.returnRandomTreasure();
        } else {
            this.setState({result: "wrong"});
            let newLives = this.state.character.life - 1;
            let character = this.state.character;
            character.life = newLives;
            this.setState({character: character});
        }
    }

    startGame(){
        this.setState({hasStarted: true});
        this.getQuestions();
    }

    nextRoom(){
        if(this.state.rooms.length === 0 || this.state.character.life === 0 || this.state.collectedItems.length === 5){
            this.setState({hasFinished: true});

            let character = this.state.character;
            character.endTime = Date.now();
            this.setState({character: character});
            this.createCharacter();

        }
        if(this.state.rooms.length !== 0){
            this.setState({hasEnteredRoom: false});
            // Remove Room
            let newRooms = this.state.rooms;
            let indexRoom = newRooms.indexOf(this.state.selectedRoom);
            newRooms.splice(indexRoom, 1);
            this.setState({rooms: newRooms});
            this.returnRandomRoom();

            // Remove QM
            let newQMs = this.state.questionMasters;
            let indexQM = newQMs.indexOf(this.state.selectedQuestionMaster);
            newQMs.splice(indexQM, 1);
            this.setState({questionMasters: newQMs});
            this.returnRandomQuestionMaster();

            // Set Result
            this.setState({result: ""});

            // Get Questions
            this.getQuestions();
        }
    }

        setCharacter(character){
        this.setState({character: character})

    }

    createCharacter(){
        const request = new Request();
        request.post('/api/characters', this.state.character)
            .then(() => this.getCharacters());

    }

    getCharacters(){
        const request = new Request();
        request.get('/api/characters')
            .then((data) => {this.setState({ savedCharacters: data })
            });
    }

    enterRoom(){
        this.setState({hasEnteredRoom: true});
    }




    render(){
        if(this.state.hasStarted === false && this.state.hasFinished === false){
            return (
                <div className="startScreen">
                    <StartComponent startGame={this.startGame} setDifficulty={this.setDifficulty} setCharacter={this.setCharacter}/>
                </div>
            )
        }
        if(this.state.hasFinished === true){
            return (
                <div className="endScreen">
                    <EndComponent characters={this.state.savedCharacters} selectedCharacter={this.state.character} score={this.state.collectedItems}/>
                </div>
            )
        }

        if(this.state.hasEnteredRoom === false){
            return(
                <RoomComponent selectedRoom={this.state.selectedRoom} result={this.state.result} nextRoom={this.nextRoom} enterRoom={this.enterRoom} hasEnteredRoom={this.state.hasEnteredRoom} lives={this.state.character.life}/>
            )
        }

        if(this.state.hasEnteredRoom === true){
            return(
                <div className="level">
                    <RoomComponent selectedRoom={this.state.selectedRoom} result={this.state.result} nextRoom={this.nextRoom} enterRoom={this.enterRoom} hasEnteredRoom={this.state.hasEnteredRoom} lives={this.state.character.life}/>
                    <QMComponent selectedQuestionMaster={this.state.selectedQuestionMaster} result={this.state.result}/>
                    <QuestionComponent question={this.state.question} getResult={this.logResult} result={this.state.result}/>
                    <TreasureComponent treasure={this.state.selectedTreasure}/>
                </div>
            )
        }


    }
}

export default QuestContainer;
