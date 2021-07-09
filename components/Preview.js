import Image from 'next/image';
import { useEffect, useState } from 'react';

const Preview = () => {
    const [state, setState] = useState('idle');

    useEffect(async () => {
        let current = true;

        if (state === 'copying') {
            navigator.clipboard
                .writeText('moath.alhajrii@gmail.com')
                .then(() => {
                    if (current) {
                        setState('copied');
                    }
                })
                .catch(() => {
                    if (current) {
                        setState('error');
                    }
                });
        } else if (state === 'copied' || state === 'error') {
            window.setTimeout(() => {
                if (current) {
                    setState('idle');
                }
            }, 2000);
        }

        return () => (current = false);
    }, [state]);

    return (
        <div className="flex items-center mx-4 h-screen">
            <div className="mx-3">
                <div className="mb-5">
                    <Image src="/image/code_logo.svg" width="200" height="200" layout="fixed" className="rounded-3xl" />
                </div>
                <h1 className="text-4xl">Hi 👋</h1>
                <p className="my-5 text-lg">
                    I'm Moath Alhajri from Saudi Arabia, I have bachelor degree in Information Systems from
                    <a href="https://ksu.edu.sa/" className="link text-info mx-1 link-hover">
                        King Saud University
                    </a>
                    and I'm working now as Software Developer at
                    <a href="https://tamkeentech.sa/" className="link text-info mx-1 link-hover">
                        Tamkeen Tech
                    </a>
                    company
                </p>
                <div className="flex justify-center my-5">
                    <a href="https://twitter.com/Dev_Moath" className="mx-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-twitter"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#00abfb"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </a>
                    <a href="https://github.com/DevMoath" className="mx-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-github"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#597e8d"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/moath-alhajri/" className="mx-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-linkedin"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#00abfb"
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
                    </a>
                    <a href="https://www.youtube.com/channel/UCm-qdl6K8w6hvxFwgO7u5qw" className="mx-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-brand-youtube"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ff2825"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="5" width="18" height="14" rx="4" />
                            <path d="M10 9l5 3l-5 3z" />
                        </svg>
                    </a>
                </div>
                <button
                    type="button"
                    className="flex flex-none items-center justify-center mx-auto py-3 w-full text-gray-400 hover:text-gray-900 font-mono leading-6 bg-gray-50 border border-gray-400 rounded-xl focus:outline-none shadow-lg space-x-2 transition-colors duration-200 focus:ring-gray-300 focus:ring-offset-white focus:ring-offset-2 focus:ring-2 sm:px-6 sm:w-auto sm:space-x-4"
                    onClick={() => setState('copying')}
                >
                    <span className="text-gray-900">moath.alhajrii@gmail.com</span>
                    <span className="sr-only">(click to copy to clipboard)</span>
                    {state === 'copied' ? (
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    ) : state === 'error' ? (
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Preview;
