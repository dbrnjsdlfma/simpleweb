import Boards from "./Boards"
import React , { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"

function BoardDetail() {
    const { idx } = useParams()
    const navigate = useNavigate()
    const [ board , setBoard ] = useState({})
    const getBoard = async() => {
        await fetch(`http://127.0.0.1:5300/api/board/${idx}`)
        .then(res => res.json())
        .then(res => {
            setBoard(res.board)
        })
    }
    const naviBoard = () => {
        navigate('/boardList')
    }
    useEffect(() => {
        getBoard()
    },[])

    return (
        <div>
            <Boards
                idx={board.idx}
                title={board.title}
                contents={board.contents}
                createdBy={board.createdBy}
            />
            <button type="button" onClick={naviBoard}>목록</button>
        </div>
    )
}

export default BoardDetail