import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Button, { ButtonStyle } from '@components/Button';

function TwitterIcon() {
    return (
        <div className="flex space-x-2">
            <svg
                className="w-7 h-7 "
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
            </svg>
            <span className="md:hidden text-lg">Twitter</span>
        </div>
    );
}

function GitHubIcon() {
    return (
        <div className="flex space-x-2">
            <svg
                className="w-7 h-7 "
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            <span className="md:hidden text-lg">GitHub</span>
        </div>
    );
}

function LinkedInIcon() {
    return (
        <div className="flex space-x-2">
            <svg
                className="w-7 h-7 "
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
            <span className="md:hidden text-lg">LinkedIn</span>
        </div>
    );
}

function YouTubeIcon() {
    return (
        <div className="flex space-x-2">
            <svg
                className="w-7 h-7 "
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="4" />
                <path d="M10 9l5 3l-5 3z" />
            </svg>
            <span className="md:hidden text-lg">YouTube</span>
        </div>
    );
}

export default function NavBar() {
    const navigation = [
        {
            name: 'Projects',
            href: '/projects',
        },
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: TwitterIcon(),
            href: '/twitter',
        },
        {
            name: GitHubIcon(),
            href: '/github',
        },
        {
            name: LinkedInIcon(),
            href: '/linkedin',
        },
        {
            name: YouTubeIcon(),
            href: '/youtube',
        },
    ];

    return (
        <Disclosure as="nav" className="bg-white shadow-lg sticky top-0 z-50">
            {({ open }) => (
                <div className="max-w-4xl mx-auto antialiased">
                    <div>
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                                <Disclosure.Button className={ButtonStyle}>
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <Button href="/" asLink>
                                        Moath Alhajri
                                    </Button>
                                </div>
                                <div className="hidden md:block md:ml-3">
                                    <div className="flex items-center space-x-1">
                                        {navigation.map((item) => (
                                            <Button key={Math.random()} href={item.href} asLink>
                                                {item.name}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Button key={Math.random()} href={item.href} asLink>
                                    {item.name}
                                </Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </div>
            )}
        </Disclosure>
    );
}
