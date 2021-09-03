import Link from 'next/link';
import classnames from 'classnames';

export default function Button({ children, href, classNames, asLink }: { children: any; href: string; classNames?: string; asLink?: boolean }) {
    classNames = classnames(
        'flex justify-center text-center transition-colors duration-300 transform px-3 py-2 rounded-lg text-black hover:text-white hover:bg-gray-900',
        classNames
    );

    return <Link href={href}>{asLink ? <a className={classNames}>{children}</a> : <button className={classNames}>{children}</button>}</Link>;
}
