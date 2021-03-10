import PDFViewer from 'pdf-viewer-reactjs';
import React, { Component } from 'react';

import ht from "../Certifications/html.png"
import css from "../Certifications/css.png"
import jsc from "../Certifications/jsc.png"
import pyintro from "../Certifications/pyintro.png"
import pydt from "../Certifications/pydt.png"
import jpen from "../Certifications/jspen.png";
import dataibm from "../Certifications/dibm.png";



class Certifications extends Component {
    render() {
        return (
            <div>

            <div className="grid-container">
            
            <div className="row">
            

            <div className="col-sm-6 mb-2">
            

            <img src={ht}  className = "w-100 h-100" alt="Html - Coursera"/>
       
            </div>

            
            <div className="col-sm-6 mb-2">
            
            <img src={css} className = "w-100 h-100" alt="CSS - Coursera"/>

            </div>
            
            
            
            </div>


            <div className="row">
            

            <div className="col-sm-6 mb-2">
            

            <img src={jsc}  className = "w-100 h-100" alt="JavaScript - Coursera"/>
       
            </div>

            
            <div className="col-sm-6 mb-2">
            
            <img src={jpen} className = "w-100 h-100" alt="JavaScript - PENNX"/>

            </div>
            
            
            
            </div>


            <div className="row">
            

            <div className="col-sm-6 mb-2">
            

            <img src={pyintro}  className = "w-100 h-100" alt="Python basics - Coursera"/>
       
            </div>

            
            <div className="col-sm-6 mb-2">
            
            <img src={pydt} className = "w-100 h-100" alt="Python Data Structure - Coursera"/>

            </div>
            
            
            
            </div>

            <div className="row">
            

            <div className="col-sm-6 mb-2">
            

            <img src={dataibm}  className = "w-100 h-100" alt=" Data Sciene - IBM"/>
       
            </div>

            
            <div className="col-sm-6 mb-2">
            
            

            </div>
            
            
            
            </div>
            
            
            </div>



            </div>
        );
    }
}

export default Certifications;