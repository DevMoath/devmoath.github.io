import Image from 'next/image';

const Achievements = () => (
    <div className="py-16">
        <h1 className="text-center text-4xl mb-10">Achievements</h1>
        <div>
            <div className="flex gap-4">
                <div className="flex-shrink">
                    <Image
                        alt="Information Systems Blog Logo"
                        className="rounded-lg"
                        loading="lazy"
                        width="75"
                        height="75"
                        layout="fixed"
                        src="/image/blog-icon.png"
                    />
                </div>
                <div>
                    <h2 className="text-2xl mb-2">
                        Information Systems Blog | <small>Jan 2020 - present</small>
                    </h2>
                    <p className="text-lg">Bachelor Degree in Information Systems</p>
                </div>
            </div>
            <blockquote className="border-l-4 py-3 pl-4 mt-4">
                <p>
                    Blog for information systems students (King Saud University) contains plan study details, courses
                    description, advices, tips, resources and may contains other things could help the students.
                </p>
            </blockquote>

            <div className="mt-5">
                <a
                    className="focus:outline-none text-white lg:inline-block block py-2.5 px-5 mx-1 my-2 text-center rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                    href="https://infosystems.blog/"
                >
                    Visit the blog
                </a>
                <a
                    className="focus:outline-none text-white lg:inline-block block py-2.5 px-5 mx-1 my-2 text-center rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                    href="https://twitter.com/i/events/1343637900743860224"
                >
                    Tweets about the blog
                </a>
            </div>
        </div>
    </div>
);

export default Achievements;
