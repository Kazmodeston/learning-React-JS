import React from "react";

function TweetComponent({name,message,likes}){


    return(

        <div className="tweet">
            <h2>{name}</h2>

            <p>{message}</p>

            <h3>{likes}</h3>
        </div>
    )
}

export default TweetComponent