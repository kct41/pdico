import '../src/css/Chat.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import {faEllipsis, faMagnifyingGlass, faPhone, faUser, faVideo} from "@fortawesome/free-solid-svg-icons";
import TopBar from "./component/TopBar";



function Chat(){
    return(
        <>
            <TopBar title="채팅" btn={true}/>
            <div className="chat">
                <div className="chatLeft">
                    <div className="chatList_search_container">
                        <input className="chatList_search" placeholder="Search..."/>
                        <div className="magnifyingGlass">
                            <FontAwesomeIcon icon={faMagnifyingGlass}   />
                        </div>
                    </div>
                    <div className="chatList_container">
                        <div className="chatList">
                            <div className="chatList_left">
                                <div className="chatList_user_photo">
                                    <FontAwesomeIcon icon={faUser}  />
                                </div>
                            </div>
                            <div className="chatList_middle">
                                <div className="chatList_user_name">Jerry</div>
                                <div className="chatList_chat_preview">안녕하세요</div>
                            </div>
                            <div className="chatList_right">
                                <div className="chat_count">3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chatMiddle">
                    <div className="chatting_upper">
                        <div className="chatUser">
                            <div className="chatUser_circle">
                                <FontAwesomeIcon icon={faUser}  />
                                <span   />
                            </div>
                        </div>
                        <div className="chatUser_name">Jerry</div>
                        <div className="chatIcon_container">
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faMagnifyingGlass}   />
                            </div>
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faVideo} />
                            </div>
                            <div className="iconBox">
                                <FontAwesomeIcon icon={faEllipsis} />
                            </div>
                        </div>
                    </div>
                    <div className="chatting_middle">
                        <ul>
                            <li>
                                <div className="outgoing_bubble">
                                    <div className="outgoing_comment">안녕하세요</div>
                                </div>
                                <div className="incoming_bubble">
                                    <div className="incoming_comment">반갑습니다</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="chatting_bottom">
                        <div className="chatting-plus">
                            <FontAwesomeIcon icon={faSquarePlus} />
                        </div>
                        <textarea className="messageBox" placeholder="메세지를 입력하세요."/>
                        <div className="sendMessage">
                            <FontAwesomeIcon icon={faPaperPlane}    />
                        </div>
                    </div>

                </div>
                <div className="chatRight">
                    <div className="address_upper">
                        <div className="address_title">주소록</div>
                    </div>
                    <div className="address_search_container">
                        <input className="address_search" placeholder="Search..."  />
                        <div className="magnifyingGlass">
                            <FontAwesomeIcon icon={faMagnifyingGlass}   />
                        </div>

                    </div>
                    <div className="addressList">
                        <div className="addr">
                            <div className="addrList_left">
                                <div className="addrUser_circle">
                                    <FontAwesomeIcon icon={faUser}  />
                                    <span></span>
                                </div>
                            </div>
                            <div className="addrList_right">
                                <div className="addrList_name">최정민</div>
                                <div className="addrList_department">PDIC Lab</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Chat;