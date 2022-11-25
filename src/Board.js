import '../src/css/Board.css';
import TopBar from "./component/TopBar";
import PostBoard from "./component/PostBoard";
import BoardModal from "./component/Modals/BoardModal";
import {useState} from "react";

function Board() {

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    return (
        <div className="board__box">
            <TopBar title="게시판" btn board/>
            <div className="flex__box">
                <PostBoard title="공지사항"/>
                <PostBoard title="자유게시판"/>
                <PostBoard title="건의사항"/>
            </div>
            <button onClick={openModal}>모달팝업</button>
            <BoardModal open={modalOpen} close={closeModal}></BoardModal>
        </div>
    )
}

export default Board;