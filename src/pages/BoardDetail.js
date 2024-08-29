import Boards from "./Boards"
import React , { useStaet , useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

function BoardDetail() {
    const { idx } = useParams()
    const [ board , setBoard ] = useState({})
    const getBoard = async() => {
        await fetch(`http://127.0.0.1:5300/api/board/${idx}`)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setBoard(res.board)
        })
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
        </div>
    )
}

export default BoardDetail