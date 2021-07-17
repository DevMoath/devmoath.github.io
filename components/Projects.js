import Image from 'next/image';
import projects from '@data/projects';
import classNames from 'classnames';

export default function Projects() {
    const length = projects.length - 1;

    return (
        <>
            {projects.map((project, index) => {
                return (
                    <div className={classNames('mt-10 pb-10', index < length && 'border-b-2 mb-10')} key={Math.random()}>
                        <div className="flex gap-4">
                            {(project.image && (
                                <Image
                                    alt="project logo"
                                    className="rounded-lg"
                                    loading="lazy"
                                    width="75"
                                    height="75"
                                    layout="fixed"
                                    src={project.image}
                                />
                            )) || (
                                <div className="w-[75px] h-[75px] min-w-[75px] min-h-[75px] bg-gray-600 rounded-lg flex">
                                    <span className="m-auto">no logo</span>
                                </div>
                            )}
                            <h2 className="text-2xl my-auto">{project.title}</h2>
                        </div>
                        <blockquote className="mt-4 pl-4 py-3 border-l-4">
                            <p>{project.description}</p>
                        </blockquote>
                        {project.link && (
                            <div className="mt-5">
                                <a className="btn" href={project.link}>
                                    Visit the project
                                </a>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}
