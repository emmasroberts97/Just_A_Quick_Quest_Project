import React, {Component} from 'react';
import TreasureContainer from './TreasureContainer';
import QuestionMasterContainer from './QuestionMasterContainer';
import RoomContainer from './RoomContainer';

class QuestContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            questions: []
        }
    }

    componentDidMount(){
        fetch("https://opentdb.com/api.php?amount=10")
        .then(res => res.json())
        .then((data)=>{
            this.setState({questions: data.results});

        })
    }

    render(){
        return(
            <div>
            <h1>hello</h1>
            <TreasureContainer />
            <QuestionMasterContainer />
            <RoomContainer />
            </div>
        )
    }
}

export default QuestContainer;
