import React from 'react';
import Button from '@material-ui/core/Button';
import TimeLine from './layouts/TimeLine';
import LinearProgress from '@material-ui/core/LinearProgress';
import Image from 'next/image';
import Alert from 'react-bootstrap/Alert';

const Projects = ({ projects, failed, title, more }) => {
    return (
        <div className="py-4">
            <h1 className="text-center text-light">{title}</h1>
            <div className="mt-4">
                {failed ? (
                    <div className="d-flex justify-content-center">
                        <Alert variant="danger">Failed fetching projects from GitHub</Alert>
                    </div>
                ) : projects ? (
                    projects.map((project, index) => {
                        const {
                            name,
                            html_url,
                            description,
                            created_at,
                            language,
                            homepage,
                            archived,
                            stargazers_count,
                            forks_count,
                            owner: { login },
                        } = project;

                        let options = { year: 'numeric', month: 'short', day: 'numeric' };

                        let created_at_formatted = new Date(created_at)
                            .toLocaleDateString('en-US', options)
                            .replace(', ' + new Date().getFullYear(), '');

                        return (
                            <TimeLine isLast={false} index={index} key={Math.random()} project>
                                <div className="col-md-8 card-size py-3 px-3 bg-white shadow-sm rounded-custom mb-3 ml-1">
                                    <div className="mb-2 d-flex">
                                        <div className="d-flex align-items-center text-truncate">
                                            <Image
                                                src="/image/repository.svg"
                                                alt="repository"
                                                loading="lazy"
                                                width="30"
                                                height="30"
                                            />
                                            <span className="d-none d-md-inline">
                                                <a href={`https://github.com/${login}`}>{login}</a> /
                                            </span>
                                            <a href={html_url} className="ml-1">
                                                {name}
                                            </a>
                                        </div>
                                        <span className="ml-auto text-muted text-truncate">{created_at_formatted}</span>
                                    </div>
                                    <blockquote className="rounded pl-3 pr-0 mt-3 bg-light ml-1 mb-2">
                                        {description}
                                    </blockquote>
                                    {homepage ? (
                                        <p className="mb-2">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                className="rounded-custom btn-visit"
                                                href={homepage}
                                            >
                                                Visit website
                                            </Button>
                                        </p>
                                    ) : null}
                                    <div className="ml-1 d-flex mt-3">
                                        <span className="text-truncate">
                                            {language && (
                                                <>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`icon icon-tabler icon-tabler-circle mr-1 ${language}`}
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <circle cx="12" cy="12" r="9" />
                                                    </svg>
                                                    {language}
                                                </>
                                            )}
                                        </span>
                                        <div className="mx-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-star mr-1"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="#000000"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                            </svg>
                                            <span>{stargazers_count}</span>
                                        </div>
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-git-fork mr-1"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="#000000"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx="12" cy="18" r="2" />
                                                <circle cx="7" cy="6" r="2" />
                                                <circle cx="17" cy="6" r="2" />
                                                <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
                                                <line x1="12" y1="12" x2="12" y2="16" />
                                            </svg>
                                            <span>{forks_count}</span>
                                        </div>
                                        <span className="text-truncate text-muted ml-auto">
                                            {archived && <kbd className="rounded-pill bg-secondary">Archived</kbd>}
                                        </span>
                                    </div>
                                </div>
                            </TimeLine>
                        );
                    })
                ) : (
                    <div className="d-flex flex-column my-5 w-100">
                        <div className="mx-5 mb-3">
                            <LinearProgress />
                        </div>
                        <h5 className="text-light text-center my-auto ml-3">Loading Projects from GitHub API</h5>
                    </div>
                )}
            </div>
            <div className="d-flex justify-content-start">
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className="rounded-custom btn-visit"
                    href={more}
                >
                    More Projects
                </Button>
            </div>
        </div>
    );
};

export default Projects;
