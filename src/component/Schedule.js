import '../css/Schedule.css';

function Schedule({date, detail}){
    return(
        <div className="schedule">
            <h4>{date}</h4>
            <div className="schedule__detail">
                <span></span>
                <h5>{detail}</h5>
            </div>
        </div>
    )
}

export default Schedule;