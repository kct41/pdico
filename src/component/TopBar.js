import '../css/TopBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";

function TopBar({title}){
    return(
        <div className="top__bar">
            <h1>{title}</h1>
            <div>
                <input placeholder="Search" className="search__bar"/>
                <div className="bell"><FontAwesomeIcon icon={faBell}/></div>
            </div>
        </div>
    )
}

export default TopBar;