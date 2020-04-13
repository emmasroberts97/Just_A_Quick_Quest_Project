import React, {Component} from "react";


class StartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            character: {
                name: "",
                life: 5,
                startTime: "",
                endTime: ""
            }
        }


        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNewChange = this.handleNewChange.bind(this);


    }

    handleClick(event) {
        let character = this.state.character;
        character.startTime = Date.now();
        this.setState({character: character});
        this.props.setCharacter(this.state.character);
        this.props.startGame();
    }

    handleChange(event) {
        this.props.setDifficulty(event);
    }

    handleNewChange(event) {
        let character = this.state.character;
        character.name = event.target.value;
        this.setState({character: character})
    }



    render(){
        return(
            <div className="startComponent">
                <h1 className="line anim-typewriter">Welcome to One Quick Quest!</h1>
                <img className="startImage" src="https://c4.wallpaperflare.com/wallpaper/489/137/187/landscape-castle-clouds-hills-wallpaper-preview.jpg" alt="start page" height="300px" width="500px" />
                <form>
                    <p className="startText">Choose your Character's Name</p>
                <input type="text" placeholder="Type your Name" name="name"
                       onChange={this.handleNewChange} value={this.state.character.name} />
                </form>
                <p className="startText">Select your Difficulty</p>
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