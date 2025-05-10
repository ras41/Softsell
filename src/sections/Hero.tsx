
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-2"
        >
          <span className="text-sm md:text-base uppercase tracking-wider text-neon-purple">
            Software License Marketplace
          </span>
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="block text-gradient">Turn Unused Software</span>
          <span className="block">Licenses Into Cash</span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl text-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          SoftSell helps you unlock value from old software licenses easily.
          Turn your unused digital assets into real money, securely and hassle-free.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink text-white px-8 py-4 rounded-full text-lg font-medium animate-button-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="border border-white/20 bg-background/80 px-8 py-4 rounded-full text-lg font-medium hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn How It Works
          </motion.a>
        </motion.div>
        
        <motion.div
          className="mt-16 max-w-4xl w-full glass rounded-xl p-6 border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="text-sm text-center text-foreground/60">
            <span className="block mb-4">Trusted by companies worldwide</span>
            <div className="flex justify-around items-center flex-wrap gap-8">
              {['Microsoft', 'Adobe', 'Autodesk', 'Oracle', 'VMware'].map((company) => (
                <span key={company} className="font-orbitron text-foreground/80 text-lg">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
