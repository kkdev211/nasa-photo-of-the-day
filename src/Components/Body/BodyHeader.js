import React, {useState} from "react"
// import { Jumbotron, Container} from "reactstrap;"

const BodyHeader = ({title}) => {
    // set up state for the likes
    // const [title, setTitle] =useState(props.title);
    // setTitle(props.title)
    console.log(title)
    
    return (
    <div>
        {/* <Jumbotron fluid>
            <Container fluid> */}
                <h1 className="display-3"> NASA Photo of the Day</h1>
                <p className="BodyHeader">{title.title}</p>
            {/* </Container>
        </Jumbotron> */}
    </div>
    );
};

export default BodyHeader;