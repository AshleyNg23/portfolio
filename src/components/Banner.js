//import { useState, useEffect } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/profileImg.png';

export const Banner = () => {
    return (
        <section className ="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{"Hi! I'm Ashley Nguyen! "}</h1>
                        <p>I'm a Third year Software Engineering student at UC Irvine and I'm passionate about software development and learning about project management!!</p>
                        <a href="#about"><button> More About Me <ArrowRightCircle size={25} /></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}