import React from "react";
import icon from "../image/blog-icon.png";
import moment from "moment";
import {Row} from "react-bootstrap";
import TimeLine from "./layouts/TimeLine";

const Achievements = () => (
    <div className="py-4">
        <h1 className="text-center text-light">Achievements</h1>
        <Row className="mt-5 ml-1">
            <img alt="Information Systems Blog Logo"
                 className="rounded-custom float-left bg-white"
                 loading="lazy"
                 width="60"
                 height="60"
                 src={icon}/>
            <h4 className="ml-2 text-light my-auto text-capitalize">
                Information Systems Blog <br/>
                <small className="text-muted">
                    {moment("20200115", "YYYYMMDD").fromNow()} - present
                </small>
            </h4>
        </Row>
        <TimeLine variant="dark">
            <blockquote className="text-light rounded pr-0 mt-3">
                <p className="my-auto">
                    Blog for information systems students (King Saud University) contains plan study, courses
                    description, advices, tips, resources and anything could help the students
                </p>
                <footer className="blockquote-footer mt-2">
                    <a href="https://infosystems.blog/">
                        <cite className="font-weight-bolder"
                              title="visit the blog">
                            Visit the blog
                        </cite>
                    </a>
                </footer>
            </blockquote>
        </TimeLine>
    </div>
);

export default Achievements;
