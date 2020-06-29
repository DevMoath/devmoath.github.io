import React from "react";
import icon from "../image/blog-icon.png";
import moment from "moment";

const Achievements = () => {
    return (
        <section className="py-4">
            <h1 className="text-center text-light">Achievements</h1>
            <div className="row mt-5 ml-1">
                <img alt="Information Systems Blog Logo"
                     className="rounded float-left bg-white img-60"
                     src={icon}/>
                <h4 className="ml-3 text-light my-auto text-capitalize">
                    Information Systems Blog<br/>
                    <small className="text-muted"
                           id="blog_created">{moment("20200115", "YYYYMMDD").fromNow()}</small>
                    <small className="text-muted"> - present</small>
                </h4>
            </div>
            <div className="d-flex mx-auto py-0">
                <div className="col-auto mr-0 pr-0 flex-column d-flex">
                    <div className="row">
                        <div className="col">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                    <h4 className="mx-2 my-0">
                        <span className="badge badge-pill bg-dark">&nbsp;</span>
                    </h4>
                    <div className="row h-100">
                        <div className="col">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                </div>
                <div className="col-auto ml-0 pl-0 flex-fill">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body pl-2 pr-0">
                            <blockquote className="blockquote text-light rounded pr-0">
                                <p className="my-auto">
                                    Blog for information systems students (King Saud University) contains plan study,
                                    courses description, advices, tips, resources and anything could help the students
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
