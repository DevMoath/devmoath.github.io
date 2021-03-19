import Head from 'next/head';

export default function Header() {
    const name = 'Moath Alhajri',
        url = 'https://moath.dev',
        twitter = '@Dev_Moath',
        description = 'Software Developer, Creator of infosystems.blog';

    return (
        <Head>
            <title>{name}</title>
            <meta content={name} name="title" />
            <meta content={description} name="description" />
            <meta content={description} name="description" />
            <meta content={name} itemProp="name" />
            <meta content={description} itemProp="description" />
            <meta content={`${url}/header.png`} itemProp="image" />
            <meta content="website" property="og:type" />
            <meta content={url} property="og:url" />
            <meta content={name} property="og:title" />
            <meta content={description} property="og:description" />
            <meta content={`${url}/header.png`} property="og:image" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content={url} property="twitter:url" />
            <meta content={twitter} name="twitter:creator" />
            <meta content={twitter} name="twitter:site" />
            <meta content={name} name="twitter:title" />
            <meta content={description} name="twitter:description" />
            <meta content={`${url}/header.png`} name="twitter:image" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="apple-mobile-web-app-title" content="Moath Alhajri" />
            <meta name="application-name" content="Moath Alhajri" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    );
}
