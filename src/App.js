import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* https://chatengine.io/projects */}
      <ChatEngine
        height='100vh'
        userName='rishi'
        userSecret='admin123'
        projectID='24339a4b-4e16-4fe3-863b-e034b6f937b7'
		/>
    </div>
  );
}

export default App;
