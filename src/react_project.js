import React from "react";


function ReactProjects(props) {
    return (<div>
            <h2>After course your are supposed to submit follwing three projects:</h2>
            <ol>
                <li><h3>Project-1</h3></li>
                <li><h3>Project-2</h3></li>
                <li><h3>Project-3</h3></li>
            </ol>
            <h2>The deadline to submit projects is: <u>{props.timePeriod}</u> after classes.</h2>
            <h2>Top 5 perpormers will get internship of <u>{props.intern}</u> </h2>

    </div>);
}

export default ReactProjects;