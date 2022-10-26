import '../src/css/Calendar.css';
import {Calendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import TopBar from "./component/TopBar";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import React from "react"; // a plugin!
import ko from '@fullcalendar/core/locales/ko';

function myCalendar(){
    return(
        <div className="calendar">
            <TopBar title="달력"/>
            <div className="flex__box">
                <div className="menu">
                    <Calendar   />
                    <div className="category__box">
                        <h2>카테고리</h2>
                        <div className="category">
                            <span className="company"><FontAwesomeIcon icon={faCheck} /></span><p>회사 스케줄</p>
                        </div>
                        <div className="category">
                            <span className="team"><FontAwesomeIcon icon={faCheck} /></span><p>팀 스케줄</p>
                        </div>
                        <div className="category">
                            <span className="personal"><FontAwesomeIcon icon={faCheck} /></span><p>개인 스케줄</p>
                        </div>
                        <div className="category">
                            <span className="room"><FontAwesomeIcon icon={faCheck} /></span><p>회의실 스케줄</p>
                        </div>
                    </div>
                </div>
                <div className="calendar__area">
                    <FullCalendar
                        locale={ko}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                        plugins={[ dayGridPlugin, timeGridPlugin, ]}
                        initialView="dayGridMonth"
                    />
                </div>
            </div>
        </div>
    )
}

export default myCalendar;