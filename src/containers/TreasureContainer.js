import React, {Component} from 'react';
import Request from '../helpers/requests.js';

class TreasureContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            treasure: []
        }
    }

    componentDidMount(){
      const request = new Request();
        request.get('/api/treasures')
            .then((data) => {
                this.setState({ treasure: data })
            })
    }

    render(){
        return(
            <h1>Here is your treasure!</h1>
        )
    }
}

export default TreasureContainer;
