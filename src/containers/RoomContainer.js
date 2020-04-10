import React, {Component} from 'react';
import Request from '../helpers/requests.js';

class RoomContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            rooms: []
        }
    }

    componentDidMount(){
      const request = new Request();
      request.get('/api/rooms')
      .then((data) => {
        this.setState({ rooms: data })
      })
    }

    render(){
        return(
            <h1>I am in a room</h1>
        )
    }
}

export default RoomContainer;
