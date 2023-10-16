import { Col } from "react-bootstrap";
export const DesignCard = ({ title, description, imgUrl}) => {
    return (
        <Col sm={8} md={6}>
            <div className="des-imgbox">
                <img src={imgUrl} alt="Design"/>
                <div className="des-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}