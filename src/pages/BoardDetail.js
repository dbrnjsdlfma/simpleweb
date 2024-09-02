import Boards from "./Boards"
import '../styles/boardDetail.css'
import React , { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"

function BoardDetail() {
    const { idx } = useParams()
    const navigate = useNavigate()
    const [ board , setBoard ] = useState({})
    const containerStyle = {
        margin: "5rem" ,
        padding : "2rem" ,
    }
    const h2Style = {
        fontSize: "2.5rem" ,
        marginBottom: "2rem" ,
    }
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
        <div style={containerStyle}>
            <h2 style={h2Style}>게시판</h2>
            <div className="container-box">
                <Boards
                    idx={board.idx}
                    title={board.title}
                    contents={board.contents}
                    createdBy={board.createdBy}
                    createdAt={board.createdAt}
                />
                <div className="container-body">
                    <span>{board.contents}</span>
                </div>
                <div className="container-foot">
                    <table>
                        <tbody>
                            <tr>
                                <td>이전글</td>
                                <td>없음</td>
                            </tr>
                            <tr>
                                <td>다음글</td>
                                <td>이벤트 공지 안내</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button type="button" onClick={naviBoard}>목록</button>
        </div>
    )
}

export default BoardDetail