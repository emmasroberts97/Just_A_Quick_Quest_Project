import React, {Component} from 'react';
import Request from '../helpers/requests.js';


class QuestionMasterContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            questionMasters: []
        }
    }

    componentDidMount(){
      const request = new Request();
      request.get('/api/questionmasters')
      .then((data) => {
        this.setState({ questionMasters: data })
      })
    }

    render(){
        return(
            <h1>QMs live here</h1>
        )
    }
}

export default QuestionMasterContainer;
