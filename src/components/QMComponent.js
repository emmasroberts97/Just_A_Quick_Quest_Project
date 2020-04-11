import React, {Component} from 'react';

class QMComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        if(!this.props.result)
        return(
            <div>
              <h2>{this.props.selectedQuestionMaster.catchphrase}</h2>
            </div>
        )
    }
}

export default QMComponent;