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
        <div className="py-4">
            <h1 className="text-center text-light">Skills</h1>
            <div className="mx-3 mx-xl-5 mx-lg-4">
                <div className="mx-auto">
                    {skills.map((skill) => {
                        return (
                            <span
                                key={Math.random()}
                                className="my-2 mr-1 py-2 px-3 badge badge-primary badge-pill"
                                style={{ fontSize: 'large' }}
                            >
                                {skill}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
