import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function BoardList() {
    const [boardList , setBaordList] = useState([])

    const getBoardList = async() => {
        await fetch("http://127.0.0.1:5300/api/board")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setBaordList(res.boardData)
            // res.boardData.map((data) => {
            //     setBaordList(data)
            // })
        })
    }
    
    console.log(boardList)

    useEffect(() => {
        getBoardList()
    },[])

    return (
        <div>
            <ul>
                {boardList.map((board) => {
                    console.log(board)
                    return (
                        <li key={board.idx}>
                            <Link to={`/board/${board.idx}`}>{board.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default BoardList