import React from "react";



function Dinner(props) {
    return (<div>
            <h2>On {props.day} we are arranging a dinner: we serve  </h2>
                 <ol>
                    <li><h3>{props.mainDish}</h3></li>
                    <li><h3>{props.sweetDish}</h3></li>
                    <li><h3>{props.drinks}</h3></li>
            </ol>
            <br />
            <hr />
       
            
                </div>);
}

export default Dinner;
