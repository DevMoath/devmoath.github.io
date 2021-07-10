import Preview from '@components/Preview';
import Projects from '@components/Projects';
import Head from 'next/head';

export default function Index() {
    return (
        <div>
            <Head>
                <title>Moath Alhajri</title>
                <meta content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" name="viewport" />
            </Head>
            <div className="lg:flex">
                <div className="h-screen lg:py-0 max-w-xl">
                    <Preview />
                </div>
                <div className="px-7 text-white bg-gray-700 lg:h-screen lg:overflow-auto lg:w-full">
                    <Projects />
                </div>
            </div>
        </div>
    );
}
