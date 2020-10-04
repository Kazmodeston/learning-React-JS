import React from 'react';
import "./App.css"

function TweetComponent(props){

    return(
        <div className="tweet">
            <h3>{props.name} </h3>

            <p>{props.tweet} </p>

            <h3>Number of likes </h3>
        </div>
    )
}

export default TweetComponent