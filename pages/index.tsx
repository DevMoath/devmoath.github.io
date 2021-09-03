import { Fragment } from 'react';
import SEO from '@components/SEO';
import NavBar from '@components/NavBar';
import Image from 'next/image';

export default function Index() {
    return (
        <Fragment>
            <SEO />
            <NavBar />
            <div className="container px-4 mt-20 grid grid-cols-3 gap-4">
                <h1 className="text-4xl text-black font-bold col-span-4">Hello, I'm Moath</h1>
                <p className="my-8 text-lg leading-8 col-span-4 md:col-span-2">
                    I am Moath Alhajri from Saudi Arabia, I have bachelor degree in Information Systems from{' '}
                    <a href="https://ksu.edu.sa/" className="text-blue-500 hover:underline">
                        King Saud University
                    </a>{' '}
                    and I am working now as Software Developer at{' '}
                    <a href="https://tamkeentech.sa/" className="text-blue-500 hover:underline">
                        TamkeenTech
                    </a>{' '}
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
        </Fragment>
    );
}
