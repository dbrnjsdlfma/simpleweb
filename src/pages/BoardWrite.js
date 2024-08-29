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
    }
    const backToList = () => {
        navigate('/boardList')
    }
    return (
        <div>
            <div>
                <label>제목</label>
                <input type="text" name="title" value={title} onChange={onChange}/>
            </div>
            <br/>
            <div>
                <label>내용</label>
                <textarea
                    name="contents"
                    cols="30"
                    rows="10"
                    value={contents}
                    onChange={onChange}
                ></textarea>
            </div>
            <div>
                <button type="button" onClick={createBoard}>저장</button>
                <button type="button" onClick={backToList}>취소</button>
            </div>
        </div>
    )
}

export default BoardWrite