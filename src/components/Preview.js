import React, {useEffect, useRef, useState} from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Popper from "@material-ui/core/Popper";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

const Preview = () => {
    
    const elRef = useRef(null);
    
    const [open, setOpen] = useState(false);
    
    useEffect(() => setOpen(true), []);
    
    return (
        <div className="px-3 preview h-100 d-flex align-items-center">
            <div>
                <h1 className="my-4">Moath Alhajri</h1>
                <p className="my-4">
                    B.S. in Information Systems from <a href="https://twitter.com/_KSU">@_KSU</a>,
                    Full-Stack Developer, Clean Code Enthusiast, Software Developer & Analyst
                    at <a href="https://twitter.com/TamkeenTech">@TamkeenTech</a>, Creator
                    of <a href="https://infosystems.blog">infosystems.blog</a>
                </p>
                <div className="links d-flex justify-content-center my-4">
                    <a href="https://twitter.com/Dev_Moath">
                        <em className="fab fa-twitter"/>
                    </a>
                    <a href="https://github.com/DevMoath">
                        <em className="fab fa-github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/moath-alhajri/">
                        <em className="fab fa-linkedin"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCm-qdl6K8w6hvxFwgO7u5qw">
                        <em className="fab fa-youtube"/>
                    </a>
                </div>
                <div className="d-flex justify-content-center">
                    <Popper open={open}
                            anchorEl={elRef.current}
                            placement="bottom"
                            transition>
                        {
                            ({TransitionProps}) => (
                                <Fade {...TransitionProps}>
                                    <Paper className="shadow rounded-custom mt-2">
                                        <Typography className="p-3">Moath.Alhajrii@gmail.com</Typography>
                                    </Paper>
                                </Fade>
                            )
                        }
                    </Popper>
                    <Button variant="contained"
                            ref={elRef}
                            color="primary"
                            size="large"
                            className="rounded-custom"
                            href="mailto:Moath.alhajrii@gmail.com?subject=Website%20Inquiry&body=Hello">
                        Say Hello
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Preview;
