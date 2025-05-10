
import { useEffect } from 'react';
import Hero from '../sections/Hero';
import HowItWorks from '../sections/HowItWorks';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';
import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';
import ChatWidget from '../components/ChatWidget';
import { motion, useScroll } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    document.title = "SoftSell | Resell Your Software Licenses";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink z-50" 
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <ThemeToggle />
      
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
