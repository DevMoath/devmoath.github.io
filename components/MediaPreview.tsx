import Image from 'next/image';
import Link from 'next/link';
import { PlayIcon } from '@heroicons/react/solid';
import truncate from 'lodash.truncate';

export type MediaPreviewProps = {
    title: string;
    text: string;
    url: string;
    image?: string;
    type?: 'youtube' | 'other';
};

export default function MediaPreview({ title, text, url, image, type }: MediaPreviewProps) {
    const [width, height] = type === 'other' ? [1200, 628] : [1280, 720];

    return (
        <Link href={url}>
            <a className="text-gray-800 group block focus:text-blue-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-60 focus-visible:outline-none focus:outline-none rounded">
                {image ? (
                    <div className="relative mb-4 overflow-hidden rounded-lg text-[0px]">
                        <div className="absolute inset-0 z-10 flex items-center justify-center transition-colors group-hover:bg-black/20 text-white/75 group-hover:text-red-600">
                            {type === 'youtube' ? <PlayIcon className="w-16" /> : null}
                        </div>

                        <Image src={image} width={width} height={height} />
                    </div>
                ) : null}
                <h2 className="text-lg font-bold group-hover:text-blue-500">{title}</h2>
                <p className="text-gray-800 line-clamp-2">{truncate(text, { length: 100 })}</p>
            </a>
        </Link>
    );
}
