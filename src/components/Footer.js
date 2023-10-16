import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/logo2.png';
import navIcon2 from '../assets/img/logo3.png';
import navIcon3 from '../assets/img/logo1.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <h2> Ashley Nguyen </h2>
                    </Col>
                    <Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ashleymnguyen302/" target="_blank" ><img src={navIcon1} alt="LinkedIn"/></a>
                            <a href="mailto:ashleynguyen032@gmail.com" target="_blank"><img src={navIcon2} alt="Email"/></a>
                            <a href="https://github.com/AshleyNg23" target="_blank"> <img src={navIcon3} alt="Github"/></a>
                        </div>
                    </Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}