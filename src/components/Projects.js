import React from "react";
import repository from "../image/repository.svg";
import {Alert} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TimeLine from "./layouts/TimeLine";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 400,
        margin: "auto",
        fontSize: "large",
    },
}));

const Projects = ({projects, failed}) => {

    const classes = useStyles();

    return (
        <div className="py-4">
            <h1 className="text-center text-light">Open Source Projects</h1>
            <div className="mt-4">
                {
                    failed ?
                        <Alert severity="error"
                               className={classes.root}>
                            Failed fetching projects from GitHub
                        </Alert> : projects
                        ? projects.map((project, index, list) => {

                            const {name, html_url, description, created_at, language, homepage, archived} = project;

                            const isLast = list.length === index + 1;

                            let options = {year: "numeric", month: "short", day: "numeric"};

                            let created_at_formatted = new Date(created_at).toLocaleDateString("en-US", options);

                            return (
                                <TimeLine isLast={isLast}
                                          index={index}
                                          key={Math.random()}
                                          project>
                                    <div className="col-md-8 card-size py-3 px-3 bg-white shadow-sm rounded-custom mb-3 ml-1">
                                        <div className="mb-2 d-flex">
                                            <div className="text-truncate">
                                                <img src={repository}
                                                     alt="repository"
                                                     loading="lazy"
                                                     width="30"
                                                     height="30"/>
                                                <span className="d-none d-md-inline">
                                                    <a href="https://github.com/DevMoath">
                                                        DevMoath
                                                    </a> /
                                                </span>
                                                <a href={html_url}> {name}</a>
                                            </div>
                                            <span className="ml-auto text-muted text-truncate">
                                                {created_at_formatted}
                                            </span>
                                        </div>
                                        <blockquote className="rounded pl-3 pr-0 mt-3 bg-light ml-1 mb-2">
                                            {description}
                                        </blockquote>
                                        {
                                            homepage ?
                                                <p className="mb-2">
                                                    <Button variant="contained"
                                                            color="primary"
                                                            className="rounded-custom btn-visit"
                                                            href={homepage}>
                                                        Visit website
                                                    </Button>
                                                </p> : null
                                        }
                                        {
                                            language || archived ?
                                                <div className="ml-1 d-flex mt-3">
                                                    <span className="text-truncate">
                                                        {
                                                            language ?
                                                                <>
                                                                    <i className={`fas fa-circle ${language} fa-fw mr-1`}/>
                                                                    {language}
                                                                </> : null
                                                        }
                                                    </span>
                                                    <span className="text-truncate text-muted ml-auto">
                                                        {archived ?
                                                            <kbd className="rounded-pill bg-secondary">Archived</kbd> : null}
                                                    </span>
                                                </div> : null
                                        }
                                    </div>
                                </TimeLine>
                            );
                        }) :
                <div className="d-flex flex-column my-5 w-100">
                    <div className="mx-5 mb-3">
                        <LinearProgress/>
                    </div>
                    <h5 className="text-light text-center my-auto ml-3">
                        Loading Projects from GitHub API
                    </h5>
                </div>
                }
            </div>
            <div className="d-flex justify-content-center my-4">
                <Button variant="contained"
                        color="primary"
                        size="large"
                        className="rounded-custom btn-visit"
                        href="https://github.com/DevMoath">
                    More Projects
                </Button>
            </div>
        </div>
    );
};

export default Projects;
