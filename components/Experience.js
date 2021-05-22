import Image from 'next/image';

const Experience = () => (
    <div className="py-16">
        <h1 className="mb-10 text-center text-4xl">Experience</h1>
        <div>
            <div className="flex gap-4">
                <div className="flex-shrink">
                    <Image
                        alt="Tamkeen Tech Logo"
                        className="rounded-lg"
                        loading="lazy"
                        width="75"
                        height="75"
                        layout="fixed"
                        src="/image/company.jpeg"
                    />
                </div>
                <div>
                    <h2 className="mb-2 text-2xl">
                        Tamkeen Technologies | <small>Oct 2019 – Present</small>
                    </h2>
                    <p className="text-lg">Software Developer</p>
                </div>
            </div>
        </div>
    </div>
);

export default Experience;
