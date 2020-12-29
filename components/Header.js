import Head from 'next/head'
import React from 'react'

const Header = () => (
    <Head>
        <meta charSet="UTF-8"/>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
              name="viewport"/>
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
        <meta content={process.env.NEXT_PUBLIC_NAME}
              name="title"/>
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION}
              name="description"/>
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION}
              name="description"/>
        <meta content={process.env.NEXT_PUBLIC_NAME}
              itemProp="name"/>
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION}
              itemProp="description"/>
        <meta content="/header.jpg"
              itemProp="image"/>
        <meta content="website"
              property="og:type"/>
        <meta content={process.env.NEXT_PUBLIC_URL}
              property="og:url"/>
        <meta content={process.env.NEXT_PUBLIC_NAME}
              property="og:title"/>
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION}
              property="og:description"/>
        <meta content="/header.jpg"
              property="og:image"/>
        <meta content="summary_large_image"
              name="twitter:card"/>
        <meta content={process.env.NEXT_PUBLIC_URL}
              property="twitter:url"/>
        <meta content="@Dev_Moath"
              name="twitter:creator"/>
        <meta content="@Dev_Moath"
              name="twitter:site"/>
        <meta content={process.env.NEXT_PUBLIC_NAME}
              name="twitter:title"/>
        <meta content={process.env.NEXT_PUBLIC_DESCRIPTION}
              name="twitter:description"/>
        <meta content="/header.jpg"
              name="twitter:image"/>
        <link href="/apple-touch-icon.png"
              rel="apple-touch-icon"
              sizes="180x180"/>
        <link href="/favicon-32x32.png"
              rel="icon"
              sizes="32x32"
              type="image/png"/>
        <link href="/favicon-16x16.png"
              rel="icon"
              sizes="16x16"
              type="image/png"/>
        <link href="/site.webmanifest"
              rel="manifest"/>
        <link color="#5bbad5"
              href="/safari-pinned-tab.svg"
              rel="mask-icon"/>
        <meta content="#da532c"
              name="msapplication-TileColor"/>
        <meta content="#ffffff"
              name="theme-color"/>
        <script type='text/javascript'
                src='https://www.googletagmanager.com/gtag/js?id=UA-142122097-1'
                async/>
        <script async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"/>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || []

                    function gtag() {dataLayer.push(arguments)}
                
                    gtag('js', new Date())
                    gtag('config', 'UA-142122097-1')
                  `,
            }}
        />
    </Head>
)

export default Header
