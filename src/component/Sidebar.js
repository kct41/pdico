import '../css/Sidebar.css';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faHome, faComments, faRectangleList, faBarsProgress, faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar__body">
                <div className="user online"><FontAwesomeIcon icon={faUser} />
                <span></span></div>
                <ul className="sidebar__menu">
                    <li className="on"><Link to="/"><FontAwesomeIcon className="i" icon={faHome} /></Link></li>
                    <li><Link to="/calendar"><FontAwesomeIcon icon={faCalendarDays} /></Link></li>
                    <li><Link to="/chat"><FontAwesomeIcon icon={faComments} /></Link></li>
                    <li><Link to="/board"><FontAwesomeIcon icon={faRectangleList} /></Link></li>
                    <li><Link to="/project"><FontAwesomeIcon icon={faBarsProgress} /></Link></li>
                </ul>
                <div className="exit"><FontAwesomeIcon icon={faSignOut} /></div>
            </div>
        </div>
    )
}

export default Sidebar;