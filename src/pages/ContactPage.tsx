import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { motion } from "motion/react";
import { SEO, personSchema } from "../components/SEO";
import { createContactDocument, type ContactFormData } from "../services/appwrite";

export function ContactPage() {
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
        toast.success("Message sent successfully! I'll get back to you soon.");
        
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
    <div className="min-h-screen bg-black">
      <SEO
        title="Contact Muhammad Tahir Abbas - Digital Marketing Consultant | Get In Touch"
        description="Contact Muhammad Tahir Abbas for professional digital marketing services, performance marketing, media buying, social media marketing, and business consulting. Based in Vancouver, BC. Free consultation available."
        keywords="Contact Digital Marketer, Hire Performance Marketer, Marketing Consultant Contact, Social Media Marketing Expert, Facebook Ads Specialist Contact, Google Ads Expert, Marketing Consultation Vancouver, Business Marketing Services"
        canonical="https://tahir-portfolio.netlify.app/contact"
        schema={personSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-xs sm:text-sm mb-4 text-[#FFE500]">
              Get In Touch
            </div>
            <h1 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Let's Work Together</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto px-4">
              Have a project in mind or want to discuss how I can help grow your business? 
              I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl mb-4 sm:mb-6 text-white">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#FFE500] focus:ring-[#FFE500]"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#FFE500] focus:ring-[#FFE500]"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#FFE500] focus:ring-[#FFE500]"
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
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#FFE500] focus:ring-[#FFE500] resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#FFE500] text-black hover:bg-[#FFD700] group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl mb-6 text-white">Contact Information</h3>
              <div className="space-y-6 mb-12">
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
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

              {/* Additional Info Card */}
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h4 className="text-xl mb-4 text-white">Why Work With Me?</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span>5+ years of digital marketing experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span>Data-driven strategies that deliver results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span>Transparent communication and reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFE500] mt-1">✓</span>
                    <span>Customized solutions for your business goals</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}