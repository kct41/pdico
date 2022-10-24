import './css/Dashboard.css';
import TopBar from "./component/TopBar";
import ProjectCard from '../src/component/ProjectCard';
import DashboardChat from '../src/component/DashboardChat';
import DashboardNotice from '../src/component/DashboardNotice';
import DashboardTodo from '../src/component/DashboardTodo';
import DashboardSchedule from "./component/DashboardSchedule";
import DashboardCalendar from "./component/DashboardCalendar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
    return (
        <div className="dashboard">
            <TopBar title="안녕하세요, Phoebe 님!"/>
            <div className="notice__bar">
                <div className="notice notice__latest">
                    <FontAwesomeIcon className="icon" icon={faBullhorn}/>
                    <h3>공지사항</h3>
                    <p>10월 패밀리데이 시행 안내</p>
                </div>
                <div className="notice notice__approval">
                    <h3>내가 올린 결재</h3>
                    <div>
                        <p>상신문서 (1)</p>
                    </div>
                    <div>
                        <p>결재완료문서 (11)</p>
                    </div>
                    <div>
                        <p>반려문서 (1)</p>
                    </div>
                </div>
                <div className="notice notice__holiday">
                    <h3>잔여 연차</h3>
                    <p>11</p>
                </div>
            </div>
            <div className="dashboard__flexbox">
                <div className="dashboard__left">
                    <div className="project__section">
                        <ProjectCard name="연구소 ERP 프로젝트" date="2022년 9월 1일 ~ 2022년 12월 31일"/>
                        <ProjectCard name="연구소 UI 디자인" date="2022년 9월 1일 ~ 2022년 12월 31일"/>
                        <ProjectCard name="연구소 ERP 백엔드" date="2022년 9월 1일 ~ 2022년 12월 31일"/>
                    </div>
                    <div className="dashboard__bottom">
                        <DashboardTodo/>
                        <DashboardChat/>
                        <DashboardNotice/>
                    </div>
                </div>
                <div className="dashboard__right">
                    <DashboardCalendar/>
                    <DashboardSchedule/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;