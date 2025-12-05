import { motion } from "motion/react";
import { Target, Users, Lightbulb, Award, Briefcase, GraduationCap, Mail, MapPin, Phone, Calendar } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Button } from "../components/ui/button";
import profileImage from "figma:asset/079a5ae85af47858c842561f3f758c9345067381.png";
import { SEO, personSchema } from "../components/SEO";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is built around measurable goals and KPIs to ensure tangible business outcomes."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is my success. I prioritize understanding your unique needs and objectives."
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description: "Combining creativity with data-driven insights to deliver campaigns that truly stand out."
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Track record of delivering exceptional results across diverse industries and markets."
  }
];

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "2,000+", label: "Projects Completed" },
  { value: "99.99%", label: "Client Satisfaction" },
  { value: "1,100+", label: "Happy Clients" }
];

const experiences = [
  {
    role: "Digital Marketing Specialist",
    company: "APIMS TEC",
    location: "Pakistan",
    period: "July 2025 - Present",
    type: "Full-time",
  },
  {
    role: "Digital Marketing Manager",
    company: "ZAHA GLOBAL",
    location: "Germany",
    period: "July 2025 - Present",
    type: "Full-time",
  },
  {
    role: "Founder",
    company: "Gen Z Scent",
    location: "Multan, Punjab, Pakistan",
    period: "September 2025 - Present",
    type: "Full-time",
  },
  {
    role: "Finance Department Intern",
    company: "MEPCO",
    location: "Multan, Punjab, Pakistan",
    period: "June 2025 - August 2025",
    type: "Internship",
  },
  {
    role: "Social Media Marketing Manager",
    company: "ICMA Pakistan",
    location: "Pakistan",
    period: "December 2024 - March 2025",
    type: "Full-time",
  },
  {
    role: "Digital Marketing Manager",
    company: "CorbitSoft PVT LTD.",
    location: "Remote",
    period: "January 2025 - February 2025",
    type: "Full-time",
  },
  {
    role: "Social Media Manager",
    company: "Codexcel",
    location: "Remote",
    period: "January 2025 - February 2025",
    type: "Full-time",
  },
];

const education = [
  {
    degree: "Banking & Finance",
    field: "Business & Finance",
    institution: "Bahauddin Zakariya University",
    year: "October 2024 - October 2026",
  },
  {
    degree: "Bachelor of Science",
    field: "Chemistry",
    institution: "University of Education, Lahore",
    year: "October 2022 - July 2024",
  },
  {
    degree: "Digital Marketing Certification",
    field: "Digital Marketing",
    institution: "Digiskills",
    year: "September 2023 - June 2024",
  },
  {
    degree: "Google Ads Expert Certification",
    field: "Google Ads",
    institution: "Google pour les pros",
    year: "August 2024",
  },
  {
    degree: "Professional Diploma",
    field: "Digital Marketing",
    institution: "Institute of Digital Marketing",
    year: "2024",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="About Muhammad Tahir Abbas - Full Stack Digital Marketer & Performance Marketing Expert"
        description="Learn about Muhammad Tahir Abbas, a Full Stack Digital Marketer with 7+ years of experience in Performance Marketing, Media Buying, Social Media Management, Facebook & Google Ads, and E-Commerce Marketing. Based in Vancouver, BC, Canada."
        keywords="About Muhammad Tahir Abbas, Digital Marketing Expert, Performance Marketer, Media Buyer, Social Media Marketing Manager, Marketing Portfolio, Vancouver Marketing Consultant, E-Commerce Marketing Specialist"
        canonical="https://tahir-portfolio.netlify.app/about"
        schema={personSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 mb-4 sm:mb-6">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFE500]" />
              <span className="text-xs sm:text-sm text-[#FFE500]">About Me</span>
            </div>
            <h1 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Transforming Brands Through Digital Excellence</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto px-4">
              A passionate digital marketing specialist with 7+ years of experience driving measurable results and sustainable business growth through innovative strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl text-center hover:bg-white/10 hover:border-[#FFE500]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl text-[#FFE500] mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img
                  src={profileImage}
                  alt="Muhammad Tahir Abbas - Professional Full Stack Digital Marketer, Performance Marketing Expert, and Social Media Marketing Specialist from Vancouver, BC"
                  className="w-full h-full object-cover rounded-[12px]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-4 text-[#FFE500]">
                My Story
              </div>
              <h2 className="text-4xl sm:text-5xl tracking-tight mb-4 text-white">
                Muhammad Tahir Abbas
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                I'm a results-driven digital marketing professional specializing in B2B marketing, e-commerce strategies, social media management, and performance marketing. With expertise across multiple platforms and industries, I help businesses achieve their growth objectives through data-driven campaigns and innovative strategies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey in digital marketing has taken me through various roles, from Social Media Marketing Manager at ICMA Pakistan to Digital Marketing Manager at Feetr. I've successfully managed campaigns for diverse clients, consistently delivering exceptional ROI and measurable business impact.
              </p>

              <motion.div
                className="flex flex-wrap gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {["Digital Marketing", "Social Media", "Facebook Ads", "Google Ads", "E-Commerce", "Content Creation", "SEO", "Analytics"].map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/30 text-[#FFE500] rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-6 text-[#FFE500]">
              Core Values
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight mb-6 text-white">What Drives Me</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-[#FFE500]/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-14 h-14 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FFE500] transition-all duration-300">
                  <value.icon size={28} className="text-[#FFE500] group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl mb-3 text-white">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-6 text-[#FFE500]">
              Professional Journey
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight mb-6 text-white">Experience & Education</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FFE500]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-xl flex items-center justify-center">
                  <Briefcase size={24} className="text-[#FFE500]" />
                </div>
                <h3 className="text-2xl text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-[#FFE500]/30 pl-4">
                    <p className="text-white font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-400">{exp.company} • {exp.period} • {exp.type}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#FFE500]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-xl flex items-center justify-center">
                  <GraduationCap size={24} className="text-[#FFE500]" />
                </div>
                <h3 className="text-2xl text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-[#FFE500]/30 pl-4">
                    <p className="text-white font-medium">{edu.degree}</p>
                    <p className="text-sm text-gray-400">{edu.institution} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-12 relative overflow-hidden group hover:border-[#FFE500]/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/10 via-transparent to-[#FFE500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl tracking-tight mb-6 text-white">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your digital marketing strategy? Let's discuss how I can help you achieve your business goals.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-xl flex items-center justify-center">
                    <Mail size={24} className="text-[#FFE500]" />
                  </div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">info.thetahirabbas@gmail.com</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-xl flex items-center justify-center">
                    <Phone size={24} className="text-[#FFE500]" />
                  </div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">+92 309 8150351</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-[#FFE500]" />
                  </div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Multan, Punjab, Pakistan</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-[#FFE500] text-black hover:bg-[#FFD700] px-10 py-6 text-lg shadow-xl shadow-[#FFE500]/20"
                onClick={() => {
                  window.location.href = '/#contact';
                }}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}