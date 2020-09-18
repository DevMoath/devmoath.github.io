import React from "react";
import school from "../image/school.jpg";
import Button from "@material-ui/core/Button";
import {Row} from "react-bootstrap";
import TimeLine from "./layouts/TimeLine";

const Education = () => (
    <div className="py-4">
        <h1 className="text-center text-light">Education</h1>
        <Row className="mt-5 ml-1">
            <img alt="King Saud University Logo"
                 className="rounded-custom float-left"
                 loading="lazy"
                 width="60"
                 height="60"
                 src={school}/>
            <h4 className="ml-3 text-light my-auto text-capitalize">
                King Saud University <br/>
                <small className="text-muted">2015 - 2019</small>
            </h4>
        </Row>
        <TimeLine>
            <h4 className="text-primary text-capitalize mt-3">
                Bachelor Degree <br/>
                <small className="text-muted">Information Systems</small>
            </h4>
            <blockquote className="text-light rounded pr-0">
                <p>
                    The graduation project is a website that will provide people with historical knowledge in visual
                    manner, and allow them to interactive with it.
                </p>
                <footer className="blockquote-footer mt-2">
                    <a href="https://drive.google.com/file/d/1NyIVErtF2En3ggxuf6pTAlwgfDQyxsd5/view">
                        <cite title="Project Presentation">
                            Project Presentation
                        </cite>
                    </a>
                </footer>
            </blockquote>
        </TimeLine>
        <div className="d-flex justify-content-center my-3">
            <Button variant="contained"
                    color="primary"
                    size="large"
                    className="rounded-custom btn-visit"
                    href="https://drive.google.com/file/d/1TfOkyxj-bdQT8JglZsFWVMA_4LCUv86h/view?usp=sharing">
                Get my CV
            </Button>
        </div>
    </div>
);

export default Education;
