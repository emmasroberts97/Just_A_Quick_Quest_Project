import React, {Component} from 'react';

class QuestContainer extends Component{ 
    constructor(props) {
        super(props);
        this.state={
            questions: [],
            rooms: [],
            questionMasters: [],
            treasure: []
        

        }
    }

    componentDidMount(){
        fetch("https://opentdb.com/api.php?amount=10")
        .then(res => res.json())
        .then((data)=>{
            this.setState({questions: data.results});

        })

        const request1 = new Request();
        request1.get('/api/rooms')
            .then((data) => {
                this.setState({ rooms: data })
            })

        const request2 = new Request();
        request2.get('/api/treasures')
            .then((data) => {
                this.setState({ treasure: data })
            })

        const request3 = new Request();
        request3.get('/api/questionmasters')
            .then((data) => {
                this.setState({ questionMasters: data })
            })
    }

    render(){
        return(
            <h1>hello</h1>
        )
    }
}

export default QuestContainer;

