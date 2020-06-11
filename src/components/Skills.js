import React from "react";
import {Badge} from "react-bootstrap";
import {v4 as uuid} from "uuid";

const Skills = () => {

    const skills = [
        "Full-Stack Development", "Software Development Life Cycle", "API Development", "HTML", "CSS", "JavaScript",
        "React js", "PHP", "Laravel Framework", "SQL", "MySQL", "Java", "Git", "Database Management System"
    ];

    return (
        <section className="py-4">
            <h1 className="text-center text-light">Skills</h1>
            <div className="col-lg-11 mx-auto px-0 skills">
                <div>
                    {skills.map(skill => <Badge variant="light" key={uuid()} pill>{skill}</Badge>)}
                </div>
            </div>
        </section>
    );
};

export default Skills;
