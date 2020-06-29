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
        projects: null
    };

    componentDidMount() {
        axios.get("https://api.github.com/users/devmoath/repos?sort=updated").then(response => {
            const projects = response.data.filter(item => !item.fork).slice(0, 5);
            this.setState({projects: projects});
        }).catch(e => console.error(e));
    }

    render() {
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
                        <Projects projects={this.state.projects}/>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
