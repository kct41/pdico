import "../../css/Modal.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmarkCircle} from "@fortawesome/free-regular-svg-icons";

const ProjectModal = (props) => {
    const {open, close} = props;
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <button className="close_btn" onClick={close}><FontAwesomeIcon className="icon" icon={faXmarkCircle} /></button>
                    <h2>프로젝트 추가</h2>
                    <form>
                        <div>
                            <label className="title">제목</label>
                            <input className="input" placeholder="제목을 입력해주세요."/>
                        </div>
                        <div>
                            <label className="title">시작일</label>
                            <input type="date" name="startday" style={{fontFamily:"AppleSDGothicNeoM00"}}/>
                            <label className="title">종료일</label>
                            <input type="date" name="endday" style={{fontFamily:"AppleSDGothicNeoM00"}}/>
                        </div>
                        <div>
                            <label className="title">참여자</label>
                            <input className="input" placeholder="참여자를 선택해주세요."/>
                        </div>
                        <div>
                            <label className="title">내용</label>
                            <textarea style={{height:"20vh"}} className="input" placeholder="프로젝트 내용을 입력해주세요."/>
                        </div>
                        <button type="submit" className="submit_btn" style={{fontFamily:"AppleSDGothicNeoM00"}} onClick={close}>등록</button>
                    </form>

                </section>
            ) : null}

        </div>
    )
}

export default ProjectModal;