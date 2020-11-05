import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "../scss/moath.scss";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Projects from "./Projects";
import axios from "axios";
import Particles from "react-particles-js";
import particles from "./config/particles.json";

class Home extends Component {

    state = {
        projects: null,
        failed: false,
    };

    componentDidMount() {
        axios.get("https://api.github.com/users/devmoath/repos?sort=updated").then(response => {
            const projects = response.data.slice(0, 5);
            this.setState({projects: projects});
        }).catch(e => {
            this.setState({failed: true});
            console.error(e);
        });
    }

    render() {

        const {projects, failed} = this.state;

        return (
            <Container fluid>
                <Row className="vh-100">
                    <Col className="h-100 position-relative px-0"
                         lg="4">
                        <Particles className="position-absolute bg-secondary w-100 h-100 particles bg-transparent"
                                   params={particles}/>
                        <Preview/>
                    </Col>
                    <Col lg="8"
                         className="bg-dark right-side">
                        <Education/>
                        <hr className="border-light"/>
                        <Experience/>
                        <hr className="border-light"/>
                        <Skills/>
                        <hr className="border-light"/>
                        <Achievements/>
                        <hr className="border-light"/>
                        <Projects projects={projects}
                                  failed={failed}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
