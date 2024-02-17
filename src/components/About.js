import {Container, Row, Col} from "react-bootstrap";
import moonImg from '../assets/img/moonBun.png'

export const About = () => {
    return (
        <section className ="about" id="about">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={6}>
                        <img src={moonImg} alt="Moon Bunny Img" />
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <div className="about-box">
                        <span className="tagline"> About Me! </span>
                        <p> Hello!! I'm a software engineer exploring
                            Software Development, and Project Management as future venues in my career!
                            I started with making videos on my free time where I would design my own thumbnails, (using paint!!!)
                            and from there I started graphic designing!
                            Right now im preparing for my summer internship!
                        </p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}