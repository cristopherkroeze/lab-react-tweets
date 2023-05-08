function Message (props) {
    console.log("props", props)
            return (
                <p className="message">
                {props.message}
              </p>
            )
    }
    
export default Message;


