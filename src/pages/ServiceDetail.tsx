import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, Users, ShoppingCart, Share2, Target, Megaphone, Globe, PenTool, TrendingUp, Zap, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const servicesData = [
  {
    id: 1,
    icon: Users,
    title: "Business-to-Business (B2B)",
    description: "Strategic B2B marketing solutions to connect with business clients and drive growth through targeted campaigns.",
    overview: "In the B2B landscape, building strong relationships and demonstrating value are paramount. I specialize in creating comprehensive B2B marketing strategies that resonate with decision-makers and drive meaningful business outcomes.",
    benefits: [
      "Lead generation campaigns targeting key decision-makers",
      "Account-based marketing (ABM) strategies",
      "LinkedIn marketing and networking automation",
      "B2B content marketing and thought leadership",
      "Sales enablement and marketing alignment",
      "ROI-focused campaign optimization"
    ],
    process: [
      {
        step: "Research & Analysis",
        description: "Deep dive into your target market, competitors, and buyer personas"
      },
      {
        step: "Strategy Development",
        description: "Create a customized B2B marketing roadmap aligned with your goals"
      },
      {
        step: "Campaign Execution",
        description: "Launch multi-channel campaigns across LinkedIn, email, and content platforms"
      },
      {
        step: "Optimization",
        description: "Continuous monitoring and refinement for maximum performance"
      }
    ],
    metrics: [
      { label: "Average Lead Quality Increase", value: "65%" },
      { label: "Cost Per Lead Reduction", value: "40%" },
      { label: "Conversion Rate Improvement", value: "55%" }
    ]
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "E-Commerce Marketing",
    description: "Comprehensive e-commerce strategies including optimization, global expansion, and conversion-focused campaigns.",
    overview: "Transform your online store into a revenue-generating machine with data-driven e-commerce marketing strategies. From product launches to cart abandonment recovery, I cover every aspect of e-commerce growth.",
    benefits: [
      "Shopping feed optimization for Google & Facebook",
      "Product catalog management and merchandising",
      "Cart abandonment recovery campaigns",
      "Email marketing automation for e-commerce",
      "Marketplace optimization (Amazon, Shopify, etc.)",
      "Conversion rate optimization (CRO)"
    ],
    process: [
      {
        step: "Store Audit",
        description: "Comprehensive analysis of your e-commerce platform and user experience"
      },
      {
        step: "Strategy Planning",
        description: "Develop multi-channel e-commerce marketing strategy"
      },
      {
        step: "Implementation",
        description: "Set up campaigns, automation, and tracking systems"
      },
      {
        step: "Growth & Scale",
        description: "Continuous testing and scaling of winning strategies"
      }
    ],
    metrics: [
      { label: "Average Revenue Growth", value: "120%" },
      { label: "Cart Recovery Rate", value: "35%" },
      { label: "Customer Lifetime Value Increase", value: "80%" }
    ]
  },
  {
    id: 3,
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engaging social media campaigns that build communities and foster meaningful connections with your audience.",
    overview: "Social media is where your customers spend their time. I create engaging, authentic campaigns that build brand awareness, drive engagement, and convert followers into customers across all major platforms.",
    benefits: [
      "Multi-platform campaign strategy (Instagram, Facebook, Twitter, LinkedIn)",
      "Viral content creation and distribution",
      "Influencer partnership management",
      "Community building and engagement",
      "Social listening and reputation management",
      "Paid social advertising integration"
    ],
    process: [
      {
        step: "Audience Research",
        description: "Identify your ideal audience and their social behaviors"
      },
      {
        step: "Content Strategy",
        description: "Develop a content calendar with engaging, shareable content"
      },
      {
        step: "Execution & Engagement",
        description: "Post consistently and actively engage with your community"
      },
      {
        step: "Analytics & Iteration",
        description: "Track performance and refine strategy based on data"
      }
    ],
    metrics: [
      { label: "Average Engagement Rate Increase", value: "250%" },
      { label: "Follower Growth", value: "180%" },
      { label: "Social Traffic to Website", value: "95%" }
    ]
  },
  {
    id: 4,
    icon: Target,
    title: "Social Media Management",
    description: "End-to-end social media management including content creation, scheduling, and community engagement.",
    overview: "Let me take the burden of social media management off your shoulders. From content creation to community management, I handle all aspects of your social media presence so you can focus on running your business.",
    benefits: [
      "Daily content creation and curation",
      "Strategic posting schedule optimization",
      "24/7 community management and response",
      "Brand voice development and consistency",
      "Crisis management and reputation protection",
      "Monthly reporting and strategy calls"
    ],
    process: [
      {
        step: "Brand Assessment",
        description: "Understand your brand voice, values, and objectives"
      },
      {
        step: "Content Planning",
        description: "Create monthly content calendar aligned with your goals"
      },
      {
        step: "Daily Management",
        description: "Post, engage, and monitor your social channels daily"
      },
      {
        step: "Performance Review",
        description: "Monthly analytics review and strategy optimization"
      }
    ],
    metrics: [
      { label: "Time Saved Per Month", value: "40+ hrs" },
      { label: "Response Time", value: "< 2 hrs" },
      { label: "Content Consistency", value: "100%" }
    ]
  },
  {
    id: 5,
    icon: Megaphone,
    title: "Facebook & Google Ads",
    description: "Expert management of Facebook and Google advertising campaigns to maximize ROI and reach your ideal customers.",
    overview: "Paid advertising is one of the fastest ways to grow your business. I specialize in creating high-converting ad campaigns on Facebook and Google that deliver measurable ROI and scale profitably.",
    benefits: [
      "Comprehensive keyword research and targeting",
      "Ad creative development and A/B testing",
      "Landing page optimization",
      "Conversion tracking and attribution setup",
      "Budget optimization and bid management",
      "Remarketing and audience segmentation"
    ],
    process: [
      {
        step: "Campaign Setup",
        description: "Account structure, tracking, and audience research"
      },
      {
        step: "Creative Development",
        description: "Design compelling ad copy and visuals"
      },
      {
        step: "Launch & Monitor",
        description: "Deploy campaigns and monitor performance closely"
      },
      {
        step: "Optimize & Scale",
        description: "Continuous testing and scaling of winning ads"
      }
    ],
    metrics: [
      { label: "Average ROAS", value: "4.5x" },
      { label: "Cost Per Acquisition Reduction", value: "50%" },
      { label: "Click-Through Rate Improvement", value: "85%" }
    ]
  },
  {
    id: 6,
    icon: Globe,
    title: "Website Development",
    description: "Professional website development and management to create stunning online experiences that convert.",
    overview: "Your website is your digital storefront. I create modern, responsive websites that not only look stunning but are optimized for conversions, speed, and user experience.",
    benefits: [
      "Custom website design and development",
      "Mobile-first responsive design",
      "SEO-optimized structure and content",
      "Fast loading speed optimization",
      "Conversion-focused UX/UI design",
      "Ongoing maintenance and updates"
    ],
    process: [
      {
        step: "Discovery & Planning",
        description: "Understand your goals, audience, and requirements"
      },
      {
        step: "Design & Prototype",
        description: "Create wireframes and visual designs for approval"
      },
      {
        step: "Development",
        description: "Build your website with modern technologies"
      },
      {
        step: "Launch & Support",
        description: "Deploy, test, and provide ongoing support"
      }
    ],
    metrics: [
      { label: "Average Page Speed Score", value: "95+" },
      { label: "Mobile Responsiveness", value: "100%" },
      { label: "Conversion Rate Increase", value: "75%" }
    ]
  },
  {
    id: 7,
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling content that tells your story, educates your audience, and drives conversions across all platforms.",
    overview: "Content is king, but context is queen. I create compelling, SEO-optimized content that resonates with your audience, builds trust, and drives action across all marketing channels.",
    benefits: [
      "Blog posts and articles",
      "Social media content and graphics",
      "Email marketing campaigns",
      "Video scripts and storyboards",
      "Infographics and visual content",
      "Copywriting for ads and landing pages"
    ],
    process: [
      {
        step: "Content Strategy",
        description: "Develop a content roadmap aligned with your goals"
      },
      {
        step: "Research & Planning",
        description: "Topic research, keyword analysis, and content calendar"
      },
      {
        step: "Creation & Design",
        description: "Write, design, and produce high-quality content"
      },
      {
        step: "Distribution & Promotion",
        description: "Publish and promote across relevant channels"
      }
    ],
    metrics: [
      { label: "Content Engagement Rate", value: "180%" },
      { label: "Organic Traffic Growth", value: "150%" },
      { label: "Lead Generation from Content", value: "90%" }
    ]
  },
  {
    id: 8,
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven performance marketing strategies focused on measurable results and continuous optimization.",
    overview: "Performance marketing is all about results. I focus on measurable outcomes, optimizing every aspect of your marketing funnel to maximize ROI and drive sustainable growth.",
    benefits: [
      "Full-funnel marketing strategy",
      "Multi-channel attribution modeling",
      "CRO and A/B testing programs",
      "Customer journey optimization",
      "Marketing automation setup",
      "Performance dashboards and reporting"
    ],
    process: [
      {
        step: "Baseline Analysis",
        description: "Audit current performance and identify opportunities"
      },
      {
        step: "Strategy Development",
        description: "Create data-driven optimization roadmap"
      },
      {
        step: "Implementation",
        description: "Execute campaigns and tracking infrastructure"
      },
      {
        step: "Continuous Optimization",
        description: "Test, learn, and optimize for better performance"
      }
    ],
    metrics: [
      { label: "Average ROI Improvement", value: "200%" },
      { label: "Conversion Rate Uplift", value: "95%" },
      { label: "Customer Acquisition Cost Reduction", value: "45%" }
    ]
  },
  {
    id: 9,
    icon: Zap,
    title: "Lead Generation",
    description: "Strategic lead generation campaigns that attract qualified prospects and grow your sales pipeline.",
    overview: "Quality leads are the lifeblood of any business. I create targeted lead generation campaigns that attract, capture, and nurture qualified prospects through your sales funnel.",
    benefits: [
      "Multi-channel lead generation strategy",
      "Landing page design and optimization",
      "Lead magnet creation and distribution",
      "Email nurture sequences",
      "Lead scoring and qualification",
      "CRM integration and automation"
    ],
    process: [
      {
        step: "Audience Targeting",
        description: "Define and research your ideal customer profile"
      },
      {
        step: "Offer Creation",
        description: "Develop compelling lead magnets and offers"
      },
      {
        step: "Campaign Launch",
        description: "Deploy multi-channel lead generation campaigns"
      },
      {
        step: "Nurture & Qualify",
        description: "Automated nurturing and lead qualification"
      }
    ],
    metrics: [
      { label: "Lead Volume Increase", value: "300%" },
      { label: "Lead Quality Score", value: "85%" },
      { label: "Cost Per Lead Reduction", value: "55%" }
    ]
  },
  {
    id: 10,
    icon: BarChart3,
    title: "Marketing Analytics",
    description: "Transform data into actionable insights with comprehensive analytics and performance tracking.",
    overview: "You can't improve what you don't measure. I implement comprehensive analytics systems that provide clear insights into your marketing performance and guide data-driven decision-making.",
    benefits: [
      "Google Analytics 4 setup and configuration",
      "Custom dashboard creation",
      "Conversion tracking implementation",
      "Attribution modeling",
      "Regular performance reporting",
      "Data-driven recommendations"
    ],
    process: [
      {
        step: "Analytics Audit",
        description: "Review current tracking and identify gaps"
      },
      {
        step: "Implementation",
        description: "Set up comprehensive tracking and analytics"
      },
      {
        step: "Dashboard Creation",
        description: "Build custom reports and dashboards"
      },
      {
        step: "Ongoing Analysis",
        description: "Regular reporting and strategic recommendations"
      }
    ],
    metrics: [
      { label: "Data Accuracy", value: "99%" },
      { label: "Reporting Efficiency", value: "70% faster" },
      { label: "Actionable Insights", value: "Weekly" }
    ]
  }
];

export function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const serviceId = parseInt(id || "1");
  const service = servicesData.find(s => s.id === serviceId) || servicesData[0];

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section - Enhanced & Centered */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 229, 0, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 229, 0, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
            }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FFE500]/10 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-[#FFE500] mb-16 transition-colors group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </motion.button>

          {/* Center-aligned Hero Content */}
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-[#FFE500] to-[#FFD700] rounded-3xl mb-8 shadow-2xl shadow-[#FFE500]/30">
                <Icon size={56} className="text-black" />
              </div>
              
              <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-6 text-[#FFE500]">
                Premium Service
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
                {service.overview}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-[#FFE500] text-black hover:bg-[#FFD700] px-10 py-6 text-lg font-medium shadow-xl shadow-[#FFE500]/20 hover:shadow-2xl hover:shadow-[#FFE500]/30 transition-all"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#contact');
                    }
                  }}
                >
                  Get Started Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 hover:border-[#FFE500]/50 px-10 py-6 text-lg font-medium transition-all"
                  onClick={() => {
                    const benefitsSection = document.getElementById('benefits');
                    benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </div>

              {/* Metrics Cards */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {service.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 hover:border-[#FFE500]/30 transition-all duration-300 group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="text-5xl font-bold text-[#FFE500] mb-3 group-hover:scale-110 transition-transform duration-300">{metric.value}</div>
                    <div className="text-sm text-gray-400 leading-tight">{metric.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-6 text-[#FFE500]">
              What's Included
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight mb-6 text-white">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to succeed, backed by proven strategies and expert execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-[#FFE500]/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/0 via-[#FFE500]/5 to-[#FFE500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-xl flex items-center justify-center group-hover:bg-[#FFE500] group-hover:scale-110 transition-all duration-300">
                      <CheckCircle2 size={24} className="text-[#FFE500] group-hover:text-black transition-colors" />
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFE500]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-6 text-[#FFE500]">
              My Process
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight mb-6 text-white">How We'll Work Together</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A proven, step-by-step approach that delivers consistent results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connecting Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(100%+12px)] w-6 z-0">
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-[#FFE500]/50 to-[#FFE500]/20"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                )}

                <motion.div 
                  className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl h-full hover:bg-white/10 hover:border-[#FFE500]/30 transition-all duration-500 group"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/0 via-[#FFE500]/5 to-[#FFE500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FFE500] to-[#FFD700] rounded-2xl flex items-center justify-center mb-6 text-black text-2xl font-bold shadow-lg shadow-[#FFE500]/20 group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl mb-4 text-white group-hover:text-[#FFE500] transition-colors">{step.step}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Investment Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-6 text-[#FFE500]">
              Investment
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight mb-6 text-white">Tailored Solutions</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every business is unique. Let's discuss a custom package that fits your goals and budget.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 relative overflow-hidden group hover:border-[#FFE500]/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/10 via-transparent to-[#FFE500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl mb-6 text-white">Why Invest in {service.title}?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#FFE500] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Proven track record with measurable ROI</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#FFE500] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Customized strategy for your business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#FFE500] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Ongoing support and optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[#FFE500] flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Transparent reporting and communication</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center">
                <div className="text-5xl text-[#FFE500] mb-4">🎯</div>
                <h4 className="text-2xl mb-4 text-white">Ready to Get Started?</h4>
                <p className="text-gray-400 mb-8">
                  Schedule a free consultation to discuss your project and get a custom quote
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#FFE500] text-black hover:bg-[#FFD700] w-full py-6 text-lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#contact');
                    }
                  }}
                >
                  Request a Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-6 text-[#FFE500]">
              Common Questions
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about {service.title}
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How long does it take to see results?",
                a: "Most clients start seeing measurable improvements within the first 30-60 days, with significant results typically appearing within 3-6 months. The timeline varies based on your industry, competition, and current market position."
              },
              {
                q: "What makes your approach different?",
                a: "I combine data-driven strategies with creative execution, focusing on sustainable long-term growth rather than quick wins. Every strategy is customized to your business goals and continuously optimized based on performance data."
              },
              {
                q: "Do you require long-term contracts?",
                a: "I offer flexible engagement options. While longer partnerships allow for better results, I believe in earning your business through results, not contracts. We can discuss the best approach for your specific situation."
              },
              {
                q: "How involved will I need to be?",
                a: "I handle the heavy lifting, but your input is valuable. Typically, we'll have regular check-ins (weekly or bi-weekly) and I'll need access to necessary accounts and assets. The level of involvement is flexible based on your preferences."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FFE500]/30 transition-all duration-300"
              >
                <h3 className="text-xl mb-4 text-white flex items-start gap-3">
                  <span className="text-[#FFE500] flex-shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/5 via-transparent to-[#FFE500]/5" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden group hover:border-[#FFE500]/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/10 via-transparent to-[#FFE500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FFE500] to-[#FFD700] rounded-2xl mb-8 shadow-2xl shadow-[#FFE500]/20 mx-auto">
                <Icon size={40} className="text-black" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl tracking-tight mb-6 text-white">
                Let's Transform Your Business
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to take your {service.title.toLowerCase()} to the next level? Let's discuss how we can achieve your goals together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#FFE500] text-black hover:bg-[#FFD700] px-10 py-6 text-lg shadow-xl shadow-[#FFE500]/20"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/#contact');
                    }
                  }}
                >
                  Start Your Project Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 px-10 py-6 text-lg"
                  onClick={() => navigate('/')}
                >
                  Explore More Services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}