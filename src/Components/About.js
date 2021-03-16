import React, { Component } from 'react';
import CV from "../PDF/Sakib_CV.pdf"
class About extends Component {
    render() {
        return (
            <div className = "container mt-3 mb-5 h-100">
            <div className = "align-items-lg-center ml-5">
            <text className = "display-1 text-light d-block text-left align-self-center " style = {{fontSize : '90px'}} id = "hi">HI, I am Sakib.</text>
            <text className = "display-4 text-light d-block text-left " style = {{fontSize : '50px'}} id = "hi">I am a Software Engineer.</text>
            <text className = "display-4 text-light d-block text-left " style = {{fontSize : '50px'}} id = "hi">I am also a Data Science Enthusiast.</text>
            
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
}

export default About;