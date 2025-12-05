import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { useRef } from "react";

export function Experience() {
  const experiences = [
     {
      role: "Founder & CEO",
      company: "Real Landing",
      location: "Remote",
      type: "Full-time",
      url: "https://reallanding.com/",
      responsibilities: [
        "Founded and lead a comprehensive real estate services platform",
        "Developing innovative digital solutions for property management and real estate transactions",
        "Building strategic partnerships with real estate agents, property developers, and investors",
        "Overseeing business operations, team management, and company growth strategies",
        "Implementing cutting-edge technology to streamline real estate processes",
        "Managing client relationships and ensuring exceptional service delivery",
      ],
    },
    {
      role: "Founder",
      company: "Gen Z Scent",
      location: "Multan, Punjab, Pakistan",
      type: "Full-time",
      url: "https://genzscent.com/",
      responsibilities: [
        "Founded modern fragrance brand offering premium fragrances tailored to every mood",
        "Managing e-commerce operations through www.genzscent.com",
        "Developing marketing strategies for Pakistan and international markets",
        "Building brand identity and customer relationships",
      ],
    },
    {
      role: "Performance Marketer",
      company: "VioFlare",
      location: "Remote",
      type: "Full-time",
      url: "https://vioflare.com/",
      responsibilities: [
        "Developing and executing comprehensive digital marketing strategies",
        "Managing social media campaigns across multiple platforms",
        "Optimizing Facebook and Google Ads for maximum ROI",
        "Analyzing performance metrics and providing actionable insights",
      ],
    },
    {
      role: "Senior Digital Marketer",
      company: "Zaha Global",
      location: "Germany",
      type: "Full-time",
      url: "https://zahaglobal.co/",
      responsibilities: [
        "Leading digital marketing initiatives for international markets",
        "Developing global marketing strategies and campaigns",
        "Managing cross-functional teams and coordinating with stakeholders",
        "Driving brand visibility and engagement across digital channels",
      ],
    },
    
    {
      role: "Digital Marketing Specialist",
      company: "NetOPZ",
      location: "Remote",
      type: "Full-time",
      url: "https://netopz.com/",
      responsibilities: [
        "Developed and executed comprehensive digital marketing campaigns",
        "Managed social media presence and content strategy",
        "Optimized online advertising campaigns for maximum performance",
        "Analyzed marketing metrics and provided data-driven insights",
      ],
    },
    
    {
      role: "Social Media Marketing Manager",
      company: "ICMA Pakistan",
      location: "Pakistan",
      type: "Full-time",
      url: "https://www.icmap.com.pk/multan.aspx/",
      responsibilities: [
        "Managed social media presence and content strategy",
        "Created engaging content to drive audience engagement",
        "Monitored and analyzed social media metrics",
        "Implemented social media campaigns to boost brand awareness",
      ],
    },
    {
      role: "Digital Marketing Manager",
      company: "CorbitSoft PVT LTD.",
      location: "Remote",
      type: "Full-time",
      url: "https://corbitsoft.com/",
      responsibilities: [
        "Developed and executed digital marketing campaigns",
        "Managed Facebook and Google Ads accounts",
        "Optimized campaigns for better performance and ROI",
        "Collaborated with clients to understand their marketing needs",
      ],
    },
    {
      role: "Social Media Manager",
      company: "Codexcel",
      location: "Remote",
      type: "Full-time",
      url: "https://codexcel.org/",
      responsibilities: [
        "Managed social media accounts and content calendars",
        "Created and scheduled engaging social media posts",
        "Monitored social media trends and competitor activities",
        "Analyzed engagement metrics to improve content strategy",
      ],
    },
    {
      role: "Media Buyer",
      company: "Ross Association",
      location: "Remote",
      type: "Full-time",
      url: "https://rossandassociatesmbsp.com/",
      responsibilities: [
        "Managed media buying campaigns across multiple platforms",
        "Negotiated and optimized advertising placements and costs",
        "Analyzed campaign performance and ROI metrics",
        "Developed strategic media plans to maximize client reach and engagement",
      ],
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-[#FFE500]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-4 text-[#FFE500]">
            Career Journey
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4 text-white">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A decade of driving digital transformation and marketing excellence across diverse industries
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFE500]/20 via-[#FFE500]/40 to-[#FFE500]/20" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-[24px] top-[28px] w-4 h-4 rounded-full bg-[#FFE500] border-4 border-black shadow-lg shadow-[#FFE500]/50 z-20" />

                <div className="lg:pl-20">
                  <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#FFE500]/50 transition-all duration-300 overflow-hidden">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/0 via-[#FFE500]/5 to-[#FFE500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Header Section */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <Briefcase className="w-7 h-7 text-[#FFE500]" />
                        </div>

                        {/* Title and meta info */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                            <div>
                              <h3 className="text-white mb-1">{exp.role}</h3>
                              <div className="text-[#FFE500] hover:text-[#FFD700] transition-colors cursor-pointer group/company" onClick={() => exp.url && window.open(exp.url, '_blank')}>
                                <div className="flex items-center gap-2">
                                  <span>{exp.company}</span>
                                  {exp.url && (
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover/company:opacity-100 transition-opacity" />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 text-sm text-[#FFE500] h-fit">
                              {exp.type}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 text-[#FFE500]" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          {/* Responsibilities */}
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start gap-3 text-sm text-white/70"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
                              >
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FFE500] mt-2" />
                                <span className="leading-relaxed">{resp}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}