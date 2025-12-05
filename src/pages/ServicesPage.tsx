import { motion } from "motion/react";
import { 
  Search, 
  TrendingUp, 
  Share2, 
  Mail, 
  BarChart3, 
  Megaphone,
  Globe,
  PenTool,
  Video,
  ShoppingCart,
  MessageSquare,
  Zap,
  Users,
  Target
} from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { SEO, organizationSchema } from "../components/SEO";

export function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your online visibility and organic traffic with data-driven SEO strategies.",
      features: [
        "Keyword research & strategy",
        "On-page & technical SEO",
        "Link building campaigns",
        "SEO audits & reporting",
        "Local SEO optimization"
      ],
      color: "#FFE500"
    },
    {
      icon: Megaphone,
      title: "Pay-Per-Click Advertising",
      description: "Maximize ROI with targeted PPC campaigns across Google Ads, Facebook, and more.",
      features: [
        "Campaign strategy & setup",
        "Ad copywriting & A/B testing",
        "Bid management & optimization",
        "Conversion tracking",
        "Performance reporting"
      ],
      color: "#FFE500"
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand loyalty across all social platforms.",
      features: [
        "Social media strategy",
        "Content creation & scheduling",
        "Community management",
        "Influencer partnerships",
        "Social advertising"
      ],
      color: "#FFE500"
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Create compelling content that attracts, engages, and converts your target audience.",
      features: [
        "Content strategy development",
        "Blog writing & management",
        "Infographics & visual content",
        "Video content planning",
        "Content distribution"
      ],
      color: "#FFE500"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Build relationships and drive conversions with personalized email campaigns.",
      features: [
        "Email strategy & automation",
        "Newsletter design & copywriting",
        "List segmentation",
        "A/B testing & optimization",
        "Performance analytics"
      ],
      color: "#FFE500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Make informed decisions with comprehensive data analysis and insights.",
      features: [
        "Google Analytics setup",
        "Custom dashboard creation",
        "Data visualization",
        "ROI measurement",
        "Monthly performance reports"
      ],
      color: "#FFE500"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Create stunning, conversion-focused websites that deliver results.",
      features: [
        "Responsive web design",
        "UX/UI optimization",
        "Landing page creation",
        "Website maintenance",
        "Performance optimization"
      ],
      color: "#FFE500"
    },
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimization",
      description: "Turn more visitors into customers with strategic CRO techniques.",
      features: [
        "User behavior analysis",
        "A/B & multivariate testing",
        "Funnel optimization",
        "Heat mapping & session recording",
        "UX improvements"
      ],
      color: "#FFE500"
    },
    {
      icon: Video,
      title: "Video Marketing",
      description: "Engage audiences with powerful video content and distribution strategies.",
      features: [
        "Video strategy & planning",
        "YouTube optimization",
        "Video advertising",
        "Video SEO",
        "Performance tracking"
      ],
      color: "#FFE500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Marketing",
      description: "Drive sales and grow your online store with specialized e-commerce strategies.",
      features: [
        "Product listing optimization",
        "Shopping ads management",
        "Cart abandonment campaigns",
        "Customer retention strategies",
        "Revenue analytics"
      ],
      color: "#FFE500"
    },
    {
      icon: MessageSquare,
      title: "Brand Strategy",
      description: "Build a strong, consistent brand identity that resonates with your audience.",
      features: [
        "Brand positioning",
        "Messaging & voice development",
        "Visual identity",
        "Brand guidelines",
        "Competitor analysis"
      ],
      color: "#FFE500"
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description: "Streamline your marketing efforts with intelligent automation solutions.",
      features: [
        "Workflow automation setup",
        "Lead nurturing campaigns",
        "CRM integration",
        "Behavioral triggers",
        "Performance optimization"
      ],
      color: "#FFE500"
    },
    {
      icon: Users,
      title: "Customer Acquisition",
      description: "Identify and attract new customers through targeted marketing efforts.",
      features: [
        "Market research & segmentation",
        "Lead generation campaigns",
        "Customer profiling",
        "Personalized outreach",
        "Conversion tracking"
      ],
      color: "#FFE500"
    },
    {
      icon: Target,
      title: "Market Research",
      description: "Gain insights into your target market and competitors to inform strategic decisions.",
      features: [
        "Competitor analysis",
        "Market trends & forecasts",
        "Customer behavior studies",
        "SWOT analysis",
        "Market segmentation"
      ],
      color: "#FFE500"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Digital Marketing Services - Full Stack Marketing Solutions | Muhammad Tahir Abbas"
        description="Professional digital marketing services including Performance Marketing, Media Buying, Social Media Marketing, Facebook & Google Ads Management, SEO, E-Commerce Marketing, Content Creation, Lead Generation, and Marketing Analytics by Muhammad Tahir Abbas."
        keywords="Digital Marketing Services, Performance Marketing, Media Buying Services, Social Media Marketing, Facebook Ads Management, Google Ads Management, SEO Services, E-Commerce Marketing, Content Marketing, Lead Generation, Marketing Analytics, Brand Strategy, Marketing Automation"
        canonical="https://tahir-portfolio.netlify.app/services"
        schema={organizationSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-[#FFE500]/5 rounded-full blur-3xl"
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

        {/* Bottom Fade Effect */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)'
          }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 mb-6">
              <Zap className="w-4 h-4 text-[#FFE500]" />
              <span className="text-sm text-[#FFE500]">Full-Service Digital Marketing</span>
            </div>
            <h1 className="text-white mb-6">Services That Drive Results</h1>
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to grow your business, 
              increase engagement, and maximize ROI across all channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FFE500]/50 transition-all duration-300 relative overflow-hidden">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/0 via-[#FFE500]/5 to-[#FFE500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFE500]/10 border border-[#FFE500]/20 mb-6"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-8 h-8 text-[#FFE500]" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-white mb-3">{service.title}</h3>

                      {/* Description */}
                      <p className="text-white/60 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FFE500] mt-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/5 via-transparent to-[#FFE500]/5" />
            
            <div className="relative z-10">
              <h2 className="text-white mb-4">Ready to Grow Your Business?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how my digital marketing services can help you achieve your goals. 
                Get a free consultation and custom strategy proposal.
              </p>
              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFE500] text-black rounded-full hover:bg-[#FFE500]/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Today</span>
                <Zap className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}