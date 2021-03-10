import React, {Component} from "react"
import MyPhoto from "../Images/Md. Sakib Khan.jpg"

import {FaGithub, FaLinkedin} from "react-icons/fa"
import "./RightTop.css";

class LeftView extends Component{
    render(){
        return(

                <div className = "grid-container ">
                <div class="row navbar mt-2 mb-3 ml-2 mr-2">
                <div className = "col-sm-3  ">
                <button  id = "btn"  className = "w-100 h-100 btn btn-lg  text-left"  onClick = {this.props.Changed} value = "About">About</button>
                </div>
                <div className = "col-sm-3  ">
                <button   id = "btn" className = " w-100 h-100 btn btn-lg   text-left  " onClick = {this.props.Changed} value = "Education">Education</button>
                </div>
                <div className = "col-sm-3  " >
                <button  id = "btn"  className = "w-100 h-100 btn btn-lg  text-left  " onClick = {this.props.Changed} value = "Thesis">Research</button>
                </div>
                <div className = "col-sm-3  ">
                <button  id = "btn"  className = "w-100 h-100 btn btn-lg  text-left"  onClick = {this.props.Changed} value = "Projects">Projects</button>
                </div>
                </div>
                <div className = "row navbar mt-2 mb-3 ml-2 mr-2 border-bottom">
                <div className = "col-sm-3 ">
                <button  id = "btn"  className = "w-100 h-100 btn btn-lg  text-left"  onClick = {this.props.Changed} value = "WorkHistory">Experience</button>
                </div>
                <div className = "col-sm-3 ">
                <button  id = "btn"  className = "w-100 h-100 btn btn-lg  text-left"   onClick = {this.props.Changed} value = "Skills">Skills</button>
                </div>
                <div className = "col-sm-3 ">
                <button  id = "btn"  className = "w-100 h-100 btn btn-lg  text-left"   onClick = {this.props.Changed} value = "Certifications">Certifications</button>
                </div>
                <div className = "col-sm-3 ">
                <button  id = "btn"  className = "w-100 h-100 btn btn-lg  text-left"   onClick = {this.props.Changed} value = "Songs">My Songs</button>
                </div>
                </div>
                </div>

        );
    }
}

export default LeftView;