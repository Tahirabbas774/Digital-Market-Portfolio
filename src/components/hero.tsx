import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import profileImage from "figma:asset/079a5ae85af47858c842561f3f758c9345067381.png";

export function Hero() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="min-h-screen px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center bg-black pt-20 sm:pt-24 md:pt-0">
      {/* Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 229, 0, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 229, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* Gradient fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none z-20" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-[600px] lg:h-[600px] bg-[#FFE500]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="text-white/80 text-base sm:text-lg flex items-center gap-2 justify-center lg:justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>👋</span>
              <span className="text-sm sm:text-base md:text-lg">Hi There, I am Muhammad Tahir Abbas</span>
            </motion.div>
            
            <motion.h1
              className="text-white tracking-tight"
              style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', lineHeight: '1.1' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Full Stack Digital
              <br />
              Marketer
            </motion.h1>
            
            <motion.p
              className="text-white/60 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let Us Manage, Optimize, and Grow Your Social Media Presence. Engage your community. Build an audience. Increase your revenue. Skilled at devising and executing social media strategies that drive engagement, boost brand visibility, and analyze performance metrics to enhance online presence.
            </motion.p>
            
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-[#FFE500] hover:bg-[#FFD700] text-black px-6 py-6 rounded-[341px] text-sm sm:text-base"
              >
                <Calendar size={18} className="mr-2" />
                Book Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image with Decorative Elements */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative aspect-square max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
              {/* Large outer circle */}
              <motion.div
                className="absolute inset-0 border-2 border-[#FFE500]/30 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ 
                  width: '90%', 
                  height: '90%', 
                  top: '5%', 
                  left: '5%' 
                }}
              />

              {/* Inner circle frame */}
              <motion.div
                className="absolute border-2 border-[#FFE500]/50 rounded-full overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{ 
                  width: '60%', 
                  height: '60%', 
                  top: '20%', 
                  left: '20%',
                  zIndex: 10
                }}
              >
                <img
                  src={profileImage}
                  alt="Muhammad Tahir Abbas - Full Stack Digital Marketer, Performance Marketer, and Media Buyer specializing in Social Media Marketing and E-Commerce Marketing"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Glow effect behind portrait */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/20 via-[#FFE500]/10 to-[#FFE500]/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ 
                  width: '70%', 
                  height: '70%', 
                  top: '15%', 
                  left: '15%',
                  zIndex: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}