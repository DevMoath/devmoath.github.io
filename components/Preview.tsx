import Image from 'next/image';
import { useState } from 'react';
import copy from '@devmoath/copy-text';
import Link from 'next/link';
import { ClipboardCheckIcon, ClipboardIcon } from '@heroicons/react/outline';

function TwitterIcon() {
    return (
        <svg
            className="w-9 h-9 text-[#00abfb]"
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
    );
}

function GitHubIcon() {
    return (
        <svg
            className="w-9 h-9 text-[#597e8d]"
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
    );
}

function LinkedInIcon() {
    return (
        <svg
            className="w-9 h-9 text-[#00abfb]"
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
    );
}

function YouTubeIcon() {
    return (
        <svg
            className="w-9 h-9 text-[#ff2825]"
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
    );
}

export default function Preview() {
    const email = 'moath.alhajrii@gmail.com';

    const [state, setState] = useState(false);

    const copyEmail = () => {
        copy(email);
        setState(true);

        setTimeout(() => setState(false), 2000);
    };

    return (
        <div className="flex items-center mx-4 h-screen">
            <div className="mx-3">
                <div className="mb-5">
                    <Image src="/image/code_logo.svg" width="200" height="200" layout="fixed" className="rounded-3xl" alt="my logo" />
                </div>
                <h1 className="text-4xl">Hi 👋</h1>
                <p className="my-5 text-lg">
                    I am Moath Alhajri from Saudi Arabia, I have bachelor degree in Information Systems from{' '}
                    <a href="https://ksu.edu.sa/" className="link text-info link-hover">
                        King Saud University
                    </a>{' '}
                    and I am working now as Software Developer at{' '}
                    <a href="https://tamkeentech.sa/" className="link text-info link-hover">
                        TamkeenTech
                    </a>{' '}
                    company
                </p>
                <div className="flex justify-center gap-x-6 my-5">
                    <Link href="/twitter">
                        <a>
                            <TwitterIcon />
                        </a>
                    </Link>
                    <Link href="/github">
                        <a>
                            <GitHubIcon />
                        </a>
                    </Link>
                    <Link href="/linkedin">
                        <a>
                            <LinkedInIcon />
                        </a>
                    </Link>
                    <Link href="/youtube">
                        <a>
                            <YouTubeIcon />
                        </a>
                    </Link>
                </div>
                <div className="flex">
                    <button type="button" className="btn mx-auto shadow-lg" onClick={copyEmail}>
                        <span className="mr-3">{email}</span>
                        {state ? <ClipboardCheckIcon className="h-6 w-6" /> : <ClipboardIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
