import React, {useState} from "react"

const BodyHeader = ({title}) => {
    // set up state for the likes
    // const [title, setTitle] =useState(props.title);
    // setTitle(props.title)
    console.log(title)
    
    return (
    <div className="body-header">{title.title}</div>
    );
};

export default BodyHeader;