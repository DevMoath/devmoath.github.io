import React from "react";
import repository from "../image/repository.svg";
import moment from "moment";
import {v4 as uuid} from "uuid";

const Projects = ({projects}) => {
    return (
        <section className="py-4">
            <h1 className="text-center text-light">Open Source Projects</h1>
            <div className="mt-4">
                {
                    projects ?
                        projects.map((project, index, projects) => {

                            const {name, html_url, description, created_at, updated_at, language, homepage} = project;

                            const isLast = projects.length === index + 1;

                            return (
                                <div className="d-flex mx-auto py-0" key={uuid()}>
                                    <div className="col-auto mx-0 px-0 flex-column d-flex">
                                        <h4 className="m-0">
                                            <span className="badge badge-pill py-2 bg-light border">{index + 1}</span>
                                        </h4>
                                        <div className="row h-100">
                                            <div className={`col ${!isLast ? "border-right" : ""}`}>&nbsp;</div>
                                            <div className="col">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="col-auto mx-0 px-0 flex-fill">
                                        <div
                                            className="col-md-8 card-size py-3 px-3 bg-white shadow-sm rounded mb-3 ml-1">
                                            <div className="mb-2 d-flex">
                                                <div className="ellipsis">
                                                    <img src={repository} alt="repository" width="30" height="30"/>
                                                    <span className="d-none d-md-inline">
                                                        <a href="https://github.com/DevMoath">
                                                            DevMoath
                                                        </a> /
                                                    </span>
                                                    <a href={html_url}> {name}</a>
                                                </div>
                                                <span className="ml-auto text-muted created_at">
                                                    {moment(created_at).format("MMM D, YYYY")}
                                                </span>
                                            </div>
                                            <p className="ml-1 mb-2">{description}</p>
                                            {homepage ?
                                                <p className="ml-2 mb-2"><a href={homepage}>visit website</a></p> : ""}
                                            <div className="ml-1 d-flex">
                                                <span className="text-truncate">
                                                    <i className={`fas fa-circle ${language} fa-fw mr-1`}/>
                                                    {language}
                                                </span>
                                                <span className="text-truncate text-muted ml-auto">
                                                    Updated {moment(updated_at).fromNow()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) :
                        <div className="d-flex flex-column my-5 w-100" id="spinner">
                            <div id="loader"/>
                            <h5 className="text-light text-center my-auto ml-3">
                                Loading Projects from GitHub API
                            </h5>
                        </div>
                }
            </div>
            <div className="d-flex justify-content-center my-4">
                <a href="https://github.com/DevMoath" className="btn btn-primary btn-lg rounded-pill px-5 py-2">
                    More Projects
                    <em className="fas fa-external-link-alt fa-fw ml-2"/>
                </a>
            </div>
        </section>
    );
};

export default Projects;
