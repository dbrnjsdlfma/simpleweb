function Boards(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h5>{props.createdBy}</h5><hr/>
            <p>{props.contents}</p>
        </div>
    )
}

export default Boards