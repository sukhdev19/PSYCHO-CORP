import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { FiMessageSquare } from 'react-icons/fi';

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { backendUrl, token } = useContext(AppContext);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages([...messages, { sender: 'user', text: userMessage }]);
    setInput('');

    try {
      const response = await axios.post(`${backendUrl}/api/chatbot`, { message: userMessage });
      const botMessage = response.data.reply;
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botMessage },
      ]);
    } catch (error) {
      console.error("Error sending message to chatbot:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: 'Error: Unable to get response.' }
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleChat}
        className="p-3 bg-[#38dbdb] text-white rounded-full shadow-lg hover:bg-cyan-700 transition flex items-center justify-center"
        aria-label="Chat with us"
      >
        <FiMessageSquare size={24} />
      </button>

      {isOpen && (
        <div className="w-80 rounded-lg shadow-lg mt-2 p-4 flex flex-col text-gray-900 dark:text-white bg-[#38dbdb] dark:bg-gray-800">
          <h2 className="text-2xl text-center mb-3 text-white">Chat with Us</h2>

          <div className="flex-1 overflow-y-auto max-h-72 border-b border-gray-300 dark:border-gray-600 mb-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-gray-900 text-white self-end dark:bg-gray-200 dark:text-black'
                    : 'bg-white text-black self-start dark:bg-gray-900 dark:text-white'
                }`}
              >
                {msg.sender === 'user' ? 'You: ' : 'Bot: '}
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex items-center mt-2 space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="px-3 py-2 bg-white text-[#38dbdb] rounded-lg hover:bg-gray-300 transition "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPopup;
