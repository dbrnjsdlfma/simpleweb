import '../styles/searchPW.css'
import React , { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function SearchPW() {
    const navigate = useNavigate()
    const [ email , setEmail ] = useState('')
    const [ name , setName ] = useState('')

    const moveLoginPage = () => {
        navigate('/')
    }
    const handleSearchPW = async() => {
        await fetch('http://127.0.0.1:5300/api/user/searchPW', {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            } ,
            body : JSON.stringify({
                email : email ,
                name : name
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.code === 200) {
                alert(`${res.message}`)
                moveLoginPage()
            } else if(res.code === 401){
                alert(`${res.message}`)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="searchPW-wrapper">
            <div className="searchPW-header">
                <h2>계정찾기</h2>
            </div>
            <div className="searchPW-body">
                <label><b>이메일</b></label><input type="text" name="email" onChange={e => setEmail(e.target.value)}/>
                <label><b>이름</b></label><input type="text" name="name" onChange={e => setName(e.target.value)}/>
                <button onClick={handleSearchPW}>찾기</button>
                <button onClick={moveLoginPage}>취소</button>
            </div>
        </div>
    )
}

export default SearchPW