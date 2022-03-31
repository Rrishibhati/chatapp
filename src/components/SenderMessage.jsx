function SenderMessage({ message }) {

    if (message.attachments && message.attachments.length > 0) {

        return (
            <img
                src={message.attachments[0].file}
                alt='message-attachment'
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }

    return (
        <div className="message sender-msg">
            {message.text}
        </div>
    )
}

export default SenderMessage