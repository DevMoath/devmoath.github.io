import TimeLine from './TimeLine';
import Image from 'next/image';

const Achievements = () => (
    <div className="py-4">
        <h1 className="text-center text-light">Achievements</h1>
        <div className="row mt-5 ml-1">
            <Image
                alt="Information Systems Blog Logo"
                className="rounded-custom float-left bg-white"
                loading="lazy"
                width="60"
                height="60"
                src="/image/blog-icon.png"
            />
            <h4 className="ml-2 text-light my-auto text-capitalize">
                Information Systems Blog <br />
                <small className="text-muted">Jan 2020 - present</small>
            </h4>
        </div>
        <TimeLine>
            <blockquote className="text-light rounded pr-0 mt-3">
                <p className="my-auto">
                    Blog for information systems students (King Saud University) contains plan study, courses
                    description, advices, tips, resources and anything could help the students
                </p>
            </blockquote>
            <a
                className="shadow btn btn-primary rounded-custom btn-visit mx-sm-2 my-2"
                href="https://infosystems.blog/"
            >
                Visit the blog
            </a>
            <a
                className="shadow btn btn-primary rounded-custom btn-visit mx-sm-2 my-2"
                href="https://twitter.com/i/events/1343637900743860224"
            >
                Tweets about the blog
            </a>
        </TimeLine>
    </div>
);

export default Achievements;
