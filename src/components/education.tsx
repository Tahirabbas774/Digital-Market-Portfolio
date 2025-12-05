import { motion, useScroll, useTransform } from "motion/react";
import { GraduationCap, Calendar } from "lucide-react";
import { useRef } from "react";

export function Education() {
  const education = [
    {
      degree: "Institute Of Banking & Finance ",
      field: "Business & Marketing",
      institution: "Bahauddin Zakariya University, Multan",
      year: "October 2024 - October 2026",
      description: "Pursuing advanced studies in Banking & Finance with focus on business finance principles.",
    },
    {
      degree: "Bachelor of Science",
      field: "Chemistry",
      institution: "University of Education, Lahore",
      year: "October 2022 - July 2024",
      description: "Completed Bachelor of Science degree with major in Chemistry.",
    },
    {
      degree: "Meta Digital Marketing Certification",
      field: "Digital Marketing",
      institution: "Meta",
      year: "September 2023 - June 2024",
      description: "Comprehensive training in digital marketing strategies, social media marketing, and online advertising.",
    },
    {
      degree: "Google Ads Certification",
      field: "Google Ads",
      institution: "Google",
      year: "September 2023 - June 2024",
      description: "Comprehensive training in Google Ads management, campaign optimization, and performance marketing.",
    },
    {
      degree: "Microsoft Certified Digital Marketer",
      field: "Digital Marketing",
      institution: "Microsoft",
      year: "September 2023 - June 2024",
      description: "Comprehensive training in digital marketing strategies, analytics, and Microsoft marketing tools.",
    },
    {
      degree: "Google Ads Expert Certification",
      field: "Google Ads",
      institution: "Google pour les pros",
      year: "August 2024",
      description: "Advanced certification in Google Ads management, campaign optimization, and performance marketing.",
    },
    {
      degree: "Professional Diploma",
      field: "Digital Marketing",
      institution: "Institute of Digital Marketing",
      year: "2024",
      description: "Expert and Certified Digital Marketer certification covering comprehensive digital marketing strategies.",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[#FFE500]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
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
            Academic Background
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4 text-white">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive academic foundation in business and specialized digital marketing expertise
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-[31px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFE500]/20 via-[#FFE500]/40 to-[#FFE500]/20" />

          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-[24px] top-[28px] w-4 h-4 rounded-full bg-[#FFE500] border-4 border-black shadow-lg shadow-[#FFE500]/50 z-20" />

                <div className="lg:pl-20">
                  <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#FFE500]/50 transition-all duration-300 overflow-hidden">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFE500]/0 via-[#FFE500]/5 to-[#FFE500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="w-7 h-7 text-[#FFE500]" />
                        </div>

                        {/* Year badge */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 text-sm text-[#FFE500]">
                          <Calendar className="w-4 h-4" />
                          <span>{item.year}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-white mb-1">{item.degree}</h3>
                        <div className="text-[#FFE500] mb-3">{item.field}</div>
                        <div className="text-white/80 mb-3">{item.institution}</div>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {item.description}
                        </p>
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