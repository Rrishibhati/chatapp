import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

function MessageForm(props) {

  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (!!text) {
      sendMessage(creds, chatId, { text });
    }
    setValue('');
  }

  const handleUpload = (e) => {
    //sendMessage(creds, chatId, { files: e.target.files, text: '' })
  }


  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input type="text" className="message-input" value={value} onChange={handleChange} placeholder="Send a message..." />
      <label htmlFor='upload-btn' onClick={handleUpload}>
        <span className='image-button'>
          <PictureOutlined className='picture-icon' />
        </span>
      </label>

      <input type="file" multiple={false} id="upload-button" style={{ display: 'none' }} onChange={handleUpload.bind(this)} />

      <button type="submit" className='send-btn'>
        <SendOutlined className="send-icon" />
      </button>
    </form>
  )
}

export default MessageForm