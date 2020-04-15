import React, {Component} from 'react';

class EndComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    goBackToStart(){
        window.location.reload(false);
    }

    render() {

        let difficulty = 0
        if (this.props.selectedDifficulty === ""){
            difficulty =4
        }
        if (this.props.selectedDifficulty === "easy" ){
            difficulty = 1
        }
        if (this.props.selectedDifficulty === "medium" ){
            difficulty = 2
        }
        if (this.props.selectedDifficulty === "hard" ){
            difficulty = 3
        }

        // const characterNames = this.props.characters.map((character) => {
            const highscores = [];
        this.props.characters.forEach((character) => {
            const score = Math.round((1000000-(character.endTime - character.startTime))*(0.2+(character.life/2))* difficulty);
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

        let leaderboard = highscores.map((score, index) => {
            if(this.props.selectedCharacter){
                if(score.name === this.props.selectedCharacter.name){
                    return (
                        <tr key={index}>
                            <td><b>{score.name}</b></td>
                            <td><b>{score.highscore}</b></td>
                        </tr>
                    )
                }};

                return (
                    <tr key={index}>
                        <td>{score.name}</td>
                        <td>{score.highscore}</td>
                    </tr>
                )
        });

        if(this.props.score.length === 5){
            return(
                <div>
                    <h2 className="endHeading">Well done! You saved the day!</h2>
                    <img className="cake" src={process.env.PUBLIC_URL +"/images/treasure/Cake.png"} alt="cake" height="300px" width="300px"/>
                    <button type="submit" onClick={this.goBackToStart}>Just One More Quick Quest</button>
                    <h2 className="endHeading">Leaderboard</h2>
                    <table className="leaderboard">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                        </thead>
                        <tbody>
                        {leaderboard}
                        </tbody>

                    </table>
                </div>
            )}

        return (
           <div>
               <h2 className="endHeading">Well done, your best friend now hates you. No cake for you!!</h2>
               <button type="submit" onClick={this.goBackToStart}>Just One More Quick Quest</button>
               <table className="leaderboard">
                   <thead>
                   <tr>
                       <th>Name</th>
                       <th>Score</th>
                   </tr>
                   </thead>
                   <tbody>
                   {leaderboard}
                   </tbody>

               </table>
           </div>
         )
    }
}

export default EndComponent;