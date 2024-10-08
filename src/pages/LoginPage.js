import '../styles/loginPage.css'
import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function LoginPage () {
    const navigate = useNavigate()
    const [cookie , setCookie] = useCookies(['token'])
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
                setCookie('token', res.token , {path : '/'})
                alert(`${res.name}님 방문을 환영합니다`)
                navigate('/boardList')
            } else {
                alert(`${res.message}`)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const naviRegister = () => {
        navigate('/register')
    }

    const naviSearchPW = () => {
        navigate('/searchPW')
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
                <button type="button" onClick={naviRegister}>회원가입</button>
                <button type="button" onClick={naviSearchPW}>계정찾기</button>
            </form>
        </div>
    )
}

export default LoginPage