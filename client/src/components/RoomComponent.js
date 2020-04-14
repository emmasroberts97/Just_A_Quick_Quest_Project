import React, {Component} from 'react';


class RoomComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            lives: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEnterRoom = this.handleEnterRoom.bind(this);
    }

    componentDidMount() {
        this.getImage();
    }

    handleClick(event){
        this.props.nextRoom();
    }

    handleEnterRoom(event){
        this.props.enterRoom();
    }

    getImage(){
        if(this.props.selectedRoom.name === "The spooky old castle"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/castle.jpg"})
        }
        if(this.props.selectedRoom.name === "Another Planet!?!?!?"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/planet.jpg"})
        }
        if(this.props.selectedRoom.name === "An old pirate ship"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/pirate.jpg"})
        }
        if(this.props.selectedRoom.name === "A creepy, dark, dank basement"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/basement.jpeg"})
        }
        if(this.props.selectedRoom.name === "An old timey western saloon"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/saloon.jpg"})
        }
        if(this.props.selectedRoom.name === "A modern, open plan corporate office"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/office.jpg"})
        }
        if(this.props.selectedRoom.name === "Somewhere under the sea!"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/sea.png"})
        }
        if(this.props.selectedRoom.name === "A haunted forest!"){
            this.setState({img: process.env.PUBLIC_URL +"images/rooms/forest.jpg"})
        }
        if(this.props.selectedRoom.name === "The top of a tall mountain!"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/mountain.jpg"})
        }
        if(this.props.selectedRoom.name === "2000 years into the future!"){
            this.setState({img: process.env.PUBLIC_URL +"/images/rooms/futuristic.png"})
        }
    }


    render(){

        let collectedTreasure = this.props.collectedItems.map((treasure , index) => {
            return <img src={process.env.PUBLIC_URL +"/images/treasure/" + treasure.ingredient + ".png"} alt={treasure.ingredient} height="75px" width="75px" key={index}/>
        })

        if(this.props.result === "" && this.props.hasEnteredRoom === false){
            return(
                <div>
                    <h1 className="roomHeading">{this.props.selectedRoom.name}</h1>
                    <img src={this.state.img} alt={this.props.selectedRoom.name} height="300px" width="300px" className="roomImages" />
                    <h3 className="roomDescription">{this.props.selectedRoom.description}</h3>
                    <button type="submit" onClick={this.handleEnterRoom}>Enter Room</button>
                </div>
            )
        }

        if(this.props.result === "right" || this.props.result === "wrong"){
            return(
                <div className="compassImages">
                    <h2 className="compassText">Choose your exit</h2>
                    <button onClick={this.handleClick} className="compass"><img src={process.env.PUBLIC_URL +"/images/rooms/compass.png"} height="300px" width="300px" alt="compass" /></button>
                </div>
            )
        }

        if(this.props.hasEnteredRoom === true){
            if(this.props.lives === 5){
                return(
                    <div>
                    <div className="lifecounter">
                        <div className="life">
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                        </div>
                    </div>
                        <div className="treasure">
                            {collectedTreasure}
                        </div>
                    </div>
                )
            }
            if(this.props.lives === 4){
                return(
                    <div>
                    <div className="lifecounter">
                        <div className="life">
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                        </div>
                    </div>
                        <div className="treasure">
                            {collectedTreasure}
                        </div>
                    </div>

                )
            }
            if(this.props.lives === 3){
                return(
                    <div>
                        <div className="lifecounter">
                            <div className="life">
                                <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                                <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                                <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            </div>
                        </div>
                        <div className="treasure">
                            {collectedTreasure}
                        </div>
                    </div>

                )
            }
            if(this.props.lives === 2){
                return(
                    <div>
                        <div className="lifecounter">
                            <div className="life">
                                <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                                <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            </div>
                        </div>
                        <div className="treasure">
                            {collectedTreasure}
                        </div>
                    </div>

                )
            }
            if(this.props.lives === 1){
                return(
                    <div>
                        <div className="lifecounter">
                            <div className="life">
                                <img src={process.env.PUBLIC_URL +"/images/character/heart.png"} alt="lives" height="50px" width="50px"/>
                            </div>
                        </div>
                        <div className="treasure">
                            {collectedTreasure}
                        </div>
                    </div>

                )
            }
        }
    }
}

export default RoomComponent;