import React, {Component} from 'react';

class RoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.nextRoom();
    }


    render(){
        if(this.props.result === ""){
            return(
                <div>
                    <h1>{this.props.selectedRoom.name}</h1>
                    <p>{this.props.selectedRoom.description}</p>
                </div>
            )
        }
        return(
            <div>
                <button onClick={this.handleClick}>North</button>
                <button onClick={this.handleClick}>South</button>
                <button onClick={this.handleClick}>East</button>
                <button onClick={this.handleClick}>West</button>
            </div>
        )

    }
}

export default RoomComponent;