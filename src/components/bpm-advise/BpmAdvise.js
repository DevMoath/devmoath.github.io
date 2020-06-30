import React from "react";
import first from "./audio/1.mp3";
import second from "./audio/2.mp3";
import third from "./audio/3.mp3";
import fourth from "./audio/4.mp3";
import sixth from "./audio/6.mp3";
import seventh from "./audio/7.mp3";
import eighth from "./audio/8.mp3";

const BpmAdvise = () => {
    return (
        <div className="container my-5 text-right"
             dir="rtl">
            <div className="text-center">
                <h1 className="">مقاطع صوتيه من احد طلاب الماده يشرح الاشياء المهمه عن الاختبار</h1>
                <h2 className="text-danger my-4">
                    <span className="ml-2">زياده على الي موجود في Slides</span>
                    <a href="https://drive.google.com/drive/folders/1SxWU4Ai9-KJ2XKYNT-1i8Ic3SahR5OAr">هنا</a>
                </h2>
            </div>
            <hr className="border-dark"/>
            <h2 className="my-4 text-center">الاختبار الشهري</h2>
            <div className="border border-danger col my-2 pt-2 rounded">
                <p>اذا جا في الميد تعريف BM، الفاينل بيجيب BPM والعكس صحيح</p>
            </div>
            <div className="border border-danger col my-2 pt-2 rounded">
                <audio className="d-block my-4"
                       controlsList="nodownload"
                       controls>
                    <source src={first}
                            type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
                <audio className="d-block my-4"
                       controlsList="nodownload"
                       controls>
                    <source src={second}
                            type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
                <p className="my-4">لازم تعرف انواع Sub-Process و وش يفرق كل واحد عن الثاني</p>
            </div>
            <div className="border border-danger col my-2 pt-2 rounded">
                <p className="my-2">44 الى 47 من week 5 ضروري تعرف متى بيصير Trigger للـ Token</p>
                <audio className="d-block my-4"
                       controlsList="nodownload"
                       controls>
                    <source src={third}
                            type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
                <audio className="d-block my-4"
                       controlsList="nodownload"
                       controls>
                    <source src={fourth}
                            type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <hr className="border-dark"/>
            <h2 className="my-4 text-center">الاختبار النهائي</h2>
            <div className="border border-danger col my-3 py-1 rounded">
                <audio className="d-block my-4"
                       controlsList="nodownload"
                       controls>
                    <source src={fourth}
                            type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="border border-danger col my-3 py-3 rounded">
                <ul>
                    <li><p>جاب تعريف BP Modeling</p></li>
                    <li><p>جاب تعريف BP</p></li>
                    <li><p>جاب سؤال عن collapse pool متى نستخدمه او ليه نستخدمه</p></li>
                    <li><p>جاب اذكر خطوات Process Discovery</p></li>
                </ul>
            </div>
            <div className="border border-danger col my-3 pt-3 rounded">
                <p>تعليق على slide رقم 21 الى 25 من week 8</p>
                <audio className="d-block my-4"
                       controlsList="nodownload"
                       controls>
                    <source src={sixth}
                            type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
            <div className="border border-danger col my-3 pt-3 rounded">
                <audio className="d-block my-4"
                       controlsList="nodownload"
                       controls>
                    <source src={seventh}
                            type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
                <audio className="d-block my-4"
                       controlsList="nodownload"
                       controls>
                    <source src={eighth}
                            type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    );
};

export default BpmAdvise;
