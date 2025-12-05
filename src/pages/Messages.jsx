import React, { useState } from 'react';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';
import Button from '../components/Button';

// Mock Data for Contacts
const CONTACTS = [
  { id: 1, name: "Aliyu Dangote", role: "Investor", lastMsg: "I am interested in the solar project.", time: "10:30 AM", unread: 2, avatar: "AD" },
  { id: 2, name: "Fatima Zahra", role: "Entrepreneur", lastMsg: "Here is the pitch deck you asked for.", time: "Yesterday", unread: 0, avatar: "FZ" },
  { id: 3, name: "GreenFund VC", role: "Venture Capital", lastMsg: "Let's schedule a meeting for Tuesday.", time: "Mon", unread: 0, avatar: "GF" },
];

const Messages = () => {
  const [activeChat, setActiveChat] = useState(CONTACTS[0]);
  const [messageInput, setMessageInput] = useState("");
  
  // Mock Messages for the active chat
  const [messages, setMessages] = useState([
    { id: 1, sender: "them", text: "Salam, I saw your proposal for SolarMax.", time: "10:00 AM" },
    { id: 2, sender: "me", text: "Wa alaikum salam! Thank you for reaching out.", time: "10:05 AM" },
    { id: 3, sender: "me", text: "We are currently looking for 5M in funding.", time: "10:06 AM" },
    { id: 4, sender: "them", text: "I am interested in the solar project. Can you send the financials?", time: "10:30 AM" },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    // Add new message to list
    setMessages([...messages, { id: Date.now(), sender: "me", text: messageInput, time: "Now" }]);
    setMessageInput("");
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      
      {/* 1. LEFT SIDEBAR: Contact List */}
      <div className="w-full md:w-80 border-r border-gray-200 flex flex-col bg-gray-50">
        
        {/* Search Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-bold text-brand-dark mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent focus:bg-white border focus:border-brand-blue rounded-lg text-sm outline-none transition"
            />
          </div>
        </div>

        {/* Contacts List */}
        <div className="flex-1 overflow-y-auto">
          {CONTACTS.map((contact) => (
            <div 
              key={contact.id} 
              onClick={() => setActiveChat(contact)}
              className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-100 transition border-b border-gray-100 ${activeChat.id === contact.id ? 'bg-blue-50 border-l-4 border-l-brand-blue' : ''}`}
            >
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold shrink-0">
                {contact.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className={`text-sm font-semibold truncate ${activeChat.id === contact.id ? 'text-brand-blue' : 'text-gray-900'}`}>{contact.name}</h4>
                  <span className="text-xs text-gray-400">{contact.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{contact.lastMsg}</p>
              </div>
              {contact.unread > 0 && (
                <div className="w-5 h-5 bg-brand-gold text-brand-dark rounded-full flex items-center justify-center text-[10px] font-bold mt-2">
                  {contact.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. RIGHT SIDE: Conversation Area */}
      <div className="hidden md:flex flex-1 flex-col bg-white">
        
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
              {activeChat.avatar}
            </div>
            <div>
              <h3 className="font-bold text-brand-dark">{activeChat.name}</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <button className="p-2 hover:bg-gray-100 rounded-full"><Phone size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><Video size={20} /></button>
            <button className="p-2 hover:bg-gray-100 rounded-full"><MoreVertical size={20} /></button>
          </div>
        </div>

        {/* Chat Messages Feed */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[70%] px-5 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'me' 
                    ? 'bg-brand-blue text-white rounded-br-none' 
                    : 'bg-white text-gray-700 border border-gray-200 rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>
                <span className={`text-[10px] block mt-1 text-right ${msg.sender === 'me' ? 'text-blue-200' : 'text-gray-400'}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <form onSubmit={handleSend} className="flex gap-2 items-center">
            <button type="button" className="p-2 text-gray-400 hover:bg-gray-100 rounded-full">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type a message..." 
              className="flex-1 p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue text-sm"
            />
            <button 
              type="submit" 
              className="p-3 bg-brand-blue text-white rounded-xl hover:bg-blue-800 transition shadow-lg active:scale-95 disabled:opacity-50"
              disabled={!messageInput.trim()}
            >
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Messages;