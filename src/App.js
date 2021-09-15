import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="2a15fcff-6d0e-477b-af18-41ea9562c602"
      userName="user1"
      userSecret="098765"
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
