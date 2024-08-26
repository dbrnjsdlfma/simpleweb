import '../styles/loginPage.css'
import React , { useState } from 'react'
function LoginPage () {
    const [ email , setEmail ] = useState("")
    const [ password , setPassword ] = useState("")

    const loginHandler = async(event) => {
        event.preventDefault();

        await fetch("http://127.0.0.1:5300/api/user/login", {
            method : 'POST' ,
            headers : {
                 'Content-Type': 'application/json', 
            } ,
            credentials : 'include' ,
            body : JSON.stringify({
                email: email ,
                password : password ,
            })
        })
        .then(res => res.json())
        .then((res) => {
            if(res.code === 200) {
                alert(`${res.name}님 방문을 환영합니다`)
            } else {
                alert(`${res.message}`)
            }
        })
    }
    return (
        <div className="login-wrapper">
            <h2>Login</h2> 
            <form className="login-form">
                <label>Email</label>
                <input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <button type="submit" onClick={loginHandler}>로그인</button>
            </form>
        </div>
    )
}

export default LoginPage