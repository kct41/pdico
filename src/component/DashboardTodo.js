import '../css/DashboardTodo.css';
import Todo from '../component/Todo';

function DashboardTodo(){
    return(
        <div className="dashboard__todo">
            <h2>오늘 할 일</h2>
            <div className="todo__section">
                <Todo title="PDICO 프로젝트" detail="대시보드 디자인 초안 완성"/>
                <Todo title="PDICO 프로젝트" detail="메세지 디자인 초안 완성"/>
                <Todo title="PDICO 프로젝트" detail="스케줄 디자인 초안 완성"/>
                <Todo title="PDICO 프로젝트" detail="채팅 디자인 초안 완성"/>
            </div>
        </div>
    )
}

export default DashboardTodo;