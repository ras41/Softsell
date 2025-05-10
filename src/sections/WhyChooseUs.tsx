
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { BadgeDollarSign, ShieldCheck, Handshake, User } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <BadgeDollarSign className="h-8 w-8" />,
      title: 'Fast Payouts',
      description: 'Get paid within 48 hours of accepting our competitive offer.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: 'Secure Transfers',
      description: 'End-to-end encryption and secure license transfer protocols.',
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: 'Real Human Support',
      description: '24/7 access to our team of license transfer experts.',
    },
    {
      icon: <User className="h-8 w-8" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, clear valuation breakdowns for every license.',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <section 
      id="why-choose-us" 
      className="py-24 relative"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Why Choose Us</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            SoftSell provides an unmatched experience for selling your software licenses
            with these key benefits.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="glass rounded-xl p-6 hover-glow"
              whileHover={{ 
                y: -10, 
                boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.3)',
                transition: { duration: 0.2 } 
              }}
            >
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 inline-block text-neon-purple">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 max-w-4xl mx-auto glass rounded-xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-foreground/70 mb-6">
              Join thousands of satisfied customers who have turned their unused software licenses into cash.
            </p>
            <motion.a
              href="#contact"
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-3 rounded-full inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Quote Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
