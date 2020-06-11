import React from "react";
import school from "../image/school.jpg";

const Education = () => {
    return (
        <section className="py-4">
            <h1 className="text-center text-light">Education</h1>
            <div className="row mt-5 ml-1">
                <img alt="King Saud University Logo" className="rounded float-left img-60" src={school}/>
                <h4 className="ml-3 text-light my-auto text-capitalize">
                    King Saud University <br/>
                    <small className="text-muted">2015 - 2019</small>
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
                <div className="col-auto flex-fill pl-0">
                    <div className="card border-0 bg-transparent rounded">
                        <div className="card-body pl-2">
                            <h4 className="card-title text-primary text-capitalize">
                                Bachelor Degree <br/>
                                <small className="text-muted">Information Systems</small>
                            </h4>
                            <blockquote className="blockquote text-light rounded">
                                <p>
                                    The <b>graduation project</b> is a website that will provide people with
                                    historical knowledge in visual manner, and allow them to interactive
                                    with it.
                                </p>
                                <footer className="blockquote-footer mt-2">
                                    <a href="https://drive.google.com/file/d/1NyIVErtF2En3ggxuf6pTAlwgfDQyxsd5/view">
                                        <cite title="Project Presentation">
                                            Project Presentation
                                        </cite>
                                    </a>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center my-4">
                <a className="btn btn-primary btn-lg rounded-pill px-5 py-2"
                   href="https://drive.google.com/file/d/1lndD62dAaS4DrPxEdl_f2iSkDtOZriSP/view">
                    Get my CV
                    <em className="fas fa-external-link-alt fa-fw ml-2"/>
                </a>
            </div>
        </section>
    );
};

export default Education;
