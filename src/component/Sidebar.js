import '../css/Sidebar.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faHome,
    faComments,
    faRectangleList,
    faBarsProgress,
    faUser,
    faSignOut,
    faGear
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
    const liStyle = {
        width: '4vw',
        height: '4vw',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.5s',
        fontSize: '1.5rem',
    }
    return (
        <div className="sidebar">
            <div className="sidebar__body">
                <div className="user online"><FontAwesomeIcon icon={faUser}/>
                    <span></span>
                    {/*<ul className="status">*/}
                    {/*    <li>온라인</li>*/}
                    {/*    <li>오프라인</li>*/}
                    {/*    <li>회의중</li>*/}
                    {/*    <li>자리비움</li>*/}
                    {/*</ul>*/}
                </div>
                <ul className="sidebar__menu">
                    <li style={liStyle}>
                        <NavLink to="/home" className={({isActive}) => (isActive ? " on" : "")}>
                            <FontAwesomeIcon icon={faHome}/>
                        </NavLink>
                    </li>
                    <li style={liStyle}>
                        <NavLink to="/calendar" className={({isActive}) => (isActive ? " on" : "")}>
                            <FontAwesomeIcon icon={faCalendarDays}/>
                        </NavLink>
                    </li>

                    <li style={liStyle}>
                        <NavLink to="/chat" className={({isActive}) => (isActive ? " on" : "")}>
                            <FontAwesomeIcon icon={faComments}/>
                        </NavLink>
                    </li>

                    <li style={liStyle}>
                        <NavLink to="/board" className={({isActive}) => (isActive ? " on" : "")}>
                            <FontAwesomeIcon icon={faRectangleList}/>
                        </NavLink>
                    </li>

                    <li style={liStyle}>
                        <NavLink to="/project" className={({isActive}) => (isActive ? " on" : "")}>
                            <FontAwesomeIcon icon={faBarsProgress}/>
                        </NavLink>
                    </li>

                    <li style={liStyle}>
                        <NavLink to="/administrator" className={({isActive}) => (isActive ? " on" : "")}>
                            <FontAwesomeIcon icon={faGear}/>
                        </NavLink>
                    </li>

                </ul>
                <div className="exit"><FontAwesomeIcon icon={faSignOut}/></div>
            </div>
        </div>
    )
}

export default Sidebar;