import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <script async
                            defer
                            data-domain="moath.dev"
                            src="https://plausible.moath.dev/js/index.js"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
