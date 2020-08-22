import React from "react";
import company from "../image/company.jpeg";
import {Row} from "react-bootstrap";
import TimeLine from "./layouts/TimeLine";

const Experience = () => (
    <div className="py-4">
        <h1 className="text-center text-light">Experience</h1>
        <Row className="mt-5 ml-1">
            <img alt="Tamkeen Technologies Logo"
                 className="rounded-custom float-left"
                 loading="lazy"
                 width="60"
                 height="60"
                 src={company}/>
            <h4 className="ml-3 text-light my-auto text-capitalize">
                Tamkeen Technologies <br/>
                <small className="text-muted">Oct 2019 – Present</small>
            </h4>
        </Row>
        <TimeLine>
            <h4 className="card-title text-primary text-capitalize mt-3">
                Software Developer & Analyst <br/>
                <small className="text-muted">Full Time Job</small>
            </h4>
            <blockquote className="text-light rounded pr-0">
                <ul className="list-unstyled text-light">
                    <li className="mb-2">Full-Stack Developer</li>
                    <li className="mb-2">Laravel Developer</li>
                    <li className="mb-2">React Developer</li>
                    <li className="mb-2">APIs Developer</li>
                </ul>
                <hr className="border-light"/>
                I have collaborate in:
                <ul className="mb-0">
                    <li className="my-2">
                        Jira Integration REST APIs for Complaints and Support (e.g. Musaned, Ajeer etc.)
                    </li>
                    <li>Strategy & Performance Management System</li>
                </ul>
            </blockquote>
        </TimeLine>
    </div>
);

export default Experience;
