import React from "react";
import Chip from "@material-ui/core/Chip";
import {Container} from "react-bootstrap";

const Skills = () => {

    const skills = [
        "Full-Stack Development", "API Development", "Software Development Life Cycle", "Git", "HTML", "CSS",
        "JavaScript", "React js", "PHP", "Laravel Framework", "SQL", "MySQL", "Database Management System",
    ];

    return (
        <div className="py-4">
            <h1 className="text-center text-light">Skills</h1>
            <Container>
                {skills.map(skill => <Chip label={skill}
                                           key={Math.random()}
                                           className="my-2 mr-1 text-light"
                                           color="primary"/>)}
            </Container>
        </div>
    );
};

export default Skills;
