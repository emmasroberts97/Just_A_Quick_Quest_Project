import React, {Component} from 'react';

class EndComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }




    render() {

        // const characterNames = this.props.characters.map((character) => {
            const highscores = [];
        this.props.characters.forEach((character) => {
            const score = (1000000-(character.endTime - character.startTime))*(character.life/2);
            const savedCharacter={
                "name": character.name,
                "highscore": score
            }
            return highscores.push(savedCharacter);
        });



        highscores.sort((a, b) => {
            return a.highscore - b.highscore;
        });

        highscores.reverse();

        let leaderboard = highscores.map((score)=>{
            return <p>name:{score.name} score:{score.highscore}</p>
        });

        return(
            <div>{leaderboard}</div>
        )
    }
}

export default EndComponent;