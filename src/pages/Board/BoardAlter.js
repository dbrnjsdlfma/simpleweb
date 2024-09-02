import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"

function BoardAlter() {
    const { idx } = useParams()
    const navigate = useNavigate()
    const [board, setBoard] = useState({
        title : '',
        contents: '',
    })
    const {title, contents} = board
    const onChange = (event) => {
        const { value , name } = event.target
        setBoard({
            ...board ,
            [name] : value,
        })
    }
    const getBoard = async() => {
        await fetch(`http://127.0.0.1:5300/api/board/${idx}`)
        .then(res => res.json())
        .then(res => {
            setBoard(res.board)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const saveBoardAlter = async() => {
        await fetch(`http://127.0.0.1:5300/api/board/${idx}` , {
            method : 'PUT' ,
            headers : {
                 'Content-Type': 'application/json', 
            } ,
            credentials : 'include' ,
            body : JSON.stringify({
                title: board.title ,
                contents : board.contents ,
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.code === 200) {
                alert(`${res.message}`)
                backToBoard()
            } else {
                alert(`${res.message}`)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    const backToBoard = () => {
        navigate(`/board/${idx}`)
    }
    useEffect(() => {
        getBoard()
    },[])
    return (
        <div className='boardWrite-container'>
            <h2>게시글 수정</h2>
            <div className='boardWrite-header'>
                <input type="text" name="title" value={title} onChange={onChange}/>
            </div>
            <br/>
            <div className='boardWrite-body'>
                <textarea
                    name="contents"
                    cols="30"
                    rows="10"
                    value={contents}
                    onChange={onChange}
                ></textarea>
            </div>
            <div className='boardWrite-footer'>
                <button type="button" onClick={saveBoardAlter}>저장</button>
                <button type="button" onClick={backToBoard}>취소</button>
            </div>
        </div>
    )
}
export default BoardAlter 