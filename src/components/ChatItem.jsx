function ChatItem({ chat, selected, onClick }) {
  return (
    <div
      className={
        selected
          ? "chat-item selected"
          : "chat-item"
      }
      onClick={() => onClick(chat.id)}
    >
      <div className="avatar">
        {chat.initials}
      </div>

      <div className="chat-info">
        <div className="chat-top">
          <h6>{chat.name}</h6>
          <span>{chat.time}</span>
        </div>

        <p>{chat.lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatItem;