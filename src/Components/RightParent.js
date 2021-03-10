import React, {Component} from "react"
import RightTop from "./RightTop";
import RightView from "./RightView"

class RightParent extends Component{
    state = {
        Clicked : "About"
    }

    ButtonClickedHandler = (event) =>{
        this.setState ({Clicked : event.target.value}) 
    }

    render(){
        return(
        <div>
            
        <div className = "grid-container">
        <RightTop Changed = {this.ButtonClickedHandler}></RightTop>
        </div>
        <div className = "grid-container">
        <RightView currentState = {this.state.Clicked}></RightView>
        </div>

        </div>  
        );
        

    }
}

export default RightParent;