import '../css/TopBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {faSquarePlus} from "@fortawesome/free-regular-svg-icons";
import BoardModal from "./Modals/BoardModal";
import ProjectModal from "./Modals/ProjectModal";
import {useState} from "react";

function TopBar({title, board, project}) {

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <div className="top__bar">
                <div className="title__box">
                    <h1>{title}</h1>
                    {board &&
                        <>
                            <button onClick={openModal}><FontAwesomeIcon icon={faSquarePlus}/></button>
                            <BoardModal open={modalOpen} close={closeModal}></BoardModal>
                        </>
                    }
                    {project &&
                        <>
                            <button onClick={openModal}><FontAwesomeIcon icon={faSquarePlus}/></button>
                            <ProjectModal open={modalOpen} close={closeModal}></ProjectModal>
                        </>
                    }
                </div>

                <div>
                    <input placeholder="Search" className="search__bar"/>
                    <div className="bell"><FontAwesomeIcon icon={faBell}/></div>
                </div>
            </div>
        </>
    )
}

export default TopBar;