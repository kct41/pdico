import '../css/ProjectCard.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faUser} from "@fortawesome/free-solid-svg-icons";

function ProjectCard({name, date}){
    return(
        <div className="project__card">
            <div className="card__content">
                <div className="card__flexbox">
                    <div className="card__left">
                        <h3>{name}</h3>
                        <p>{date}</p>
                    </div>
                    <div className="card__right">
                        <FontAwesomeIcon icon={faEllipsisVertical}/>
                    </div>
                </div>
                <div className="card__bottom">
                    <div className="card__user">
                        <div className="user"><FontAwesomeIcon icon={faUser} /></div>
                        <div className="user"><FontAwesomeIcon icon={faUser} /></div>
                        <div className="user"><FontAwesomeIcon icon={faUser} /></div>
                    </div>
                    <div className="card__progress">
                        <div className="progress__bar">
                            <div className="bar__bg"></div>
                            <div className="bar__progress"></div>
                        </div>
                        <h5>10%</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;