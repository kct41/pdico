import '../src/css/Chat.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import {faEllipsis, faMagnifyingGlass, faPhone, faVideo} from "@fortawesome/free-solid-svg-icons";



function Chat(){
    return(
        <>
            <div className="chat-upperbar">
                <div className="chat_title">채팅</div>
                <div className="chat-plus">
                    <FontAwesomeIcon icon={faSquarePlus} />
                </div>
            </div>
            <div className="chat">
                <div className="chatLeft">
                    <div className="chatList_search_container">
                        <input className="chatList_search" placeholder="Search..."/>
                        <div className="magnifyingGlass">
                            <FontAwesomeIcon icon={faMagnifyingGlass}   />
                        </div>
                    </div>
                    <div className="chatList_container">
                    </div>
                </div>
                <div className="chatMiddle">
                    <div className="chatting_upper">
                        <div className="chatUser">
                        </div>
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
                    </div>
                </div>
            </div>
        </>

    )
}

export default Chat;