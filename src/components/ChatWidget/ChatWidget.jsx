import React, { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

const AI_RESPONSES = [
  "Welcome to NokNok! We help connect talent with opportunities through innovative interview solutions. How can I assist you today?",
  "NokNok offers features like mock interviews, media house connections, and career guidance. Would you like to know more about any of these?",
  "You can give an interview by navigating to the 'Give Interview' page. We support various formats to match your needs!",
  "Our platform connects candidates with top media houses and companies. Check out the Media House section for more details.",
  "Need help with your profile or interview prep? NokNok provides tools and resources to help you succeed!",
  "You can reach our team through the Contact Us page. We'd love to hear from you!",
  "NokNok is designed to make the interview process seamless for both candidates and recruiters.",
  "Looking to improve your interview skills? Try our practice sessions to build confidence before the real thing.",
];

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm NokNok's AI assistant. How can I help you today?", sender: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { text: trimmed, sender: 'user' };
    const aiReply = {
      text: AI_RESPONSES[Math.floor(Math.random() * AI_RESPONSES.length)],
      sender: 'ai',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [...prev, aiReply]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {isOpen && (
        <div className="chat-widget-window">
          <div className="chat-widget-header">
            <span className="chat-widget-header-title">NokNok AI Assistant</span>
            <button className="chat-widget-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
          </div>

          <div className="chat-widget-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg ${msg.sender === 'ai' ? 'chat-msg-ai' : 'chat-msg-user'}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-widget-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button className="chat-widget-send" onClick={handleSend}>
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <button
        className="chat-widget-bubble"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
      </button>
    </>
  );
}

export default ChatWidget;
