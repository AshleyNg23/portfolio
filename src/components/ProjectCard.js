import { Col } from "react-bootstrap";
export const ProjectCard = ({ title, description, imgUrl, pageUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbox">
                <a href={pageUrl} target="_blank">
                <img src={imgUrl} alt="Project Thumbnail"/>
                <div className="proj-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                </a>
            </div>
        </Col>
    )
}