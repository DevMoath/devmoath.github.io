import Preview from '@components/Preview';
import Education from '@components/Education';
import Experience from '@components/Experience';
import Skills from '@components/Skills';
import Achievements from '@components/Achievements';
import Head from 'next/head'

const Index = () => {
    return (
        <div className="font-sans">
            <Head>
                <title>Moath Alhajri</title>
                <meta
                    content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
                    name="viewport"
                />
            </Head>
            <div className="lg:flex">
                <div className="py-8 h-screen lg:py-0">
                    <Preview />
                </div>
                <div className="px-7 text-white bg-gray-700 lg:h-screen lg:overflow-auto">
                    <Education />
                    <hr />
                    <Experience />
                    <hr />
                    <Skills />
                    <hr />
                    <Achievements />
                </div>
            </div>
        </div>
    );
};

export default Index;
