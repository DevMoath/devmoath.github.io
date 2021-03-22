import Image from 'next/image';

const Education = () => (
    <div className="my-16">
        <h1 className="text-center text-4xl mb-10">Education</h1>
        <div className="flex">
            <div>
                <Image
                    alt="King Saud University Logo"
                    className="rounded-lg"
                    loading="lazy"
                    width="150"
                    height="150"
                    src="/image/school.jpg"
                />
            </div>
            <div className="ml-7">
                <h2 className="text-2xl mb-2">
                    King Saud University | <small>2015 - 2019</small>
                </h2>
                <p className="text-lg">Bachelor Degree in Information Systems</p>
                <blockquote className="border-l-4 py-3 pl-4 mt-4">
                    <p>
                        The graduation project is a website that will provide people with historical knowledge in visual
                        manner, and allow them to interactive with it.
                    </p>
                    <footer className="mt-2">
                        <a
                            href="https://drive.google.com/file/d/1NyIVErtF2En3ggxuf6pTAlwgfDQyxsd5/view"
                            className="text-blue-500 px-1 no-underline hover:underline"
                        >
                            <cite title="Project Presentation">Project Presentation</cite>
                        </a>
                    </footer>
                </blockquote>
            </div>
        </div>
    </div>
);

export default Education;
