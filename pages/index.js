import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Preview from '../components/Preview';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Container from 'react-bootstrap/Container';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
    },
});

class Index extends Component {
    render() {
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
                        </Col>
                    </Row>
                </Container>
            </ThemeProvider>
        );
    }
}

export default Index;
