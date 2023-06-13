import '../css/PostBoard.css';
import Post from "./Post";
import {useEffect, useState} from "react";

function PostBoard({title}) {

    const [posts, setPosts] = useState([]);

    function getData(){
        fetch("http://localhost:3001/posts")
            .then((response) => response.json()) //받아온 데이터를 json 형식으로 변환
            .then((json)=>{setPosts(json)
            });
    }

    useEffect(getData,[]);

    return (
        <div className="post__board">
            <div className="board__title">
                <span></span>
                <h3>{title}</h3>
            </div>
            <div className="post__area">
                <Post
                    username="김소미"
                    date="2022년 10월 19일 18:03 PM"
                    title="10월 패밀리데이 시행 안내"
                    text="10월 28일 금요일 패밀리데이를 시행할 예정입니다."
                    reply="2"
                />
                {posts.map((post)=>(
                    <Post username={post.author} title={post.title} text={post.text} date={post.time}/>
                ))}
            </div>
        </div>
    )
}

export default PostBoard;