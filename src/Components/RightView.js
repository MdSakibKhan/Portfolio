import React, {Component} from "react"
import './RightBar.css'
import Education from "./Education"
import Skills from "./Skills"
import Projects from './Projects';
import Thesis from "./Thesis";
import WorkHistory from './WorkHistory';
import Songs from "./Songs";
import Certifications from "./Certifications";

import CV from "../PDF/Sakib_CV.pdf"


import ReactPlayer from 'react-player'

class RightView extends Component{

    render(){
        
        if (this.props.currentState == "About") {
                return(
                <div className = "grid-container mb-5">
                <div className = "align-items-lg-center ml-5">
                <text className = "display-2 d-block text-left align-self-center " style = {{fontSize : '100px'}} id = "hi">HI, I am Sakib.</text>
                <text className = "display-4 d-block text-left " style = {{fontSize : '50px'}} id = "hi">I am a Software Engineer.</text>
                <text className = "display-4 d-block text-left " style = {{fontSize : '50px'}} id = "hi">I am also a Data Science Enthusiast.</text>


                
                
                <div className = "grid-container mt-5 p-3 w-50">
                
                <div className = "row">
                <h5 className="card-title display-4 text-secondary text-left" style = {{fontSize : '40px'}} >Want To Know More? </h5>
                </div>

                <div className = "row">
                <a href={CV} className="btn btn-primary btn-lg"><text id = "td">Download CV</text></a>
                </div>
                
                
                </div>
        
                </div>
    
                </div>

            );
        }
        if (this.props.currentState == "Education") {
                return(
                <div className = "grid-container">
                <Education></Education>
                </div> 
            );
        }
        if (this.props.currentState == "WorkHistory"){
            return(
            <div className = "grid-container">
            <WorkHistory></WorkHistory>
            </div> 
        );
        }
        if (this.props.currentState == "Skills") {
            return(
            <div className = "grid-container">
            <Skills></Skills>
            </div> 
        );
        }
        if (this.props.currentState == "Thesis") {
            return(
            <div className = "grid-container">
            <Thesis></Thesis>
            </div> 
        );
        }
        if (this.props.currentState == "Projects"){
            return(
            <div className = "grid-container">
            <Projects></Projects>
            </div> 
        );
        }
        if (this.props.currentState == "Songs"){
            return(
            <div className = "grid-container">
            <Songs></Songs>
            </div> 
        );
        }
        if (this.props.currentState == "Certifications"){
            return(
            <div className = "grid-container">
            <Certifications></Certifications>
            </div> 
        );
        }
    }
}

export default RightView;