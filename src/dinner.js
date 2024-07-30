import React from "react";



function Dinner(props) {
    return (<div>
            <h3>On {props.day} we are arranging a dinner: we serve  </h3>
                 <ol>
                    <li><h4>{props.mainDish}</h4></li>
                    <li><h4>{props.sweetDish}</h4></li>
                    <li><h4>{props.drinks}</h4></li>
            </ol>
            <br />
            <hr />
       
            
                </div>);
}

export default Dinner;
