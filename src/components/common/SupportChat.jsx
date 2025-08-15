import React from 'react';
import { MessageCircle } from 'lucide-react';

const SupportChat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 flex items-center space-x-2 relative">
        <MessageCircle className="w-5 h-5" />
        <span className="font-medium">Support</span>
        <div className="w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
      </button>
    </div>
  );
};

export default SupportChat;
