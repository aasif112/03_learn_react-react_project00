import React from "react";

import ReactProjects from "./react_project";

function Tutors(props) {
    return    ( <div >
                    <h1>Hello World</h1>
                    <h2>Wellcome to {props.bootCamp}</h2>
                    <p>Tutors in the {props.bootCamp} are</p>
                    <ul>
                    <li>Amir Pinger</li>
                    <li>Mohsin Khalid</li>
                    <li>Ameen Alam</li>
                    <li>Bashir Aziz</li>
                    </ul>
                    <ReactProjects timePeriod="One Months" intern="Two Months" />               
              </div>
    );
  }

function Classes() {
    return (<div>
                <h1>Wellcome to React Learning Classes</h1>
                <h3>Upto now we have covered following classes:</h3>
                <ol>
                    <li><h4>Class-1</h4></li>
                    <li><h4>Class-2</h4></li>
                    <li><h4>Class-3</h4></li>
                </ol>
            
    </div>)
}


// export default [Tutors, Classes];
// export default Classes;
export default Tutors;

