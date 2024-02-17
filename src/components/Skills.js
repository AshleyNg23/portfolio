import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import programIcon from '../assets/img/programming.png';
import dataIcon from '../assets/img/DataStructures.png';
import designIcon from '../assets/img/UIDesign.png';
import brandIcon from '../assets/img/BrandIdentity.png';
import webIcon from '../assets/img/web dev.png';
import projIcon from '../assets/img/projectmanage.png';

export const Skills = () => {
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Below are my skills! These are just a few of the categories of what I'm well-versed in and for more details about how I obtained
                                these skills, feel free to check out my resume!
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={designIcon} alt="Skill" />
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div className="item">
                                    <img src={webIcon} alt="Skill" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={programIcon} alt="Skill" />
                                    <h5>Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={projIcon} alt="Skill" />
                                    <h5>Project Management</h5>
                                </div>
                                <div className="item">
                                    <img src={brandIcon} alt="Skills" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={dataIcon} alt="Skills" />
                                    <h5>Data Structures & Algorithm Analysis</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}