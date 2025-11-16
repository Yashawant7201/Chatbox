import React, {useState} from "react";
import MessageContainer from "./Components/MessageContainer";
import ChatBox from "./Components/ChatBox";
import './App.css'

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  // console.log('App rendering, selectedUser:', selectedUser);
  
  return (
 <div className="container">
    {/* <Counter /> */}
    <ChatBox onUserSelect={setSelectedUser} selectedUser={selectedUser}/>
     <MessageContainer selectedUser={selectedUser}/>
    </div>
  )
}

export default App
