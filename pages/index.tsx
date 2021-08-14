import Preview from '@components/Preview';
import Projects from '@components/Projects';
import { useState } from 'react';
import Snippets from '@components/Snippets';
import classNames from 'classnames';
import { BriefcaseIcon, CodeIcon } from '@heroicons/react/outline';
import SEO from '@components/SEO';

export default function Index() {
    const [tab, setTab] = useState('projects');

    return (
        <div>
            <SEO />
            <div className="lg:flex">
                <div className="h-screen lg:py-0 max-w-xl">
                    <Preview />
                </div>
                <div className="px-7 text-white bg-gray-700 lg:h-screen lg:overflow-auto lg:w-full pt-10" data-theme="dark">
                    <div className="tabs tabs-boxed bg-neutral" data-theme="corporate">
                        <a
                            className={classNames('tab w-1/2 tab-lg transition-all duration-200 !text-white', tab === 'projects' && 'tab-active')}
                            onClick={() => setTab('projects')}
                        >
                            <span className="hidden lg:block mr-1">My</span>
                            Projects <BriefcaseIcon className="w-6 h-6 ml-1" />
                        </a>
                        <a
                            className={classNames('tab w-1/2 tab-lg transition-all duration-200 !text-white', tab === 'snippets' && 'tab-active')}
                            onClick={() => setTab('snippets')}
                        >
                            <span className="hidden lg:block mr-1">My Code</span>
                            Snippets <CodeIcon className="w-6 h-6 ml-1" />
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
