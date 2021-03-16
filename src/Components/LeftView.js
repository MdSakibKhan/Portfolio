import React, {Component} from "react"
import MyPhoto from "../Images/Sakib.png"

import {FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

class LeftView extends Component{
    render(){
        return(

            <div className = "grid-container mt-3">
            <div className="row justify-content-center">
            <img src={MyPhoto} className = 'rounded-circle w-75'></img>
            </div>

            <div className = "row justify-content-center mt-5">
            <text className = "display-4 text-light  border-bottom mb-5">Social Links</text>
            </div>



            <div className = "row justify-content-center mb-4">
            <a href = "https://github.com/MdSakibKhan"><FaGithub className = "display-4 text-light rounded-circle"></FaGithub></a>
            </div>
            <div className = "row justify-content-center mb-4">
            <a href = "https://www.linkedin.com/in/md-sakib-khan/"><FaLinkedin className = "display-4 text-light  rounded"></FaLinkedin></a>
            </div>
            <div className = "row justify-content-center mb-4">
            <a href = "https://www.facebook.com/hrk.sakib/"><FaFacebook className = "display-4 text-light rounded"></FaFacebook></a>
            </div>



  
            </div>

        );
    }
}

export default LeftView;