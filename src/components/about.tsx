import { Target, Users, Lightbulb, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import profileImage from "figma:asset/079a5ae85af47858c842561f3f758c9345067381.png";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is built around measurable goals and KPIs."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is my success. I prioritize understanding your unique needs."
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description: "Combining creativity with data to deliver campaigns that stand out."
  },
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Track record of delivering exceptional results across diverse industries."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#FFE500]/20 to-transparent border border-[#FFE500]/30 relative p-8">
              <div className="absolute inset-0 bg-black/40" />
              <img
                src={profileImage}
                alt="Muhammad Tahir Abbas"
                className="w-full h-full object-cover relative z-10 rounded-xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-4 text-[#FFE500]">
              About Me
            </div>
            <h2 className="text-4xl sm:text-5xl tracking-tight mb-4 text-white">
              Transforming Brands Through Digital Excellence
            </h2>
            <p className="text-xl text-gray-400">
              A passionate digital marketing specialist dedicated to driving measurable results and business growth
            </p>
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {["Digital Marketing", "Social Media", "Facebook Ads", "Google Ads", "E-Commerce", "Content Creation"].map((skill, index) => (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-[#FFE500]/30 transition-colors duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFE500] transition-colors duration-300">
                <value.icon size={20} className="text-[#FFE500] group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-lg mb-2 text-white">{value.title}</h3>
              <p className="text-sm text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}