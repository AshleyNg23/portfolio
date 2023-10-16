import { Col } from "react-bootstrap";
export const VideoCard = ({ title, description, imgUrl, vidUrl}) => {
    return (
        <Col sm={8} md={6}>
            <div className="vid-imgbox">
                <a href={vidUrl} target="_blank">
                    <img src={imgUrl} alt="Video Thumbnail"/>
                    <div className="vid-text">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    )
}