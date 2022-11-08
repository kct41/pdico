import '../css/DashboardCalendar.css';
import {Calendar} from "react-calendar";
import React from "react";

function DashboardCalendar(){
    return(
        <div className="dashboard__calendar">
            <Calendar/>
        </div>
    )
}

export default DashboardCalendar;