import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/918333012936?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setMessage("");
      setIsOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        ) : (
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-80 h-96 flex flex-col">
            {/* Header */}
            <div className="bg-green-500 text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">WhatsApp Support</h3>
                  <p className="text-xs opacity-90">We'll reply shortly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-600 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 bg-gray-50">
              <div className="bg-white rounded-lg p-3 shadow-sm mb-4">
                <p className="text-sm text-gray-700">
                  👋 Hi there! How can we help you today?
                </p>
                <p className="text-xs text-gray-500 mt-1">Amby Team</p>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-green-500"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg"
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppChat;