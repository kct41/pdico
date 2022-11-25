import '../css/PostBoard.css';
import Post from "./Post";

function PostBoard({title}) {
    return (
        <div className="post__board">
            <div className="board__title">
                <span></span>
                <h3>{title}</h3>
            </div>
            <div className="post__area">
                <Post
                    username="김소미"
                    date="2022년 10월 19일 18:03 PM"
                    title="10월 패밀리데이 시행 안내"
                    text="10월 28일 금요일 패밀리데이를 시행할 예정입니다."
                    reply="2"
                />
            </div>
        </div>
    )
}

export default PostBoard;