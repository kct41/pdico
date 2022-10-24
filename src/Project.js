import '../src/css/Project.css';
import TopBar from "./component/TopBar";
import ProjectCard from "./component/ProjectCard";
import ProjectMember from "./component/ProjectMember";
import WeekdayBox from "./component/WeekdayBox";

function Project(){
    return(
        <div className="project__box">
            <TopBar title="프로젝트"/>
            <div className="flex__box">
                <div className="card__area">
                    <ProjectCard name="PDICO 프로젝트" date="2022년 9월 1일 ~ 2022년 12월 31일"/>
                    <ProjectCard name="PDICO 화면 디자인" date="2022년 9월 1일 ~ 2022년 9월 30일"/>
                    <ProjectCard name="PDICO 백엔드" date="2022년 10월 1일 ~ 2022년 12월 31일"/>
                    <ProjectCard name="PDICO 화면 구현" date="2022년 10월 1일 ~ 2022년 11월 31일"/>
                    <ProjectCard name="PDICO 화면 구현" date="2022년 10월 1일 ~ 2022년 11월 31일"/>
                </div>
                <div className="project__detail__area">
                    <h2>2022년 10월</h2>
                    <div className="container">
                        <div className="member__box">
                            <ProjectMember username="김용희" role="PM / 백엔드"/>
                            <ProjectMember username="김소미" role="프론트엔드"/>
                            <ProjectMember username="최정민" role="프론트엔드"/>
                            <ProjectMember username="임소현" role="디자인"/>
                            <ProjectMember username="이진욱" role="백엔드"/>
                            <ProjectMember username="이효재" role="백엔드"/>
                        </div>
                        <div className="detail__box">
                            <div className="box">
                                <div className="date">
                                    <h5>목</h5>
                                    <p>20일</p>
                                </div>
                                <div className="flex__box">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="date">
                                    <h5>금</h5>
                                    <p>21일</p>
                                </div>
                                <div className="flex__box today">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="date">
                                    <h5>토</h5>
                                    <p>22일</p>
                                </div>
                                <div className="flex__box">
                                    <div></div>
                                    <div className="weekend"></div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="date">
                                    <h5>일</h5>
                                    <p>23일</p>
                                </div>
                                <div className="flex__box">
                                    <div className="weekend"></div>
                                    <div className="weekend"></div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="date">
                                    <h5>월</h5>
                                    <p>24일</p>
                                </div>
                                <div className="flex__box">
                                    <div className="weekend"></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="date">
                                    <h5>화</h5>
                                    <p>25일</p>
                                </div>
                                <div className="flex__box">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="date">
                                    <h5>수</h5>
                                    <p>26일</p>
                                </div>
                                <div className="flex__box">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Project;