const Skills = () => {
    const skills = [
        'Full-Stack Web Development',
        'API Development',
        'Software Development Life Cycle',
        'Git',
        'HTML',
        'CSS',
        'JavaScript',
        'React js',
        'PHP',
        'Laravel Framework',
        'SQL',
        'MySQL',
        'Database Management System',
    ];

    return (
        <div className="my-16">
            <h1 className="text-center text-4xl mb-10">Skills</h1>
            <div className="flex flex-wrap">
                {skills.map((skill) => {
                    return (
                        <span
                            key={Math.random()}
                            className="rounded-full px-4 m-2 bg-blue-600 text-white p-2 rounded leading-none flex items-center"
                        >
                            {skill}
                        </span>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
