
import { motion } from 'framer-motion';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-orbitron text-gradient">SoftSell</h3>
            <p className="text-sm text-foreground/70">
              The leading marketplace for buying and selling unused software licenses.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="text-foreground/60 hover:text-neon-purple transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Our Team', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-neon-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'FAQ', 'Pricing Guide', 'License Types'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-neon-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-neon-purple transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {year} SoftSell. All rights reserved.
          </p>
          <motion.div 
            className="mt-4 md:mt-0 text-sm text-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Made with ❤️ for software resellers everywhere
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
