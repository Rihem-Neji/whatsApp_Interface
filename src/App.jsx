import { useState } from "react";

import NavigationBar from "./components/Navbarr";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

import { chats as initialChats } from "./data/chats";

function App() {

  const [chats, setChats] =
    useState(initialChats);

  const [selectedChatId, setSelectedChatId] =
    useState(1);

  const selectedChat =
    chats.find(
      (chat) => chat.id === selectedChatId
    );

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  const handleSendMessage = (text) => {

    const newMessage = {
      id: Date.now(),
      text: text,
      sender: "sent",
      time: new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      )
    };

    setChats((currentChats) =>
      currentChats.map((chat) => {

        if (chat.id === selectedChatId) {

          return {
            ...chat,

            messages: [
              ...chat.messages,
              newMessage
            ],

            lastMessage: text
          };
        }

        return chat;
      })
    );
  };

  return (
    <div className="app">

      <NavigationBar />

      <div className="whatsapp-container">

        <ChatList
          chats={chats}
          selectedChatId={selectedChatId}
          onSelectChat={handleSelectChat}
        />

        {selectedChat && (
          <ChatWindow
            chat={selectedChat}
            onSendMessage={handleSendMessage}
          />
        )}

      </div>

    </div>
  );
}

export default App;