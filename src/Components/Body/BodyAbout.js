import React, {useState} from "react"

const BodyAbout = props => {
    // set up state for the likes
    const [about, setAbout] =useState(props.about);
    console.log(props.about)
    
    return (
    <div>
        <div className="body-about">{about.explanation}</div>
        <div className="body-about">{about.date}</div>
        <div className="body-about">{about.copyright}</div>           
    </div>
    );
};

export default BodyAbout;