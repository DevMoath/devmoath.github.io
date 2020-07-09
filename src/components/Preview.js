import React from "react";
import icon from "../image/icon.jpg";
import {OverlayTrigger, Popover} from "react-bootstrap";

const Preview = () => {
    
    const popover = (
        <Popover className="shadow"
                 id="popover-basic">
            <Popover.Title as="h3">Email Address</Popover.Title>
            <Popover.Content>
                <h6 className="mt-1">Moath.Alhajrii@gmail.com</h6>
            </Popover.Content>
        </Popover>
    );
    
    return (
        <div className="px-3 z-index-1">
            <img alt="Moath Alhajri Logo"
                 className="rounded icon-200"
                 src={icon}/>
            <h1 className="my-4">Moath Alhajri</h1>
            <p className="my-4 text-left font-18">
                B.S. in Information Systems from <a href="https://twitter.com/_KSU">@_KSU</a>,
                Full-Stack Developer, Clean Code Enthusiast, Software Developer & Analyst at
                <a href="https://twitter.com/TamkeenTech"
                   className="ml-1">@TamkeenTech</a>, Creator of
                <a href="https://infosystems.blog"
                   className="ml-1">infosystems.blog</a>
            </p>
            <div className="links d-flex justify-content-center my-4">
                <a href="https://twitter.com/Dev_Moath"
                   className="mx-3">
                    <em className="fab fa-twitter icon"/>
                </a>
                <a href="https://github.com/DevMoath"
                   className="mx-3">
                    <em className="fab fa-github icon"/>
                </a>
                <a href="https://www.linkedin.com/in/moath-alhajri/"
                   className="mx-3">
                    <em className="fab fa-linkedin icon"/>
                </a>
                <a href="https://www.youtube.com/channel/UCm-qdl6K8w6hvxFwgO7u5qw"
                   className="mx-3">
                    <em className="fab fa-youtube icon"/>
                </a>
            </div>
            <div className="d-flex justify-content-center my-4">
                <OverlayTrigger placement="bottom"
                                trigger=""
                                defaultShow={true}
                                overlay={popover}>
                    <a href="mailto:Moath.alhajrii@gmail.com?subject=Website%20Inquiry&body=Hello"
                       className="btn btn-primary btn-lg rounded-pill px-5 py-2">
                        Say Hello
                    </a>
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default Preview;
