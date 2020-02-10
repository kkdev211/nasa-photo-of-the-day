import React, {useState} from "react"

const BodyHeader = props => {
    // set up state for the likes
    const [title, setTitle] =useState(props.title);
    console.log(props.title)
    
    return (
    <div className="body-header">{title}</div>
    );
};

export default BodyHeader;