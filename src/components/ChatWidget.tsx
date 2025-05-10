
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  isUser: boolean;
  isTyping?: boolean;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! How can I help you with selling your software licenses today?", isUser: false }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined Q&A pairs
  const qaPairs = [
    {
      question: "How do I sell my license?",
      answer: "It's easy! Just upload your license through our secure form, and we'll provide a valuation within 24 hours. Once you accept our offer, you'll get paid within 48 hours."
    },
    {
      question: "What types of licenses do you buy?",
      answer: "We purchase a wide range of software licenses including Microsoft, Adobe, Autodesk, Oracle, VMware, and many others. If you're unsure, just ask us about your specific license."
    },
    {
      question: "How much can I get for my license?",
      answer: "Values vary based on the software type, version, and current market demand. Our AI pricing algorithm ensures you get the maximum value for your licenses. Some enterprise licenses can fetch thousands of dollars."
    },
    {
      question: "Is selling licenses legal?",
      answer: "Yes! We only facilitate legitimate license transfers that comply with the original software agreements. Our legal team ensures all transactions are compliant with relevant laws and software terms."
    }
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const simulateTyping = (text: string) => {
    // Add a typing indicator message
    const typingId = Date.now();
    setMessages(prev => [...prev, { id: typingId, text: "", isUser: false, isTyping: true }]);

    // Simulate typing delay
    setTimeout(() => {
      // Replace typing indicator with actual message
      setMessages(prev => prev.map(msg => 
        msg.id === typingId 
          ? { id: typingId, text, isUser: false } 
          : msg
      ));
    }, 1500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessageId = Date.now();
    const userMessage = { id: userMessageId, text: inputMessage, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Find a matching question or use default response
    setTimeout(() => {
      const matchedQA = qaPairs.find(qa => 
        qa.question.toLowerCase().includes(inputMessage.toLowerCase()) || 
        inputMessage.toLowerCase().includes(qa.question.toLowerCase())
      );

      if (matchedQA) {
        simulateTyping(matchedQA.answer);
      } else {
        simulateTyping("I'd be happy to help with that. Please share more details about your license through our contact form, and our team will provide you with a personalized quote.");
      }
    }, 500);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={toggleChat}
        className="fixed z-50 bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-40 bottom-24 right-6 w-80 sm:w-96 glass rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-4">
              <h3 className="text-white font-orbitron text-lg">SoftSell Support</h3>
              <p className="text-white/70 text-sm">We typically reply instantly</p>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.isUser
                        ? 'bg-neon-purple text-white rounded-tr-none'
                        : 'bg-white/10 text-foreground rounded-tl-none'
                    }`}
                  >
                    {message.isTyping ? (
                      <div className="flex space-x-1 items-center h-6 px-2">
                        <motion.div 
                          className="w-2 h-2 bg-white/70 rounded-full"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', delay: 0 }}
                        />
                        <motion.div 
                          className="w-2 h-2 bg-white/70 rounded-full"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', delay: 0.2 }}
                        />
                        <motion.div 
                          className="w-2 h-2 bg-white/70 rounded-full"
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'loop', delay: 0.4 }}
                        />
                      </div>
                    ) : (
                      <p>{message.text}</p>
                    )}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-background/30">
              <div className="flex">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-background/50 border border-white/10 rounded-l-lg p-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-neon-purple text-white px-4 rounded-r-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
