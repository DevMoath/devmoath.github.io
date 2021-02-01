import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <script data-domain="moath.dev"
                            src="https://plausible.io/js/plausible.js"
                            async
                            defer/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
