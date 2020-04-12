import React from "react";

const TreasureComponent = (props)=>{
    if(props.treasure){
        return (
            <div>
                {props.treasure.ingredient}
            </div>
        )
    }
    return null;

}
export default TreasureComponent;