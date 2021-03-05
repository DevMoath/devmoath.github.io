import Head from 'next/head';
import React from 'react';

const Header = () => (
    <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
        <meta content={process.env.NEXT_PUBLIC_NAME} name="title" />
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION} name="description" />
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION} name="description" />
        <meta content={process.env.NEXT_PUBLIC_NAME} itemProp="name" />
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION} itemProp="description" />
        <meta content="/header.jpg" itemProp="image" />
        <meta content="website" property="og:type" />
        <meta content={process.env.NEXT_PUBLIC_URL} property="og:url" />
        <meta content={process.env.NEXT_PUBLIC_NAME} property="og:title" />
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION} property="og:description" />
        <meta content="/header.jpg" property="og:image" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={process.env.NEXT_PUBLIC_URL} property="twitter:url" />
        <meta content="@Dev_Moath" name="twitter:creator" />
        <meta content="@Dev_Moath" name="twitter:site" />
        <meta content={process.env.NEXT_PUBLIC_NAME} name="twitter:title" />
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION} name="twitter:description" />
        <meta content="/header.jpg" name="twitter:image" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#da532c" name="msapplication-TileColor" />
        <meta content="#ffffff" name="theme-color" />
    </Head>
);

export default Header;
