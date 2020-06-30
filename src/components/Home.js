import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "bootstrap";
import "../css/all.scss";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";
import Skills from "./Skills";
import Achievements from "./Achievements";
import Projects from "./Projects";
import Footer from "./Footer";
import axios from "axios";

class Home extends Component {

    state = {
        projects: null,
        failed: false
    };

    componentDidMount() {
        axios.get("https://api.github.com/users/devmoath/repos?sort=updated").then(response => {
            const projects = response.data.filter(item => !item.fork && !item.archived).slice(0, 6);
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
                    <Col lg="4"
                         className="bg-light text-dark d-flex align-items-center h-100">
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
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
