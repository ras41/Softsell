
import { motion } from 'framer-motion';
import { Upload, DollarSign, Banknote } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-12 w-12" />,
      title: 'Upload License',
      description: 'Simply upload your license key or certificate through our secure platform.',
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: 'Get Valuation',
      description: 'Our AI technology evaluates your license against current market demand.',
    },
    {
      icon: <Banknote className="h-12 w-12" />,
      title: 'Get Paid',
      description: 'Accept our offer and receive payment via your preferred method within 48 hours.',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section 
      id="how-it-works" 
      className="py-24 relative"
      ref={ref}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/90 to-background"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We've simplified the process of selling your unused software licenses
            into three easy steps.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-8 relative overflow-hidden hover-glow"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute -right-4 -top-4 text-9xl font-bold opacity-5">
                {index + 1}
              </div>
              <div className="mb-6 text-neon-purple">{step.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-foreground/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Connection Lines (Desktop only) */}
        <div className="hidden md:block relative h-0">
          <motion.div
            className="absolute top-[-160px] left-[calc(16.67%-8px)] right-[calc(16.67%-8px)] h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          ></motion.div>
          <motion.div
            className="absolute top-[-160px] left-[calc(50%-8px)] right-[calc(16.67%-8px)] h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
