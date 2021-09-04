import { PlusIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function MoreMediaPreview({ url, title, type }: { url: string; title: string; type: 'youtube' | 'other' }) {
    const height = type === 'youtube' ? 'h-[155px]' : 'h-[145px]';

    return (
        <Link href={url}>
            <a className="text-gray-800 group block focus:text-blue-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none rounded">
                <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
                    <div className="absolute inset-0 z-10 flex items-center justify-center transition-colors group-hover:bg-black/20 text-black group-hover:text-blue-500">
                        <PlusIcon className="w-16" />
                    </div>
                    <div className={height} />
                </div>
                <h2 className="text-lg font-bold group-hover:text-blue-500 text-center">{title}</h2>
            </a>
        </Link>
    );
}
