import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Education from './Education';
import Experience from './Experience';
import Preview from './Preview';
import Skills from './Skills';
import Achievements from './Achievements';
import Projects from './Projects';
import axios from 'axios';

class Home extends Component {
    state = {
        projects: null,
        failed: false,
        stars: null,
        starsFailed: false,
    };

    componentDidMount() {
        axios
            .get('https://api.github.com/users/devmoath/repos?sort=updated&per_page=5')
            .then((response) => this.setState({ projects: response.data }))
            .catch((e) => {
                this.setState({ failed: true });
                console.error(e);
            });

        axios
            .get('https://api.github.com/users/devmoath/starred?per_page=5')
            .then((response) => this.setState({ stars: response.data }))
            .catch((e) => {
                this.setState({ starsFailed: true });
                console.error(e);
            });
    }

    render() {
        const { projects, failed, stars, starsFailed } = this.state;

        return (
            <Container fluid>
                <Row className="vh-100">
                    <Col className="h-100 position-relative px-0" lg="4">
                        <Preview />
                    </Col>
                    <Col lg="8" className="bg-dark right-side">
                        <Education />
                        <hr className="border-light" />
                        <Experience />
                        <hr className="border-light" />
                        <Skills />
                        <hr className="border-light" />
                        <Achievements />
                        <hr className="border-light" />
                        <Projects
                            title="Open Source Projects"
                            more="https://github.com/DevMoath"
                            projects={projects}
                            failed={failed}
                        />
                        <hr className="border-light" />
                        <Projects
                            title="Open Source Projects I Liked"
                            more="https://github.com/DevMoath?tab=stars"
                            projects={stars}
                            failed={starsFailed}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
