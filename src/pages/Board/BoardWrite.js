import '../../styles/boardWrite.css'
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
function BoardWrite() {
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
    const createBoard = async() => {
        await fetch('http://127.0.0.1:5300/api/board', {
            method : 'POST' ,
            headers : {
                'Content-Type': 'application/json', 
           } ,
           credentials : 'include' ,
           body : JSON.stringify({
               title: title ,
               contents : contents ,
           })
        })
        .then(res => res.json())
        .then(res => {
            if(res.code === 200) {
                alert('게시글 등록 성공!!')
                navigate('/boardList')
            } else {
                alert('등록 실패')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    const backToList = () => {
        navigate('/boardList')
    }
    return (
        <div className='boardWrite-container'>
            <h2>게시글 작성</h2>
            <div className='boardWrite-header'>
                <input type="text" name="title" value={title} onChange={onChange} placeholder='제목을 입력해 주세요'/>
            </div>
            <br/>
            <div className='boardWrite-body'>
                <textarea
                    name="contents"
                    cols="30"
                    rows="10"
                    value={contents}
                    placeholder='내용을 입력해주세요'
                    onChange={onChange}
                ></textarea>
            </div>
            <div className='boardWrite-footer'>
                <button type="button" onClick={createBoard}>저장</button>
                <button type="button" onClick={backToList}>취소</button>
            </div>
        </div>
    )
}

export default BoardWrite