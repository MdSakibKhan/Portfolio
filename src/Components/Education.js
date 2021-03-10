import react, {Component} from "react";


class Education extends Component{
    render(){
        return(
            <div>
            <div className = "container">
            <div className = "row">  
            <div className="card container" style = {{color : 'black', backgroundColor: "#EBF5F4"}}>
            <h2>2017-Present</h2>
            <p>
            <text className = "h1 d-block text-left"> B.Sc in Computer Science & Engineering (CSE)</text>
            <text className = "display-3 text-left d-block"> BRAC Univerisy </text>
            
            <text className = "font-weight-bold text-left d-block font-italic mt-3 h3"> CGPA : 3.56/4.00</text>
            <text className = "font-weight-bold text-left d-block font-italic mt-3 h3">Computer Science GPA : 3.76/4.00</text>

            <text className = "text-left d-block mt-3"> <strong><i>Main CourseWork :</i> </strong>
            
            Object Oriented Programming, Data Structures, Algorithms, Artificial Intelligence, Database
            Systems, Software Engineering, System Analysis & Design, Android Development, Operating Systems, Computer
            Architechture, Numerical Methods, Computer Interfacing, Computer Networks, Thesis & Project.
            
            </text>

            </p>
            </div>
            </div>
          </div>

          <div className = "container mt-3">
          <div className = "row">  
          <div className="card container " style = {{color : 'black', backgroundColor: "#EBF5F4"}}>
          <h2>Class of 2016</h2>
          <p>
          <text className = "h1 d-block text-left"> Higher Secondary Certificate . HSC . Science </text>
          <text className = "display-4 text-left d-block"> Uttara High School And College </text>
          
          <text className = "font-weight-bold text-left d-block font-italic mt-3 h3"> GPA : 5.00/5.00</text>

          </p>
          </div>
          </div>
        </div>
          </div>
          
        );
    }
}
export default Education;