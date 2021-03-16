import React, {Component} from "react"
import RightTop from "./RightTop";


class RightParent extends Component{
    state = {
        Clicked : "About"
    }

    ButtonClickedHandler = (event) =>{
        this.setState ({Clicked : event.target.value}) 
    }

    render(){
        return(
        <div className = "grid-container w-100">
         <RightTop></RightTop>
        </div>
        );
        

    }
}

export default RightParent;