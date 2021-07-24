import { NextSeo } from 'next-seo';

interface SEOProps {
    title?: string;
    description?: string;
}

export default function SEO({ title = 'Moath Alhajri', description = 'Software Developer' }: SEOProps) {
    return (
        <NextSeo
            title={title}
            description={description}
            canonical={process.env.NEXT_PUBLIC_BASE_URL}
            openGraph={{
                images: [{ url: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png` }],
                site_name: title,
                type: 'website',
            }}
            twitter={{
                handle: '@Dev_Moath',
                site: '@Dev_Moath',
                cardType: 'summary_large_image',
            }}
            additionalMetaTags={[
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
                },
            ]}
            additionalLinkTags={[
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
            ]}
        />
    );
}
