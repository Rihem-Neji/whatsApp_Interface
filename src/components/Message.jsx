function Message({ message }) {
  return (
    <div
      className={
        message.sender === "sent"
          ? "message-row sent"
          : "message-row received"
      }
    >
      <div className="message-bubble">
        <span className="message-text">
          {message.text}
        </span>

        <span className="message-time">
          {message.time}
        </span>
      </div>
    </div>
  );
}

export default Message;