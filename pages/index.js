import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import { Component } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Preview from '../components/Preview';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Projects from '../components/Projects';
import Container from 'react-bootstrap/Container';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
    },
});

class Index extends Component {
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
            <ThemeProvider theme={theme}>
                <Container fluid>
                    <Row className="vh-100">
                        <Col className="h-100 position-relative px-0 left-side" lg="4">
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
            </ThemeProvider>
        );
    }
}

export default Index;
