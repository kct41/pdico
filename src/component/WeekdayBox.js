import '../css/WeekdayBox.css';

function WeekdayBox(){
    return(
        <div className="box">
            <div className="date">
                <h5>목</h5>
                <p>20일</p>
            </div>
            <div className="flex__box">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default WeekdayBox;