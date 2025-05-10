
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-40 glass py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xl md:text-2xl font-orbitron font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          SoftSell
        </motion.a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-neon-purple transition-colors"
              whileHover={{ scale: 1.1, color: "#8b5cf6" }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-2 rounded-full hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
        
        {/* Mobile Navigation Button */}
        <button 
          onClick={toggleMobileNav}
          className="md:hidden text-foreground"
        >
          {mobileNavOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileNavOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full glass py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 container mx-auto px-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-neon-purple transition-colors"
                onClick={() => setMobileNavOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-2 rounded-full hover-glow text-center"
              onClick={() => setMobileNavOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
