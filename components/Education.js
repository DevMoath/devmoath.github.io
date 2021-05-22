import Image from 'next/image';

const Education = () => (
    <div className="py-16">
        <h1 className="mb-10 text-center text-4xl">Education</h1>
        <div>
            <div className="flex gap-4">
                <div className="flex-shrink">
                    <Image
                        alt="King Saud University Logo"
                        className="rounded-lg"
                        loading="lazy"
                        width="75"
                        height="75"
                        layout="fixed"
                        src="/image/school.jpg"
                    />
                </div>
                <div>
                    <h2 className="mb-2 text-2xl">
                        King Saud University | <small>2015 - 2019</small>
                    </h2>
                    <p className="text-lg">Bachelor Degree in Information Systems</p>
                </div>
            </div>
            <blockquote className="mt-4 pl-4 py-3 border-l-4">
                <p>
                    The graduation project is a website that will provide people with historical knowledge in visual
                    manner, and allow them to interactive with it.
                </p>
                <footer className="mt-2">
                    <a
                        href="https://drive.google.com/file/d/1NyIVErtF2En3ggxuf6pTAlwgfDQyxsd5/view"
                        className="px-1 text-blue-500 no-underline hover:underline"
                    >
                        <cite title="Project Presentation">Project Presentation</cite>
                    </a>
                </footer>
            </blockquote>
        </div>
    </div>
);

export default Education;
