import Image from 'next/image';

export default function Projects() {
    return (
        <div className="py-16">
            <h1 className="mb-10 text-center text-4xl">Projects</h1>
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
                        <h2 className="mb-2 text-2xl">
                            Information Systems Blog | <small>Jan 2020 - present</small>
                        </h2>
                        <p className="text-lg">Bachelor Degree in Information Systems</p>
                    </div>
                </div>
                <blockquote className="mt-4 pl-4 py-3 border-l-4">
                    <p>
                        Blog for information systems students (King Saud University) contains plan study details,
                        courses description, advices, tips, resources and may contains other things could help the
                        students.
                    </p>
                </blockquote>

                <div className="mt-5">
                    <a
                        className="block mx-1 my-2 px-5 py-2.5 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none hover:shadow-lg lg:inline-block"
                        href="https://infosystems.blog/"
                    >
                        Visit the blog
                    </a>
                    <a
                        className="block mx-1 my-2 px-5 py-2.5 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none hover:shadow-lg lg:inline-block"
                        href="https://twitter.com/i/events/1343637900743860224"
                    >
                        Tweets about the blog
                    </a>
                </div>
            </div>
        </div>
    );
}
