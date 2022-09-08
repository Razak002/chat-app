import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

function App() {
  return (
    <ChatEngine
      height='100vh'
      projectID="
0d935d60-d993-49c0-8e2b-be414077d217"
      userName="Abdulrazak"
      userSecret="0067"
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}



export default App;
