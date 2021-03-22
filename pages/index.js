import Preview from '../components/Preview';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';

const Index = () => {
    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col col-lg-4 h-100 position-relative px-0 left-side">
                    <Preview />
                </div>
                <div className="col col-lg-8 bg-dark right-side">
                    <Education />
                    <hr className="border-light" />
                    <Experience />
                    <hr className="border-light" />
                    <Skills />
                    <hr className="border-light" />
                    <Achievements />
                </div>
            </div>
        </div>
    );
};

export default Index;
