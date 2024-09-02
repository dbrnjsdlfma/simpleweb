
function Boards(props) {
    return (
        <div className='container-hearder'>
            <table>
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>{props.title}</td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>{props.createdBy}</td>
                    </tr>
                    <tr>
                        <td>작성일</td>
                        <td>{props.createdAt}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Boards