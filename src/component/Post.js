import '../css/Post.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function Post({username, date, title, text, reply}){
    return(
        <div className="post">
            <div className="post__info">
                <div className="user online"><FontAwesomeIcon icon={faUser}/>
                    <span></span></div>
                <h4>{username}</h4>
                <p>{date}</p>
            </div>
            <div className="text">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className="reply__area">
                <p>댓글 {reply}개</p>
                <p>이모티콘</p>
            </div>
        </div>
    )
}

export default Post;