import './css/Home.css';
import { Routes, Route} from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import Chat from "./Chat";
import Board from "./Board";
import Project from "./Project";
import Login from "./Login";

function Home() {
    return (
        <div className="home">
            <Sidebar/>
            <div className="content">
                <Routes>
                    <Route index path="/home" element={<Dashboard/>}/>
                    <Route path="/calendar" element={<Calendar/>}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/board" element={<Board/>}/>
                    <Route path="/project" element={<Project/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Home;