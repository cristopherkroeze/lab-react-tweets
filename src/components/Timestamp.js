function Timestamp (props) {
    console.log("props", props)
            return (
                <span className="timestamp">{props.time}</span>
            )
    }
    
    export default Timestamp;