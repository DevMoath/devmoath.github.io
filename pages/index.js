import Preview from '../components/Preview';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';

const Index = () => {
    return (
        <div className="font-sans">
            <div className="lg:flex">
                <div className="py-8 h-screen lg:py-0">
                    <Preview />
                </div>
                <div className="px-7 text-white bg-gray-700 lg:h-screen lg:overflow-auto">
                    <Education />
                    <hr />
                    <Experience />
                    <hr />
                    <Skills />
                    <hr />
                    <Achievements />
                </div>
            </div>
        </div>
    );
};

export default Index;
