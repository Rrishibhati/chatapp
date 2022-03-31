import MessageForm from "./MessageForm";
import SenderMessage from "./SenderMessage";
import ReceiverMessage from "./ReceiverMessage";

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props;
    
    const chat = chats && chats[activeChat];

    const renderReadReceipt = (message, isMyMessage) => {
        chat.people.map((person, index) => {
            return person.last_read === message?.id && (
                <div key={`read-${index}`} className="read-receipt" 
                     style={
                        { float : isMyMessage ? 'right' : 'left',
                         backgroundImage : person.person.avatar && `url(${person.person.avatar})`
                        }
                    }>

                </div>
            )
        }) 
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.username;
            
            return (
                <div key={`msg-${index}`} style={{ width : '100%'}} >
                    <div className="message-block">
                            {
                                isMyMessage 
                                ? <SenderMessage message={message} />
                                : <ReceiverMessage message={message} lastMessage={messages[lastMessageKey]} />
                            }

                        <div className="read-receipt" style={{ marginRight : isMyMessage ? '18px' : '0px', marginLeft : isMyMessage ? 
                            '0px' : '18px'  }}>
                                { console.log(message) }
                                {renderReadReceipt(message, isMyMessage)}
                        </div>
                    </div>
                    <br /><br />
                </div>
            )
        });
    }
    
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{ chat?.title }</div>
                <div className="chat-subtitle"></div>
            </div>

            {renderMessages()}
            <div style={{height : '100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed