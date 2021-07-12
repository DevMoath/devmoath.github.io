import Preview from '@components/Preview';
import Projects from '@components/Projects';
import Head from 'next/head';
import { useState } from 'react';
import { classNames } from '@utils/Helpers';
import Snippets from '@components/Snippets';

export default function Index() {
    const [tab, setTab] = useState('projects');

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
                <div className="px-7 text-white bg-gray-700 lg:h-screen lg:overflow-auto lg:w-full pt-10">
                    <div className="tabs transition-all duration-300">
                        <a
                            className={classNames('tab tab-bordered w-1/2 tab-lg transition-all duration-500', tab === 'projects' && 'tab-active')}
                            onClick={() => setTab('projects')}
                        >
                            Projects
                        </a>
                        <a
                            className={classNames('tab tab-bordered w-1/2 tab-lg transition-all duration-500', tab === 'snippets' && 'tab-active')}
                            onClick={() => setTab('snippets')}
                        >
                            Code Snippets
                        </a>
                    </div>
                    <div className={tab !== 'projects' ? 'hidden' : ''}>
                        <Projects />
                    </div>
                    <div className={tab !== 'snippets' ? 'hidden' : ''}>
                        <Snippets />
                    </div>
                </div>
            </div>
        </div>
    );
}
