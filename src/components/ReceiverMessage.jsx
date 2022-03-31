
function ReceiverMessage({ lastMessage, message }) {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;



    return (
        <div className="message-row">
            {/* For the very first message */}
            {isFirstMessageByUser && (
                <div className="message-avtar"
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                >

                </div>
            )}

            {/* if the message is a attachment */}
            { message.attachments && message.attachments.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt='message-attachment'
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div className="message receiver-msg" >
                        {message.text}
                    </div>
                )
            }

        </div>
    )
}

export default ReceiverMessage