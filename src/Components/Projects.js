import React, {Component} from "react";
import AndroidImage from "../Images/android.png"
import DatabaseImage from "../Images/database.png"
import odlogo from "../Images/odlogo.png";
import cal from "../Images/cal.png"
class Projects extends Component{

    render(){
        return(

            <div className = "grid-container">


            <div className = "row">  
            
            <div className = "col-sm-6 p-4">
            <div className="card container h-100 w-100" >
            <img src={odlogo} className="card-img-top"></img>
            <div className="card-body">
              <h5 className="card-title">Order Management</h5>
              <p className="card-text">
              <text className = "text-left d-block"> <strong>Technologies used : </strong> <em>JavaScript, React framework, CSS3, Bootstrap, Firebase</em></text>
              <ul className = "d-block">
              <li className = "text-left">Designed an admin panel for managing new orders, pending orders and completed orders.</li>
              <li className = "text-left">Used firebase realtime database for data storage and deployed build version to Github.</li>
              </ul>
              </p>
              <a href="https://mdsakibkhan.github.io/Admin_panel/" className="btn btn-primary">Live Project</a>
            </div>
          </div>
          </div>

            <div className = "col-sm-6 p-4">
            
            <div className="card container h-100 w-100" >
            <img className="card-img-top" src={cal}></img>
            <div className="card-body">
              <h5 className="card-title">Calculator-JS</h5>
              <p className="card-text">
              <text className = "text-left d-block"> <strong>Technologies used : </strong> <em>: HTML5, CSS3, JavaScript, jQuery</em></text>
              <ul className = "d-block">
              <li className = "text-left">Basic Calculator with functionalities such as addition, subtraction, multiplication, division.</li>
              </ul>
              </p>
              <a href="https://github.com/MdSakibKhan/Basic_CALCULATOR_HTML_CSS_JS" className="btn btn-primary">Github Repository Link</a>
            </div>
          </div>
            
   
            </div>
            
            </div>


            <div className = "row">  
            
            <div className = "col-sm-6 p-4">
            
            <div className="card container h-100 w-100" >
            <img src={AndroidImage} className="card-img-top"></img>
            <div className="card-body">
              <h5 className="card-title">Online Tutor App</h5>
              <p className="card-text">
              <text className = "text-left d-block"> <strong>Technologies used : </strong> <em>Android Studio, XML, Java, Firebase</em></text>
              <ul className = "d-block">
              <li className = "text-left">Built registration function for students and tutors with a friendly UI in the application.</li>
              <li className = "text-left">Developed tuition search and post functionality for the existing registered users.</li>
              </ul>
              </p>
              <a href="https://drive.google.com/file/d/14xu4wVXJtrfY_ckYXuVmfNI1D4fsksfr/view?usp=sharing" className="btn btn-primary">Project Video Link</a>
            </div>
          </div>
            
            
            
            </div>

            <div className = "col-sm-6 p-4">
            
            <div className="card container h-100 w-100" >
            <img className="card-img-top mt-4" src={DatabaseImage}></img>
            <div className="card-body">
              <h5 className="card-title">Travel Management System </h5>
              <p className="card-text">
              <text className = "text-left d-block"> <strong>Technologies used : </strong> <em>HTML5, CSS3, PHP, MYSQL, XAAMP</em></text>
              <ul className = "d-block">
              <li className = "text-left">Created User friendly ticket booking system for any destination.</li>
              <li className = "text-left">Developed admin friendly interface to manage bookings.</li>
              </ul>
              </p>
              <a href="https://github.com/MdSakibKhan/Travel-management-system" className="btn btn-primary">Github Repository Link</a>
            </div>
          </div>
            
            
            
            
            </div>
            
            
            
            
            
            </div>


          </div>

        );
    }

}

export default Projects;