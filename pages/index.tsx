import Link from 'next/link';
import Image from 'next/image';
import MediaPreview, { MediaPreviewProps } from '@components/MediaPreview';
import { PlusIcon } from '@node_modules/@heroicons/react/solid';

const projects: Array<MediaPreviewProps> = [
    {
        title: 'Information Systems Blog',
        text: 'Blog for information systems students contains plan study details, courses description, advices, tips, and resources.',
        url: 'https://infosystems.blog',
        image: '/image/infosystems-blog-logo.png',
        type: 'other',
    },
    {
        title: 'Hide Twitter Trends',
        text: 'Hide Twitter (Trending now, Who to follow, Topics to follow) taps.',
        url: 'https://chrome.google.com/webstore/detail/hide-twitter-trends/lapmncfnibdclongbkleadoicnkhknia?hl=en&authuser=0',
        image: '/image/hide-twitter-trends-logo.png',
        type: 'other',
    },
];

const posts: Array<MediaPreviewProps> = [
    {
        title: 'Information Systems Blog',
        text: 'Blog for information systems students contains plan study details, courses description, advices, tips, and resources.',
        url: 'https://infosystems.blog',
        image: '/image/infosystems-blog-logo.png',
        type: 'other',
    },
    {
        title: 'Hide Twitter Trends',
        text: 'Hide Twitter (Trending now, Who to follow, Topics to follow) taps.',
        url: 'https://chrome.google.com/webstore/detail/hide-twitter-trends/lapmncfnibdclongbkleadoicnkhknia?hl=en&authuser=0',
        image: '/image/hide-twitter-trends-logo.png',
        type: 'other',
    },
];

export default function Index() {
    return (
        <div className="container px-4 my-20">
            <div className="grid grid-cols-3 gap-4">
                <h1 className="text-4xl text-black font-bold col-span-4">Hello, I'm Moath</h1>
                <p className="my-8 text-lg leading-8 col-span-4 md:col-span-2">
                    I am Moath Alhajri from Saudi Arabia, I have bachelor degree in Information Systems from{' '}
                    <Link href="/ksu">
                        <a className="text-blue-500 hover:underline">King Saud University</a>
                    </Link>{' '}
                    and I am working now as Software Developer at{' '}
                    <Link href="/work">
                        <a className="text-blue-500 hover:underline">Tamkeen Tech</a>
                    </Link>{' '}
                    company.
                </p>
                <Image
                    src="/image/code_logo.svg"
                    width="200"
                    height="200"
                    layout="fixed"
                    className="rounded-3xl col-span-4 md:col-span-2"
                    alt="my logo"
                />
            </div>
            <div className="mt-20">
                <h1 className="text-4xl text-black font-bold mb-10">Recent Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.map((project) => {
                        return <MediaPreview {...project} key={Math.random()} />;
                    })}
                    <Link href="/projects">
                        <a className="text-gray-800 group block focus:text-blue-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none rounded">
                            <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
                                <div className="absolute inset-0 z-10 flex items-center justify-center transition-colors group-hover:bg-black/20 text-black group-hover:text-blue-500">
                                    <PlusIcon className="w-16" />
                                </div>
                                <div className="h-[120px]" />
                            </div>
                            <h2 className="text-lg font-bold group-hover:text-blue-500 text-center">More Projects</h2>
                        </a>
                    </Link>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-4xl text-black font-bold mb-10">Recent Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {posts.map((post) => {
                        return <MediaPreview {...post} key={Math.random()} />;
                    })}
                    <Link href="/blog">
                        <a className="text-gray-800 group block focus:text-blue-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none rounded">
                            <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
                                <div className="absolute inset-0 z-10 flex items-center justify-center transition-colors group-hover:bg-black/20 text-black group-hover:text-blue-500">
                                    <PlusIcon className="w-16" />
                                </div>
                                <div className="h-[120px]" />
                            </div>
                            <h2 className="text-lg font-bold group-hover:text-blue-500 text-center">More Posts</h2>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
