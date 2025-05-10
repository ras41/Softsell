
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { toast } from "sonner";
import { Mail } from 'lucide-react';

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const licenseTypes = [
    'Microsoft Office',
    'Adobe Creative Cloud',
    'AutoCAD',
    'Windows Server',
    'Oracle Database',
    'VMware',
    'Other',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate()) {
      // Simulated form submission
      console.log('Form submitted:', formData);
      
      // Show success message
      toast.success("Quote request submitted!", {
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative"
      ref={ref}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get Your Free Quote</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Fill out the form below and we'll provide a valuation for your software licenses
            within 24 hours.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-2xl mx-auto glass rounded-xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 bg-background/50 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple/50`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 bg-background/50 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple/50`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full p-3 bg-background/50 border ${
                    errors.company ? 'border-red-500' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple/50`}
                  placeholder="Your company name"
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="licenseType" className="block text-sm font-medium mb-1">
                  License Type
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`w-full p-3 bg-background/50 border ${
                    errors.licenseType ? 'border-red-500' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple/50`}
                >
                  <option value="">Select license type</option>
                  {licenseTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.licenseType && (
                  <p className="mt-1 text-sm text-red-500">{errors.licenseType}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-background/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
                  placeholder="Tell us more about your licenses (optional)"
                ></textarea>
              </div>
            </div>
            
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white p-3 rounded-lg font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Request
            </motion.button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-neon-purple">
              <Mail className="h-5 w-5" />
              <span>support@softsell.example.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
