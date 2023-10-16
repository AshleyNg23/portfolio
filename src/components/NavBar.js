import { useState, useEffect } from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import navIcon1 from '../assets/img/logo2.png';
import navIcon2 from '../assets/img/logo3.png';
import navIcon3 from '../assets/img/logo1.png';
import resume from '../assets/Ashley_Nguyen_resume.pdf'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }  else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
            <Navbar.Brand href="#home">Ashley Nguyen</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink ('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink ('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink ('projects')}>Projects</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink ('experience')}>Experience</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/ashleymnguyen302/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="mailto:ashleynguyen032@gmail.com" target="_blank"><img src={navIcon2} alt="Email" /></a>
                        <a href="https://github.com/AshleyNg23" target="_blank"><img src={navIcon3} alt="Github" /></a>
                    </div>
                    <a href={resume} target="_blank"><button><span>My Resume</span></button></a>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}