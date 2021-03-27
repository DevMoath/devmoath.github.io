import Image from 'next/image';

const Experience = () => (
    <div className="py-16">
        <h1 className="text-center text-4xl mb-10">Experience</h1>
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
                    <h2 className="text-2xl mb-2">
                        Tamkeen Technologies | <small>Oct 2019 – Present</small>
                    </h2>
                    <p className="text-lg">Software Developer</p>
                </div>
            </div>
        </div>
    </div>
);

export default Experience;
