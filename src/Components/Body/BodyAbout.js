import React, {useState} from "react"
import { Card, CardHeader, CardBody, CardText, Col, Container, CardFooter } from "reactstrap";
// import '.BodyAbout.css'

// const
const BodyAbout = ({about}) => {
   
    return (
    <Col lg="12">
       <br/>
    <Container className="container">
        <Card body inverse style={{backgroundColor:"black", borderColor:"white", }}>
            <CardBody width="70%">
                <CardText>{about.explanation}</CardText>
                <CardFooter className="text-muted">{about.date}</CardFooter>
                <CardFooter className="text-muted">{about.copyright}</CardFooter>
            </CardBody>          
        </Card>
        <br/>
    </Container>
    </Col>
    );
};

export default BodyAbout;