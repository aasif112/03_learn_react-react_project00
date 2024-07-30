import React from "react";



function ReactProjects(props) {
    return (<div>
            <h2>Today we are arranging a dinner: we serve  </h2>
                 <ol>
                    <li><h3>{props.mainDish}</h3></li>
                    <li><h3>{props.sweetDish}</h3></li>
                    <li><h3>{props.drinks}</h3></li>
            </ol>
       
            
                </div>);
}

export default ReactProjects;
