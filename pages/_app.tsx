import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import SEO from '@components/SEO';
import NavBar from '@components/NavBar';
import { Fragment } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <SEO />
            <NavBar />
            <div className="max-w-4xl mx-auto antialiased my-16 px-4">
                <Component {...pageProps} />
            </div>
        </Fragment>
    );
}
