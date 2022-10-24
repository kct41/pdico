import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../src/css/Login.css';

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (event) => {
        setInputId(event.target.value)
    }

    const handleInputPw = (event) => {
        setInputPw(event.target.value)
    }

    const onClickLogin = () => {
        console.log('Click login...')
    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('/user_inform/login')
            .then(res => console.log(res))
            .catch()
    }, [])

    return (
        <div className="login">
            <h1>로그인</h1>
            <form>
                <div className="form-group form-id">
                    <input type="text" name="input_id" value={inputId} onChange={handleInputId} required />
                    <label htmlFor='input_id'>ID</label>
                </div>
                <div className="form-group form-password">
                    <input type="text" name="input_pw" value={inputPw} onChange={handleInputPw} required />
                    <label htmlFor='input_pw'>PASSWORD</label>
                </div>
                <button type='button' onClick={onClickLogin}>LOGIN</button>
            </form>
        </div>
    )
}

export default Login;