import Boards from "./Boards"
import '../../styles/boardDetail.css'
import React , { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
// import { Cookies ,useCookies } from 'react-cookie'

function BoardDetail() {
    const { idx } = useParams()
    const navigate = useNavigate()
    const [checkValue , setCheckValue] = useState(false)
    const [ board , setBoard ] = useState({})
    const containerStyle = {
        margin: "5rem" ,
        padding : "2rem" ,
    }
    const h2Style = {
        fontSize: "2.5rem" ,
        marginBottom: "2rem" ,
    }
    const boardByCheck = async() => {
        await fetch(`http://127.0.0.1:5300/api/board/boardByCheck/${idx}`, {
            method : 'GET' ,
            headers : {
                'Content-Type': 'application/json', 
           } ,
           credentials : 'include' ,
        })
        .then(res => res.json())
        .then(res => {
            if(res.code === 200) {
                setCheckValue(true)
            } else {
                setCheckValue(false)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getBoard = async() => {
        await fetch(`http://127.0.0.1:5300/api/board/${idx}`)
        .then(res => res.json())
        .then(res => {
            boardByCheck()
            setBoard(res.board)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const naviBoard = () => {
        navigate('/boardList')
    }
    const naviAlter = () => {
        navigate(`/boardAlter/${idx}`)
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
            </div>
            <footer>
                <button className='buttonSTY' type="button" onClick={naviBoard}>목록</button>
                {checkValue ? <button type="button" onClick={naviAlter}>글 수정</button> : <></>}
            </footer>
        </div>
    )
}

export default BoardDetail