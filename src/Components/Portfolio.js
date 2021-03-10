import React, {Component} from "react";
import LeftView from "./LeftView"
import RightView from "./RightView"
import RightParent from "./RightParent";

import "./Portfolio.css"

class Portfolio extends Component{
    render(){
        return(
            <div className = "grid-container" id = "portfolio">
            
            <div className = "row" id = "portrow" >
            
            <div className = "col-sm-3" id = "portfolio1">
            <LeftView></LeftView>
            </div>

            <div className = "col-sm-9 border-left" id = "portfolio2">
            <RightParent></RightParent>
            </div>
            
            
            
            </div>
            </div>  
        );
    }
}
export default Portfolio;