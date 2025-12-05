import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { motion, useScroll, useTransform } from "motion/react";
import { createContactDocument, type ContactFormData } from "../services/appwrite";

export function Contact() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      };
      
      const result = await createContactDocument(contactData);
      
      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: ""
        });
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-xs sm:text-sm mb-4 text-[#FFE500]">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Ready to take your digital marketing to the next level? Let's discuss your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#FFE500]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#FFE500]"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#FFE500]"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#FFE500]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFE500] text-black hover:bg-[#FFD700] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="w-10 h-10 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#FFE500]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a href="mailto:info.thetahirabbas@gmail.com" className="text-white hover:text-[#FFE500] transition-colors">
                      info.thetahirabbas@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-10 h-10 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#FFE500]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <a href="tel:+923098150351" className="text-white hover:text-[#FFE500] transition-colors">
                      +92 309 8150351
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="w-10 h-10 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#FFE500]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-white">
                      Multan, Punjab, Pakistan
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="bg-white/5 border border-white/10 p-8 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-lg mb-3 text-white">Availability</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[#FFE500]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span className="text-[#FFE500]">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Zone</span>
                  <span className="text-[#FFE500]">EST (UTC-5)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}