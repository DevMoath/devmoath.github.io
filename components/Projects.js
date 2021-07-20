import projects from '@data/projects';

export default function Projects() {
    return (
        <div className="flex flex-col gap-8 my-10">
            {projects.map((project) => {
                return (
                    <div className="card bordered bg-base-100 shadow-md" key={Math.random()}>
                        <div className="card-body">
                            <div className="card-title">
                                <div className="flex gap-4 mb-5">
                                    {(project.image && (
                                        <img
                                            alt={`${project.title} logo`}
                                            className="rounded-lg w-[60px] h-[60px] min-h-[60px] min-w-[60px] lg:w-[80px] lg:h-[80px] lg:min-w-[80px] lg:min-h-[80px]"
                                            loading="lazy"
                                            src={project.image}
                                        />
                                    )) || (
                                        <div className="w-[60px] h-[60px] min-h-[60px] min-w-[60px] lg:w-[80px] lg:h-[80px] lg:min-w-[80px] lg:min-h-[80px] bg-gray-600 rounded-lg flex">
                                            <span className="m-auto text-xs lg:text-lg">no logo</span>
                                        </div>
                                    )}
                                    <h2 className="text-lg lg:text-2xl my-auto">{project.title}</h2>
                                </div>
                            </div>
                            <p>{project.description}</p>
                            {project.link && (
                                <div className="justify-end card-actions">
                                    <a className="btn" href={project.link}>
                                        Visit the project
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
