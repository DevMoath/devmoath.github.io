import React from "react";
import Chip from "@material-ui/core/Chip";

const Skills = () => {
    
    const skills = [
        "Full-Stack Development", "API Development", "Software Development Life Cycle", "Git", "HTML", "CSS",
        "JavaScript", "React js", "PHP", "Laravel Framework", "SQL", "MySQL", "Java", "Database Management System"
    ];
    
    return (
        <div className="py-4">
            <h1 className="text-center text-light">Skills</h1>
            {skills.map(skill => <Chip label={skill}
                                       key={Math.random()}
                                       className="my-2 mr-1 text-light"
                                       color="primary"/>)}
        </div>
    );
};

export default Skills;
