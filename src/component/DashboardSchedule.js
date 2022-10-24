import '../css/DashboardSchedule.css';
import Schedule from "./Schedule";

function DashboardSchedule() {
    return (
        <div className="dashboard__schedule">
            <h3>다가오는 일정</h3>
            <Schedule date="10월 18일 화요일" detail="09:00 - 10:00 연구소 스터디"/>
            <Schedule date="10월 25일 화요일" detail="월급"/>
            <Schedule date="10월 28일 금요일" detail="패밀리데이"/>
        </div>
    )
}

export default DashboardSchedule;