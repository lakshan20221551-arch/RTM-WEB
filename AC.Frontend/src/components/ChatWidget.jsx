import React, { useState } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="chat-widget">
            {isOpen && (
                <div className="chat-window bg-white shadow-lg rounded-4 overflow-hidden mb-3" style={{ width: '300px' }}>
                    <div className="bg-navy text-white p-3 d-flex justify-content-between align-items-center">
                        <span className="fw-bold"><i className="bi bi-chat-dots-fill me-2"></i>Live Support</span>
                        <i className="bi bi-x-lg pointer" onClick={() => setIsOpen(false)}></i>
                    </div>
                    <div className="p-4" style={{ height: '250px', overflowY: 'auto' }}>
                        <div className="bg-light p-2 rounded mb-3 small">
                            Hello! How can we help you with your AC today?
                        </div>
                    </div>
                    <div className="p-3 border-top">
                        <input type="text" className="form-control form-control-sm" placeholder="Type your message..." />
                    </div>
                </div>
            )}
            <div className="chat-bubble" onClick={() => setIsOpen(!isOpen)}>
                <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-chat-dots-fill'}`}></i>
            </div>
        </div>
    );
};

export default ChatWidget;
