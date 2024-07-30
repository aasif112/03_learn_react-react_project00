import React from "react";



function Tutors() {
    return    ( <div >
                    <h1>Hello World</h1>
                    <h2>Wellcome to React Learning classes:</h2>
                    <p>Tutor to the course are:</p>
                    <ul>
                    <li>Amir Pinger</li>
                    <li>Mohsin Khalid</li>
                    <li>Ameen Alam</li>
                    <li>Bashir Aziz</li>
                    </ul>               
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

