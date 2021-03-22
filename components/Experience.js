import TimeLine from './TimeLine';
import Image from 'next/image';

const Experience = () => (
    <div className="py-4">
        <h1 className="text-center text-light">Experience</h1>
        <div className="row mt-5 ml-1">
            <Image
                alt="Tamkeen Technologies Logo"
                className="rounded-custom float-left"
                loading="lazy"
                width="60"
                height="60"
                src="/image/company.jpeg"
            />
            <h4 className="ml-3 text-light my-auto text-capitalize">
                Tamkeen Technologies <br />
                <small className="text-muted">Oct 2019 – Present</small>
            </h4>
        </div>
        <TimeLine>
            <h4 className="card-title text-primary text-capitalize mt-3">
                Software Developer <br />
                <small className="text-muted">Full Time Job</small>
            </h4>
        </TimeLine>
    </div>
);

export default Experience;
