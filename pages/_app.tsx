import 'tailwindcss/tailwind.css';
import { Fragment } from 'react';
import SEO from '@components/SEO';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <SEO />
            <Component {...pageProps} />
        </Fragment>
    );
}
