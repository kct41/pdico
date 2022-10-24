import '../css/ProjectMember.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical, faUser} from "@fortawesome/free-solid-svg-icons";

function ProjectMember({username, role}){
    return(
        <div className="member">
            <div className="user"><FontAwesomeIcon icon={faUser} /></div>
            <div className="user_info">
                <h4>{username}</h4>
                <p>{role}</p>
            </div>
            <FontAwesomeIcon className="icon" icon={faEllipsisVertical}/>
        </div>
    )
}

export default ProjectMember;