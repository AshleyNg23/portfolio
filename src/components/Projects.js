import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import { DesignCard } from "./DesignCard.js";
import { VideoCard } from "./VideoCard.js";
import projImg1 from "../assets/img/ZotHacks.png";
import projImg2 from "../assets/img/ASHWebsite.png";
import projImg3 from "../assets/img/hsdSelect.png";
import desImg1 from "../assets/img/designs/WICS X Design Figma.png";
import desImg2 from "../assets/img/designs/IrisHacks Instagram.png";
import desImg3 from "../assets/img/designs/hacknights_api_ash.png";
import desImg4 from "../assets/img/designs/ashley_nguyen_part1deliverable_instagram.png";
import desImg5 from "../assets/img/designs/icsfair_ig_ash.png";
import desImg6 from "../assets/img/designs/aif2023_ig_ash.png";
import desImg7 from "../assets/img/designs/WICS X CYBER@UCI.png";
import desImg8 from "../assets/img/designs/WICS Study Night.png";
import vidImg1 from "../assets/img/designs/persona5opening.jpg";
import vidImg2 from "../assets/img/designs/nomorewhatifs.png";
import vidImg3 from "../assets/img/designs/genshinteam.png";
import vidImg5 from "../assets/img/designs/aliceTears.png";
import vidImg4 from "../assets/img/designs/playground thumb.png";

export const Projects = () => {

    const projects = [
        {
            title: "ZotHacks",
            description: "Design & Mockups",
            imgUrl: projImg1,
            pageUrl: "https://zothacks.com/",
        },
        {
            title: "ASH Website",
            description: "Design & Development",
            imgUrl: projImg2,
            pageUrl: "https://anteaterssprinklinghappiness.weebly.com/",
        },
        {
            title: "Hello Sweet Days Select",
            description: "Design & Development",
            imgUrl: projImg3,
            pageUrl: "",
        },
    ];

    const designs = [
        {
            title: "WICS x Design Figma Workshop",
            description: "WICS",
            imgUrl: desImg1,
        },
        {
            title: "IrisHacks",
            description: "WICS",
            imgUrl: desImg2,
        },
        {
            title: "Hack at UCI Info Session Meeting",
            description: "Hack at UCI",
            imgUrl: desImg3,
        },
        {
            title: "V-Real Deliverable",
            description: "Hack at UCI Application",
            imgUrl: desImg4,
        },
        {
            title: "Hack at UCI @ ICS Fair",
            description: "Hack at UCI",
            imgUrl: desImg5,
        },
        {
            title: "Hack at UCI @ AIF",
            description: "Hack at UCI",
            imgUrl: desImg6,
        },
        {
            title: "WICS x CyberUCI Intro to CyberSecurity",
            description: "WICS",
            imgUrl: desImg7,
        },
        {
            title: "WICS Study Night Meeting",
            description: "WICS",
            imgUrl: desImg8,
        },
    ];

    const videos = [
        {
            title: "Persona Opening in Animal Crossing",
            description: "Sony Vegas Pro",
            imgUrl: vidImg1,
            vidUrl: "https://youtu.be/Iqhs_L2Cqac?si=kg4JIRsdUQl8ym-N",
        },
        {
            title: "No More What Ifs in Animal Crossing",
            description: "Sony Vegas Pro",
            imgUrl: vidImg2,
            vidUrl: "https://youtu.be/ZDSEQcyESPM?si=b3RWD7NdL4qexhxo",
        },
        {
            title: "Meet my Genshin Team",
            description: "Sony Vegas Pro",
            imgUrl: vidImg3,
            vidUrl: "https://youtu.be/9yexDFpTa_M?si=bN967LLR17E2Qei2",
        },
        {
            title: "Playground (Valorant Edit)",
            description: "OBS Studio & Sony Vegas Pro",
            imgUrl: vidImg4,
            vidUrl: "https://youtu.be/NhJuJBT8fTA",
        },
        {
            title: "Hello Sweet Days Alice Melody",
            description: "Adobe Photoshop & Adobe After Effects",
            imgUrl: vidImg5,
            vidUrl: "https://youtu.be/wih_vQOjnxg?si=u8QW2kkM4G_gKWvE",
        },
    ];
    
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Over the years I've had alot of interests and here are my most recent works and projects! Click on the tabs below 
                        to check out each category and hover over each image for more details! </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Designs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Videos</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    designs.map((design, index) => {
                                        return (
                                            <DesignCard
                                            key={index}
                                            {...design} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                {
                                    videos.map((video, index) => {
                                        return (
                                            <VideoCard
                                            key={index}
                                            {...video} />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}