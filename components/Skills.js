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
        <div className="py-16">
            <h1 className="mb-10 text-center text-4xl">Skills</h1>
            <div className="flex flex-wrap">
                {skills.map((skill) => {
                    return (
                        <span
                            key={Math.random()}
                            className="flex items-center m-2 p-2 px-4 text-white leading-none bg-blue-600 rounded rounded-full"
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
