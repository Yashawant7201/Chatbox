

import "./ChatBox.css"


export default function ChatBox({onUserSelect, selectedUser}){
    const users = [
        {id:1, name: "User1"},
        {id:2, name: "User2"},
        {id:3, name: "User3"},
        {id:4, name: "User4"}
    ];

    // console.log('ChatBox rendering, users:', users);

    const handleUserClick = (user) => {
        // console.log('User clicked:', user);
        onUserSelect(user);
};

  return (
   
        <div className="chat-panel">
            <ul className="user-list">
                {users.map( user => {
                 return   <li key={user.id} className={`user-item ${selectedUser?.id === user.id ? 'active' : ''}`}
            onClick={() => handleUserClick(user)}>{user.name}</li>
                })}
            </ul>
        </div>
       
            
        
    
)
};
