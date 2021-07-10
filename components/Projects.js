import Image from 'next/image';

export default function Projects() {
    const projects = [
        {
            title: 'Information Systems Blog',
            image: '/image/blog-icon.png',
            description: 'Blog for information systems students contains plan study details, courses description, advices, tips, and resources.',
            link: 'https://infosystems.blog/',
        },
        {
            title: 'Hide Twitter Trends',
            image: '/image/hide_twitter_trends.png',
            description: 'Hide Twitter (Trending now, Who to follow, Topics to follow) taps.',
            link: 'https://chrome.google.com/webstore/detail/hide-twitter-trends/lapmncfnibdclongbkleadoicnkhknia?hl=en&authuser=0',
        },
        {
            title: 'Online JWT Builder',
            description: 'Web page used to generate fake, but valid, JSON Web Tokens.',
            link: 'https://online-jwt-builder.herokuapp.com/',
        },
        {
            title: 'RTL Markdown Editor Web',
            image: '/image/rtl_markdown_editor_web.svg',
            description: 'Markdown editor for rtl language.',
            link: 'https://rtl-markdown-editor.vercel.app/',
        },
        {
            title: 'Tailwindcss Typography RTL',
            image: '/image/tailwindcss_typography_rtl.png',
            description: 'Add RTL support for tailwindcss-typography plugin.',
            link: 'https://www.npmjs.com/package/@devmoath/tailwindcss-typography-rtl',
        },
        {
            title: 'Arabic numbers to English numbers',
            description: 'Convert Arabic numbers to English numbers.',
            link: 'https://www.npmjs.com/package/@devmoath/ar-num-to-en-num',
        },
        {
            title: 'Password Generator CLI',
            description: 'Node.js cli to generate passwords.',
            link: 'https://www.npmjs.com/package/@devmoath/pass',
        },
        {
            title: 'Password Generator App',
            image: '/image/password_generator_app.png',
            description: 'Password generator app to give you strong password.',
            link: 'https://password-generator-app-ten.vercel.app',
        },
        {
            title: 'Copy Text',
            description: 'Copy text to user clipboard.',
            link: 'https://www.npmjs.com/package/@devmoath/copy-text',
        },
    ];

    return (
        <div className="py-16">
            <h1 className="mb-10 text-center text-4xl">Projects</h1>
            {projects.map((project) => {
                return (
                    <div className="my-7">
                        <div>
                            <div className="flex gap-4">
                                {(project.image && (
                                    <Image alt="" className="rounded-lg" loading="lazy" width="75" height="75" layout="fixed" src={project.image} />
                                )) || (
                                    <div className="w-[75px] h-[75px] bg-gray-600 rounded-lg flex">
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
                        <div className="divider" />
                    </div>
                );
            })}
        </div>
    );
}
