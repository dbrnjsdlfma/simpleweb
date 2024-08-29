import React , { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function BoardList() {
    const [boardList , setBaordList] = useState([])
    const navigate = useNavigate()

    const getBoardList = async() => {
        await fetch("http://127.0.0.1:5300/api/board")
        .then(res => res.json())
        .then(res => {
            setBaordList(res.boardData)
        })
    }

    const moveWrite = () => {
        navigate('/boardWrite')
    }

    useEffect(() => {
        getBoardList()
    },[])

    return (
        <div>
            <ul>
                {boardList.map((board) => {
                    return (
                        <li key={board.idx}>
                            <Link to={`/board/${board.idx}`}>{board.title}</Link>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button type='button' onClick={moveWrite}>글쓰기</button>
            </div>
        </div>
    )
}

export default BoardList