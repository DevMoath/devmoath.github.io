import MediaPreview from '@components/MediaPreview';
import projects from '@data/projects';

export default function Projects() {
    return (
        <div className="mt-20">
            <h1 className="text-4xl text-black font-bold mb-10">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project) => {
                    return <MediaPreview {...project} key={Math.random()} />;
                })}
            </div>
        </div>
    );
}
