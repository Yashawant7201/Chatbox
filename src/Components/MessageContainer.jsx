import { useState, useEffect } from "react";
import "./MessageContainer.css";

export default function MessageContainer({selectedUser}){
    const [messages, setMessages] = useState({});
    const [inputText, setInputText] = useState("");

    
//Initialize messages for selected user when they are selected
   useEffect(() => {
        if (selectedUser && !messages[selectedUser.id]) {
        setMessages(prev => ({
        ...prev,
        [selectedUser.id]: []
        }));
        }
        }, [selectedUser]); // Removed messages from dependencies to avoid infinite loop

        const handleSendMessage = () => {
        if (!selectedUser || !inputText.trim()) return;
        

        const newMessage = {
        id: Date.now(),
        text: inputText,
        timestamp: new Date().toLocaleTimeString(),
        sender: "you"
        };

        setMessages(prev => ({
        ...prev,
        [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage]
        }));

        setInputText("");
        };

        const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
        handleSendMessage();
        }
        };

        if (!selectedUser) {
        return (
        <div className="message-container empty">
        <div className="empty-state">
        <p>Select a user to start chatting</p>
        </div>
        </div>
        );
        }

        const currentMessages = messages[selectedUser.id] || [];

        return (
        <div className="message-area">
        <div className="message-header">
        <h3>Chat with {selectedUser.name}</h3>
        </div>
        <div className="message-container">
        {currentMessages.length === 0 ? (
        <div className="empty-chat">
        <p>No messages yet. Start the conversation!</p>
        </div>
        ) : (
        currentMessages.map(message => (
        <div key={message.id} className="message-bubble">
        <p className="message-text">{message.text}</p>
        <span className="message-time">{message.timestamp}</span>
        </div>
        ))
        )}
        </div>
        <div className="input-area">
        <input
        type="text"
        className="message-input"
        placeholder={`Type a message to ${selectedUser.name}...`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
/>
<button className="send-button" onClick={handleSendMessage}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
</svg>
</button>
</div>
</div>
)
};