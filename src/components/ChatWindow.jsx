import Message from "./Message";
import MessageInput from "./MessageInput";

function ChatWindow({
  chat,
  onSendMessage
}) {
  return (
    <div className="chat-window">

      {/* Header */}
      <div className="chat-header">

        <div className="chat-header-user">

          <div className="avatar">
            {chat.initials}
          </div>

          <div>
            <h5>{chat.name}</h5>

            <span>
              {chat.status === "online"
                ? "En ligne"
                : "Hors ligne"}
            </span>
          </div>

        </div>

        <div className="chat-actions">
          <button>🔍</button>
          <button>⋮</button>
        </div>

      </div>

      {/* Messages */}
      <div className="messages-container">

        <div className="date-label">
          Aujourd'hui
        </div>

        {chat.messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}

      </div>

      {/* Input */}
      <MessageInput
        onSendMessage={onSendMessage}
      />

    </div>
  );
}

export default ChatWindow;