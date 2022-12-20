import '../src/css/Board.css';
import TopBar from "./component/TopBar";
import PostBoard from "./component/PostBoard";
import NoticeBoard from "./component/NoticeBoard";
import SuggestionBoard from "./component/SuggestionBoard";

function Board() {

    return (
        <div className="board__box">
            <TopBar title="게시판" board/>
            <div className="flex__box">
                <PostBoard title="공지사항"/>
                <NoticeBoard title="자유게시판"/>
                <SuggestionBoard title="건의사항"/>
            </div>
        </div>
    )
}

export default Board;