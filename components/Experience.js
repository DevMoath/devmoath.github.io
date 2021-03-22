import Image from 'next/image';

const Experience = () => (
    <div className="my-16">
        <h1 className="text-center text-4xl mb-10">Experience</h1>
        <div className="flex">
            <div>
                <Image
                    alt="Tamkeen Tech Logo"
                    className="rounded-lg"
                    loading="lazy"
                    width="75"
                    height="75"
                    src="/image/company.jpeg"
                />
            </div>
            <div className="ml-7">
                <h2 className="text-2xl mb-2">
                    Tamkeen Technologies | <small>Oct 2019 – Present</small>
                </h2>
                <p className="text-lg">Software Developer</p>
            </div>
        </div>
    </div>
);

export default Experience;
