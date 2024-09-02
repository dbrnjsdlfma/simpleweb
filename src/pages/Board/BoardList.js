import '../../styles/boardList.css'
import React , { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Cookies ,useCookies } from 'react-cookie'
function BoardList() {
    const [boardList , setBaordList] = useState([])
    const navigate = useNavigate()
    const [cookie] = useCookies(['token'])
    const token = cookie.token
    const cookies = new Cookies()
    const getBoardList = async() => {
        await fetch("http://127.0.0.1:5300/api/board")
        .then(res => res.json())
        .then(res => {
            setBaordList(res.boardData)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const moveWrite = () => {
        navigate('/boardWrite')
    }

    const moveLogin = () => {
        navigate('/')
    }

    const logout = () => {
        cookies.remove('token')
        moveLogin()
    }

    useEffect(() => {
        getBoardList()
    },[])

    return (
        <div className='container'>
            <h2>게시판</h2>
            {token ? <button className='logButton' type='button' onClick={logout}>로그아웃</button> :
             <button className='logButton' type='button' onClick={moveLogin}>로그인</button> }
            <table>
                <thead>
                    <tr>
                        <td><strong>No.</strong></td>
                        <td><strong>제목</strong></td>
                        <td><strong>내용</strong></td>
                        <td><strong>작성자</strong></td>
                        <td><strong>작성일</strong></td>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board) => {
                        return (
                            <>
                                <tr key={board.idx}>
                                    <td>{board.idx}</td>
                                    <td>
                                        <Link className='linkCSS' to={`/board/${board.idx}`}>{board.title}</Link>
                                    </td>
                                    <td>{board.contents}</td>
                                    <td>{board.createdBy}</td>
                                    <td>{board.createdAt.slice(0,10)}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            {token ? 
            <div className='write-container'>
                <button type='button' onClick={moveWrite}>글쓰기</button>
            </div> : <></> }
        </div>
    )
}

export default BoardList