import React, { useState, useEffect } from "react";
import axios from "axios";
import BodyHeader from "./BodyHeader"
import BodyAbout from "./BodyAbout"


export default function Body() {
    const [image, setImages] = useState([]);
    
    useEffect(() => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => console.log(response))
        .catch(error => console.log(error))
        });

        return <div></div>
    };

    