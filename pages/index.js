import Preview from '../components/Preview';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';

const Index = () => {
    return (
        <div className="font-sans">
            <div className="lg:flex">
                <div className="h-screen bg-[#EFEFEF]">
                    <Preview />
                </div>
                <div className="bg-gray-700 text-white lg:h-screen lg:overflow-auto px-7">
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
