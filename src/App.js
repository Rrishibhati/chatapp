import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';

import './App.css';

function App() {
  
  const username = localStorage.getItem('username'); 
  const password = localStorage.getItem('password'); 
  
  if(!username) return <Login />

  return (
    <div className="App">
      {/* https://chatengine.io/projects */}
      <ChatEngine
        height='100vh'
        userName={username}
        userSecret={password}
        projectID='24339a4b-4e16-4fe3-863b-e034b6f937b7'

        renderChatFeed={ (chatAppProps) => <ChatFeed {...chatAppProps} /> }
        onNewMessage= {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
		/>
    </div>
  );
}

export default App;
