import React from "react";
import company from "../image/company.jpeg";
import moment from "moment";

const Experience = () => {
    return (
        <section className="py-4">
            <h1 className="text-center text-light">Experience</h1>
            <div className="row mt-5 ml-1">
                <img alt="Tamkeen Technologies Logo" className="rounded float-left img-60" src={company}/>
                <h4 className="ml-3 text-light my-auto text-capitalize">
                    Tamkeen Technologies <br/>
                    <small className="text-muted">{moment("20191006", "YYYYMMDD").fromNow(true)}</small>
                </h4>
            </div>
            <div className="d-flex mx-auto py-0">
                <div className="col-auto mr-0 pr-0 flex-column d-flex">
                    <div className="row">
                        <div className="col">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                    <h4 className="mx-2 my-0">
                        <span className="badge badge-pill bg-light">&nbsp;</span>
                    </h4>
                    <div className="row h-100">
                        <div className="col">&nbsp;</div>
                        <div className="col">&nbsp;</div>
                    </div>
                </div>
                <div className="col-auto ml-0 pl-0 flex-fill">
                    <div className="card border-0 bg-transparent">
                        <div className="card-body pl-2">
                            <h4 className="card-title text-primary text-capitalize">
                                Software Developer & Analyst <br/>
                                <small className="text-muted">Full Time Job</small>
                            </h4>
                            <blockquote className="blockquote text-light rounded">
                                <ul className="list-unstyled text-light">
                                    <li className="mb-2">Full-Stack Developer</li>
                                    <li className="mb-2">Laravel Developer</li>
                                    <li className="mb-2">React Developer</li>
                                    <li className="mb-2">APIs Developer</li>
                                </ul>
                                <hr className="border-light"/>
                                I have collaborate in:
                                <ul className="pl-4 mb-0">
                                    <li className="my-2">
                                        Jira Integration REST APIs for Complaints (e.g. Musaned, eTawtheeq etc.)
                                    </li>
                                    <li>Strategy & Performance Management System</li>
                                </ul>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
