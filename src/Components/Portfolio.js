import React, {Component} from "react";
import LeftView from "./LeftView"
import RightParent from "./RightParent";


class Portfolio extends Component{
    render(){
        return(
            <div className = "grid-container">

    
            <div className = "col-sm-3 float-left" id = "left">
            <LeftView></LeftView>
            </div>

            <div className = "col-sm-9 float-left p-4" id = "right">
            <RightParent></RightParent>
            </div>
            
            

            </div>  
        );
    }
}
export default Portfolio;