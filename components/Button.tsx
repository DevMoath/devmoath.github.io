import Link from 'next/link';
import classnames from 'classnames';

export default function Button({ children, href, classNames = '', asLink = false }) {
    classNames = classnames(
        'flex justify-center text-center transition-colors duration-200 transform px-3 py-2 rounded-lg text-black hover:bg-gray-300',
        classNames
    );

    return (
        <Link href={href} passHref>
            {asLink ? <a className={classNames}>{children}</a> : <button className={classNames}>{children}</button>}
        </Link>
    );
}
