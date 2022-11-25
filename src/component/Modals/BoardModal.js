import "../../css/Modal.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmarkCircle} from "@fortawesome/free-regular-svg-icons";

const BoardModal = (props) => {
    const {open, close} = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <button className="close_btn" onClick={close}><FontAwesomeIcon className="icon" icon={faXmarkCircle} /></button>
                    <h2>게시글 작성</h2>
                    <form>
                        <div>
                            <label className="title">게시판</label>
                            <select className="input">
                                <option>공지사항</option>
                                <option>자유게시판</option>
                                <option>건의사항</option>
                            </select>
                        </div>
                        <div>
                            <label className="title">제목</label>
                            <input className="input" placeholder="제목을 입력해주세요."/>
                        </div>
                        <div>
                            <label className="title">내용</label>
                            <textarea style={{height:"20vh"}} className="input" placeholder="내용을 입력해주세요."/>
                        </div>
                        <div>
                            <label className="title">첨부파일</label>
                            <div class="file_box">
                                <input className="upload-name" style={{fontFamily:"AppleSDGothicNeoM00"}} value="파일을 첨부해주세요." placeholder="첨부파일"/>
                                <label htmlFor="file">파일찾기</label>
                                <input type="file" id="file"/>
                            </div>
                        </div>

                        <button type="submit" className="submit_btn" onClick={close}>등록</button>
                    </form>

                </section>
            ) : null}

        </div>
    )
}

export default BoardModal;