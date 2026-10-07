import { useState } from "react";

function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") {
      return;
    }

    onSendMessage(message);

    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="message-input-container">

      <button className="emoji-button">
        😊
      </button>

      <input
        type="text"
        placeholder="Écrire un message"
        value={message}
        onChange={(event) =>
          setMessage(event.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <button
        className="send-button"
        onClick={handleSend}
      >
        ➤
      </button>

    </div>
  );
}

export default MessageInput;