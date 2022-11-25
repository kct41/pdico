import '../css/TopBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faSquarePlus} from "@fortawesome/free-regular-svg-icons";
import BoardModal from "./Modals/BoardModal";
import {useState} from "react";

function TopBar({title,btn,board}){

    // const [modalOpen, setModalOpen] = useState(false);
    // const openModal = () => {
    //     setModalOpen(true);
    // }
    // const closeModal = () => {
    //     setModalOpen(false);
    // }

    return(
        <div className="top__bar">
            <div className="title__box">
                <h1>{title}</h1>
                {btn && board && <button><FontAwesomeIcon icon={faSquarePlus} /></button>}
            </div>

            <div>
                <input placeholder="Search" className="search__bar"/>
                <div className="bell"><FontAwesomeIcon icon={faBell}/></div>
            </div>
            {/*<BoardModal open={modalOpen} close={closeModal}></BoardModal>*/}
        </div>
    )
}

export default TopBar;