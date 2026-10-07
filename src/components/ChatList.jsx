import ChatItem from "./ChatItem";

function ChatList({
  chats,
  selectedChatId,
  onSelectChat
}) {
  return (
    <div className="chat-list">

      <div className="chat-list-header">
        <h4>Messages</h4>

        <button className="new-chat-button">
          ✎
        </button>
      </div>

      <div className="search-box">
        🔍
        <input
          type="text"
          placeholder="Rechercher une discussion"
        />
      </div>

      <div className="chats">
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            selected={chat.id === selectedChatId}
            onClick={onSelectChat}
          />
        ))}
      </div>

    </div>
  );
}

export default ChatList;