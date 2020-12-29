import React from 'react'
import { Row } from 'react-bootstrap'
import TimeLine from './layouts/TimeLine'
import Button from '@material-ui/core/Button'

const Achievements = () => (
    <div className="py-4">
        <h1 className="text-center text-light">Achievements</h1>
        <Row className="mt-5 ml-1">
            <img alt="Information Systems Blog Logo"
                 className="rounded-custom float-left bg-white"
                 loading="lazy"
                 width="60"
                 height="60"
                 src="/image/blog-icon.png"/>
            <h4 className="ml-2 text-light my-auto text-capitalize">
                Information Systems Blog <br/>
                <small className="text-muted">Jan 2020 - present</small>
            </h4>
        </Row>
        <TimeLine variant="dark">
            <blockquote className="text-light rounded pr-0 mt-3">
                <p className="my-auto">
                    Blog for information systems students (King Saud University) contains plan study, courses
                    description, advices, tips, resources and anything could help the students
                </p>
                <footer className="mt-4">
                    <Button variant="contained"
                            color="primary"
                            size="large"
                            className="rounded-custom btn-visit"
                            href="https://infosystems.blog/">
                        Visit the blog
                    </Button>
                </footer>
            </blockquote>
        </TimeLine>
        <h2 className="text-center text-light mt-3">Tweets about the blog</h2>
        <Row className="mt-3 mx-1 d-flex justify-content-center">
            <blockquote className="twitter-tweet">
                <p lang="ar"
                   dir="rtl">اذا انت طالب في <a href="https://twitter.com/hashtag/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%85%D9%84%D9%83_%D8%B3%D8%B9%D9%88%D8%AF?src=hash&amp;ref_src=twsrc%5Etfw">#جامعة_الملك_سعود</a> وتخصصك <a href="https://twitter.com/hashtag/%D9%86%D8%B8%D9%85_%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA?src=hash&amp;ref_src=twsrc%5Etfw">#نظم_المعلومات</a> فاقدم لك هذه المدونه ٫ حاولت اشرح فيها الخطه الدراسية واجمع لك موارد المواد عشان توفر على نفسك البحث ٫ ومع الوقت ان شاء الله راح اوفر ميزات اكثر في المدونه ٫ اتمنى تستفيدون منها.<a href="https://twitter.com/_KSU?ref_src=twsrc%5Etfw">@_KSU</a><a href="https://twitter.com/IS_CCIS_KSU?ref_src=twsrc%5Etfw">@IS_CCIS_KSU</a><a href="https://t.co/9taNxpmcl8">https://t.co/9taNxpmcl8</a>
                </p>
                &mdash; Moath (@Dev_Moath) <a href="https://twitter.com/Dev_Moath/status/1243748254598168576?ref_src=twsrc%5Etfw">March 28, 2020</a>
            </blockquote>
        </Row>
        <Row className="mt-3 mx-1 d-flex justify-content-center">
            <blockquote className="twitter-tweet">
                <p lang="ar"
                   dir="rtl">اذا بحثت عن &quot;مدونة نظم المعلومات&quot; في قوقل بتطلع لك المدونة الي اشتغلت عليها في اول نتيجة 😎 <a href="https://t.co/OjVLmwOYm9">pic.twitter.com/OjVLmwOYm9</a>
                </p>
                &mdash; Moath (@Dev_Moath) <a href="https://twitter.com/Dev_Moath/status/1343634227552727040?ref_src=twsrc%5Etfw">December 28, 2020</a>
            </blockquote>
        </Row>
        <Row className="mt-3 mx-1 d-flex justify-content-center">
            <Button variant="contained"
                    color="primary"
                    size="large"
                    className="rounded-custom btn-visit"
                    href="https://twitter.com/i/events/1343637900743860224">
                For more tweets
            </Button>
        </Row>
    </div>
)

export default Achievements
