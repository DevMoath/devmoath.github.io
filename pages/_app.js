import 'tailwindcss/tailwind.css';
import { Fragment } from 'react';
import SEO from '@components/SEO';

export default function App({ Component, pageProps }) {
    return (
        <Fragment>
            <SEO />
            <Component {...pageProps} />
        </Fragment>
    );
}
