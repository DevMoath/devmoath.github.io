import React, { useEffect, useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import CopyToClipboard from 'react-copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const Preview = () => {
    const elRef = useRef(null);

    const [open, setOpen] = useState(false);

    const [email] = useState('Moath.Alhajrii@gmail.com');
    const [copied, setCopied] = useState(false);

    useEffect(() => setOpen(true), []);

    const onCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
    };

    return (
        <div className="px-3 preview h-100 d-flex align-items-center">
            <div>
                <h1 className="my-4">Moath Alhajri</h1>
                <p className="my-4">
                    B.S. in Information Systems from <a href="https://twitter.com/_KSU">@_KSU</a>, Full-Stack Developer,
                    Clean Code Enthusiast, Software Developer & Analyst at{' '}
                    <a href="https://twitter.com/TamkeenTech">@TamkeenTech</a>, Creator of{' '}
                    <a href="https://infosystems.blog">infosystems.blog</a>
                </p>
                <div className="links d-flex justify-content-center my-4">
                    <a href="https://twitter.com/Dev_Moath" className="mx-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-twitter"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#00abfb"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </a>
                    <a href="https://github.com/DevMoath" className="mx-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-github"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#597e8d"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/moath-alhajri/" className="mx-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-linkedin"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#00abfb"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                            <line x1="12" y1="16" x2="12" y2="11" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCm-qdl6K8w6hvxFwgO7u5qw" className="mx-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-youtube"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ff2825"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="5" width="18" height="14" rx="4" />
                            <path d="M10 9l5 3l-5 3z" />
                        </svg>
                    </a>
                </div>
                <div className="d-flex justify-content-center">
                    <Popper
                        open={open}
                        anchorEl={elRef.current}
                        placement="bottom"
                        disablePortal={true}
                        modifiers={{ flip: { enabled: false } }}
                        transition
                    >
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps}>
                                <Paper className="shadow rounded-custom mt-2">
                                    <Typography className="px-3 py-2">
                                        {email}
                                        <Tooltip title="Copy">
                                            <CopyToClipboard onCopy={onCopy} text={email}>
                                                <IconButton color="primary">
                                                    {copied ? (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-check"
                                                            width="35"
                                                            height="35"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="#00abfb"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M5 12l5 5l10 -10" />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-clipboard"
                                                            width="35"
                                                            height="35"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="#00abfb"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                                                            <rect x="9" y="3" width="6" height="4" rx="2" />
                                                        </svg>
                                                    )}
                                                </IconButton>
                                            </CopyToClipboard>
                                        </Tooltip>
                                    </Typography>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                    <Button
                        variant="contained"
                        ref={elRef}
                        color="primary"
                        size="large"
                        className="rounded-custom btn-visit"
                        href="mailto:Moath.alhajrii@gmail.com?subject=Website%20Inquiry&body=Hello"
                    >
                        Say Hello
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Preview;
