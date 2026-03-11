import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingActionButton() {
  const handleClick = () => {
    window.location.href = 'mailto:hello@example.com?subject=Let\'s Work Together';
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-600/50 flex items-center justify-center z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full mb-3 right-0 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Send me a message
        <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
      </div>
    </motion.button>
  );
}
