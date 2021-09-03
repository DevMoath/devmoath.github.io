import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import Button from '@components/Button';

export default function NavBar() {
    const navigation = [
        {
            name: 'Twitter',
            href: 'twitter',
        },
        {
            name: 'GitHub',
            href: 'github',
        },
        {
            name: 'LinkedIn',
            href: 'linkedin',
        },
        {
            name: 'YouTube',
            href: 'youtube',
        },
    ];

    return (
        <Disclosure as="nav" className="bg-white shadow-lg">
            {({ open }) => (
                <Fragment>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16 container">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="transition-colors duration-200 transform inline-flex items-center justify-center p-2 rounded-lg text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <Button href="/" asLink>
                                        Moath Alhajri
                                    </Button>
                                </div>
                                <div className="hidden sm:block sm:ml-3">
                                    <div className="flex space-x-4 items-center">
                                        {navigation.map((item) => (
                                            <Button key={Math.random()} href={item.href} asLink>
                                                {item.name}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Button key={Math.random()} href={item.href} asLink>
                                    {item.name}
                                </Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </Fragment>
            )}
        </Disclosure>
    );
}
