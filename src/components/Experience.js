import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import ashLogo from "../assets/img/ASH logo transparent black.png";
import hackLogo from "../assets/img/hack-at-uci-logo_white.png";
import wicsLogo from "../assets/img/WICS logo (white).png";
import ucioit from "../assets/img/ucioit.jpg";
import wtplogo from "../assets/img/wtp_winter_logo.png";


export const Experience = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="exp" id="experience">
            <Container>
                <Row>
                    <Col>
                        <div className="exp-box">
                            <h2>
                                Experience
                            </h2>
                            <p>Check out various organizations and clubs that I've been involved in and my position. Hopefully I'll have many more to come!</p>
                            <Carousel responsive={responsive} infinite={true} className="exp-slider">
                                <div className="item">
                                    <img src={ucioit} alt="HackUCI" />
                                    <h5>UC Irvine OIT</h5>
                                    <h6>Student Web Developer</h6>
                                </div>
                                <div className="item">
                                    <img src={wtplogo} alt="HackUCI" />
                                    <h5>We the Pixies</h5>
                                    <h6>Web Developer</h6>
                                </div>
                                <div className="item">
                                    <img src={hackLogo} alt="HackUCI" />
                                    <h5>Hack at UCI</h5>
                                    <h6>Graphics Organizer</h6>
                                </div>
                                <div className="item">
                                    <img src={wicsLogo} alt="WICS" />
                                    <h5>Women in Informational Computer Sciences</h5>
                                    <h6>Graphic Designer</h6>
                                </div>
                                <div className="item">
                                    <img src={ashLogo} alt="ASH" />
                                    <h5>Anteaters Sprinkling Happiness</h5>
                                    <h6>Historian & Social Media Chair</h6>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}