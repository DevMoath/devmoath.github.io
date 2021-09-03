import Link from 'next/link';

export default function Button({ children, href, asLink = false }) {
    const classNames =
        'flex justify-center text-center transition-colors duration-200 transform px-3 py-2 rounded-lg text-lg text-black hover:bg-gray-300';

    return (
        <Link href={href} passHref>
            {asLink ? <a className={classNames}>{children}</a> : <button className={classNames}>{children}</button>}
        </Link>
    );
}
