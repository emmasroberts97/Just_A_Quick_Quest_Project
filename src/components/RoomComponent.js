import React, {Component} from 'react';

class RoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasEntered: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEnterRoom = this.handleEnterRoom.bind(this);
    }

    handleClick(event){
        this.props.nextRoom();
    }

    handleEnterRoom(event){
        this.props.enterRoom();
        this.setState({hasEntered: true});
    }


    render(){
        if(this.props.result === "" && this.state.hasEntered === false){
            return(
                <div>
                    <h1>{this.props.selectedRoom.name}</h1>
                    <p>{this.props.selectedRoom.description}</p>
                    <button type="submit" onClick={this.handleEnterRoom}>Enter Room</button>
                </div>
            )
        }
        if(this.props.result === "right" || this.props.result === "wrong"){
            return(
                <div>
                    <h2>Choose your exit</h2>
                    <button onClick={this.handleClick}>North</button>
                    <button onClick={this.handleClick}>South</button>
                    <button onClick={this.handleClick}>East</button>
                    <button onClick={this.handleClick}>West</button>
                </div>
            )
        }
    }
}

export default RoomComponent;