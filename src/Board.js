import '../src/css/Board.css';
import TopBar from "./component/TopBar";
import PostBoard from "./component/PostBoard";

function Board(){
    return(
        <div className="board__box">
            <TopBar title="게시판"/>
            <div className="flex__box">
                <PostBoard title="공지사항"/>
                <PostBoard title="자유게시판"/>
                <PostBoard title="건의사항"/>
            </div>
        </div>
    )
}

export default Board;