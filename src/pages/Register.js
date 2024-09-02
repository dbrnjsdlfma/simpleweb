import '../styles/register.css'
import React , { useState } from "react"
import { useNavigate } from 'react-router-dom'
function Register() {
    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ name , setName ] = useState("")
    
    const navigate = useNavigate()
    const moveLoginPage = () => {
        navigate('/');
    }

    const handleRegister = async() => {
        await fetch('http://127.0.0.1:5300/api/user/register', {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify({
                email : email ,
                password : password ,
                name : name
            })
        })
        .catch(e => console.log(e))
        .then(res => res.json())
        .then((res) => {
            if(res.code === 200) {
                alert("회원가입이 완료되었습니다.")
                moveLoginPage();
            }
        })
    }
    return (
        <div className="register-wrapper">
            <div className="register-header">
                <h2>회원가입</h2>
            </div>
            <div className="register-body">
                <label><b>이메일</b></label><input type="text" name="email" onChange={e => setEmail(e.target.value)}/>
                <label><b>패스워드</b></label><input type="text" name="password" onChange={e => setPassword(e.target.value)}/>
                <label><b>이름</b></label><input type="text" name="name" onChange={e => setName(e.target.value)}/>
                <button onClick={handleRegister}>회원 가입</button>
                <button onClick={moveLoginPage}>취소</button>
            </div>
        </div>
    )
}

export default Register