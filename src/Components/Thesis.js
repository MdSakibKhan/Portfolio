import React, {Component} from "react";
import dataImg from "../Images/dataScience.png"

class Thesis extends Component{

    render(){
        return(

            <div className = "container">

            <div className = "row">  
            
            
            <div className="card container" style = {{}} >
            <div className="card-body">
            <img className = "w-50" src={dataImg}></img>
              <h5 className="card-title text-left display-4" style = {{ fontSize : "40px"}}>Affective state recognition through analysis of EEG signals by using Extreme gradient boosting </h5>
              <p className="card-text">
              <text className = "text-left d-block"> <strong>Responsibilities : </strong></text>
              <ul className = "d-block">
              <li className = "text-left">Analyzed EEG Signals and performed Pre-processing, Feature engineering to determine the dimensions of emotions.</li>
              <li className = "text-left">Applied Machine Learning, Neural Network algorithms such as SVM, XB Boost, Sequential model using Python.</li>
              <li className = "text-left">Achieved mean accuracy of 95.174%, 87.456%, 84.541% for arousal, valence and dominance respectively.</li>
              <li className = "text-left">Used Overleaf LateX editor for preparing the overall report as well as the organized IEEE version of the report.</li>
              </ul>
              </p>
              <a href="https://github.com/MdSakibKhan/Python_ML-Neural-Network/blob/main/Affective_State_Recognition.ipynb" className="btn btn-primary">Project Link</a>
            </div>
          </div>
            
        
            </div>


          </div>

        );
    }

}

export default Thesis;
