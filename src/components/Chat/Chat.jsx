import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

const Chat = ({ editorText }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [initialContextSent, setInitialContextSent] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen && !initialContextSent && editorText) {
            sendInitialContext();
            setInitialContextSent(true);
        }
    };

    const sendInitialContext = async () => {
        try {
            await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo",
                messages: [{ role: "system", content: editorText }],
            }, {
                headers: {
                    'Authorization': `Bearer sk-proj-X7MYnsmxCuf3JzH3OFVzT3BlbkFJWxuYDwEOjiHJIAe7TK85`,
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
        } catch (error) {
            console.error("Error sending initial context:", error);
        }
    };

    const sendMessage = async (sender, messageContent, isInitialContext = false) => {
        if (messageContent.trim()) {
            const newMessage = {
                content: messageContent,
                sender,
                timestamp: new Date().toLocaleTimeString(),
                status: "Delivered",
            };
            setMessages(prevMessages => [...prevMessages, newMessage]);

            if (sender === "User") {
                const chatMessages = [{ role: "system", content: editorText }];
                if (!isInitialContext) {
                    chatMessages.push({ role: "user", content: messageContent });
                }

                try {
                    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                        model: "gpt-3.5-turbo",
                        messages: chatMessages,
                    }, {
                        headers: {
                            'Authorization': 'Bearer sk-proj-X7MYnsmxCuf3JzH3OFVzT3BlbkFJWxuYDwEOjiHJIAe7TK85',
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    });
                    const botMessage = response.data.choices[0].message.content;
                    sendMessage("Bot", botMessage);
                } catch (error) {
                    console.error("Error communicating with OpenAI:", error);
                    sendMessage("Bot", "da ba cacatule.");
                }
            }
        }
    };

    const handleInputChange = (event) => setInputValue(event.target.value);

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && inputValue.trim()) {
            sendMessage("User", inputValue);
            setInputValue("");
        }
    };

    const messagesEndRef = useRef(null);
    const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button onClick={toggleChat} className="px-4 py-2 bg-orange-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Chat with Teacher
            </button>
            {isOpen && (
                <div className="mt-2 w-96 bg-white rounded-lg shadow-lg p-4">
                    <div className="overflow-y-auto h-[32rem] mb-4 space-y-6">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex items-end ${msg.sender === "User" ? "justify-end" : "justify-start"}`}>
                                {msg.sender !== "User" && (
                                    <img className="w-8 h-8 rounded-full" src="https://cdn-icons-png.freepik.com/512/180/180678.png" alt="Bot image" />
                                )}
                                <div className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 ${msg.sender === "User" ? "bg-blue-100 rounded-br-none" : "bg-gray-100 rounded-bl-none"} border border-gray-200`}>
                                    <span className="text-sm font-semibold">{msg.sender === "User" ? "You" : "Jeg"}</span>
                                    <p className="text-sm">{msg.content}</p>
                                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                                </div>
                                {msg.sender === "User" && (
                                    <img className="w-8 h-8 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToK_-LT9HmxfBNTsC0A8wfvjtfxKh3GjexbQ&s" alt="User image" />
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="flex items-center">
                        <input type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} className="flex-grow p-2 border rounded-l-lg focus:outline-none" placeholder="Type a message..." />
                        <button onClick={() => sendMessage("User", inputValue)} className="bg-blue-500 text-white px-4 rounded-r-lg">Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chat;
