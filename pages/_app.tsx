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
            <Component {...pageProps} />
        </Fragment>
    );
}
