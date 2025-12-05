import { motion, useScroll, useTransform } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

export function Experience() {
  const experiences = [
    {
      role: "Digital Marketing Specialist",
      company: "APIMS TEC",
      location: "Pakistan",
      period: "July 2025 - Present",
      type: "Full-time",
      responsibilities: [
        "Developing and executing comprehensive digital marketing strategies",
        "Managing social media campaigns across multiple platforms",
        "Optimizing Facebook and Google Ads for maximum ROI",
        "Analyzing performance metrics and providing actionable insights",
      ],
    },
    {
      role: "Digital Marketing Manager",
      company: "ZAHA GLOBAL",
      location: "Germany",
      period: "July 2025 - Present",
      type: "Full-time",
      responsibilities: [
        "Leading digital marketing initiatives for international markets",
        "Developing global marketing strategies and campaigns",
        "Managing cross-functional teams and coordinating with stakeholders",
        "Driving brand visibility and engagement across digital channels",
      ],
    },
    {
      role: "Founder",
      company: "Gen Z Scent",
      location: "Multan, Punjab, Pakistan",
      period: "September 2025 - Present",
      type: "Full-time",
      responsibilities: [
        "Founded modern fragrance brand offering premium fragrances tailored to every mood",
        "Managing e-commerce operations through www.genzscent.com",
        "Developing marketing strategies for Pakistan and international markets",
        "Building brand identity and customer relationships",
      ],
    },
    {
      role: "Finance Department Intern",
      company: "MEPCO",
      location: "Multan, Punjab, Pakistan",
      period: "June 2025 - August 2025",
      type: "Internship",
      responsibilities: [
        "Assisted with financial analysis and reporting",
        "Supported day-to-day finance department operations",
        "Gained experience in financial management processes",
        "Collaborated with team members on various projects",
      ],
    },
    {
      role: "Social Media Marketing Manager",
      company: "ICMA Pakistan",
      location: "Pakistan",
      period: "December 2024 - March 2025",
      type: "Full-time",
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
      period: "January 2025 - February 2025",
      type: "Full-time",
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
      period: "January 2025 - February 2025",
      type: "Full-time",
      responsibilities: [
        "Managed social media accounts and content calendars",
        "Created and scheduled engaging social media posts",
        "Monitored social media trends and competitor activities",
        "Analyzed engagement metrics to improve content strategy",
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
                              <div className="text-[#FFE500]">{exp.company}</div>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 text-sm text-[#FFE500] h-fit">
                              {exp.type}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-[#FFE500]" />
                              <span>{exp.period}</span>
                            </div>
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