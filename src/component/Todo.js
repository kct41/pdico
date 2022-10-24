import '../css/Todo.css';

function Todo({title, detail}){
    return(
        <div className="todo">
            <span></span>
            <div className="title">
                <h4>{title}</h4>
                <p>{detail}</p>
            </div>
            <label className="check">
                <input defaultChecked type="checkbox"/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Todo;