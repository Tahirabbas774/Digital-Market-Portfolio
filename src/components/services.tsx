import { Target, TrendingUp, Share2, PenTool, BarChart3, Megaphone, ShoppingCart, Globe, Users, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "Business-to-Business (B2B)",
    description: "Strategic B2B marketing solutions to connect with business clients and drive growth through targeted campaigns."
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Marketing",
    description: "Comprehensive e-commerce strategies including optimization, global expansion, and conversion-focused campaigns."
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging social media campaigns that build communities and foster meaningful connections with your audience."
  },
  {
    icon: Target,
    title: "Social Media Management",
    description: "End-to-end social media management including content creation, scheduling, and community engagement."
  },
  {
    icon: Megaphone,
    title: "Facebook & Google Ads",
    description: "Expert management of Facebook and Google advertising campaigns to maximize ROI and reach your ideal customers."
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Professional website development and management to create stunning online experiences that convert."
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling content that tells your story, educates your audience, and drives conversions across all platforms."
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven performance marketing strategies focused on measurable results and continuous optimization."
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description: "Strategic lead generation campaigns that attract qualified prospects and grow your sales pipeline."
  },
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    description: "Transform data into actionable insights with comprehensive analytics and performance tracking."
  }
];

export function Services() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: number) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-xs sm:text-sm mb-4 text-[#FFE500]">
            My Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-white">
            What I Do Best
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Full-service digital marketing solutions tailored to your business goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-xl hover:bg-white/10 hover:border-[#FFE500]/50 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onClick={() => handleServiceClick(index + 1)}
            >
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFE500] rounded-lg flex items-center justify-center mb-4 sm:mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <service.icon size={20} className="text-black sm:w-6 sm:h-6" />
              </motion.div>
              <h3 className="text-lg sm:text-xl mb-3 text-white">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}