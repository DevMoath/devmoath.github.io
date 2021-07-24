interface Project {
    title: string;
    image?: string;
    description: string;
    link: string;
}

const projects: Array<Project> = [
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

export default projects;
