import React, {Component} from "react";


class StartComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);



    }

    handleClick(event){
        this.props.startGame();
    }

    handleChange(event){
        this.props.setDifficulty(event);
    }



    render() {
        return(
            <div>
                <h1>Welcome to One Quick Quest!</h1>
                <select onChange={this.handleChange}>
                    <option value="any">Any</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <button type="submit" value="play" onClick={this.handleClick}>Start The Game!</button>
            </div>
        )
    }

}

export default StartComponent;