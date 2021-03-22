import Image from 'next/image';

const Achievements = () => (
    <div className="my-16">
        <h1 className="text-center text-4xl mb-10">Achievements</h1>
        <div className="flex">
            <div>
                <Image
                    alt="Information Systems Blog Logo"
                    className="rounded-lg"
                    loading="lazy"
                    width="125"
                    height="125"
                    src="/image/blog-icon.png"
                />
            </div>
            <div className="ml-7">
                <h2 className="text-2xl mb-2">
                    Information Systems Blog | <small>Jan 2020 - present</small>
                </h2>
                <blockquote className="border-l-4 py-3 pl-4 mt-4">
                    <p>
                        Blog for information systems students (King Saud University) contains plan study, courses
                        description, advices, tips, resources and anything could help the students
                    </p>
                </blockquote>

                <div className="mt-5">
                    <a
                        className="focus:outline-none text-white text-sm py-2.5 px-5 mx-1 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                        href="https://infosystems.blog/"
                    >
                        Visit the blog
                    </a>
                    <a
                        className="focus:outline-none text-white text-sm py-2.5 px-5 mx-1 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                        href="https://twitter.com/i/events/1343637900743860224"
                    >
                        Tweets about the blog
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Achievements;
