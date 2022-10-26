import '../css/DashboardNotice.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

function DashboardNotice() {
    return (
        <div className="dashboard__notice">
            <h2>공지사항</h2>
            <div className="notice__section">
                <div className="more">
                    <FontAwesomeIcon icon={faPlus}/><p>더보기</p>
                </div>
                <div className="notice__list">
                    <div className="notice__title"><p>10월 패밀리데이 시행 안내</p></div>
                    <div className="notice__date"><p>2022.10.17</p></div>
                </div>
                <div className="notice__list">
                    <div className="notice__title"><p>10월 패밀리데이 시행 안내</p></div>
                    <div className="notice__date"><p>2022.10.17</p></div>
                </div>
                <div className="notice__list">
                    <div className="notice__title"><p>10월 패밀리데이 시행 안내</p></div>
                    <div className="notice__date"><p>2022.10.17</p></div>
                </div>
                <div className="notice__list">
                    <div className="notice__title"><p>10월 패밀리데이 시행 안내</p></div>
                    <div className="notice__date"><p>2022.10.17</p></div>
                </div>
                <div className="notice__list">
                    <div className="notice__title"><p>10월 패밀리데이 시행 안내</p></div>
                    <div className="notice__date"><p>2022.10.17</p></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNotice;