import { motion, useScroll, useTransform } from "motion/react";
import { Award, Briefcase, Users, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Counter animation component
function AnimatedCounter({ value, delay }: { value: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parse the value to get number and suffix
  const suffix = value.includes('%') ? '%' : value.includes('+') ? '+' : '';
  const numericValue = parseFloat(value.replace(/[+%,]/g, ''));
  const hasComma = value.includes(',');
  const isDecimal = value.includes('.');

  useEffect(() => {
    if (hasAnimated) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        setHasAnimated(true);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [numericValue, hasAnimated]);

  // Format the number
  const formatNumber = (num: number) => {
    if (isDecimal) {
      return num.toFixed(2);
    }
    if (hasComma) {
      return Math.floor(num).toLocaleString();
    }
    return Math.floor(num).toString();
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const stats = [
    {
      icon: Award,
      value: "8+",
      label: "Years Experience",
      delay: 0.1,
    },
    {
      icon: Briefcase,
      value: "2,000+",
      label: "Projects Completed",
      delay: 0.2,
    },
    {
      icon: Users,
      value: "1,100+",
      label: "Clients Worked With",
      delay: 0.3,
    },
    {
      icon: Star,
      value: "99.99%",
      label: "Happy Clients",
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#FFE500]/5 rounded-full blur-3xl"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: stat.delay }}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:border-[#FFE500]/50 transition-all duration-300 relative overflow-hidden">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/0 via-[#FFE500]/0 to-[#FFE500]/0 group-hover:from-[#FFE500]/5 group-hover:via-[#FFE500]/10 group-hover:to-[#FFE500]/5 transition-all duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 mb-3 sm:mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#FFE500]" />
                    </motion.div>

                    {/* Value with counting animation */}
                    <motion.div
                      className="text-3xl sm:text-4xl md:text-5xl text-white mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                    >
                      <AnimatedCounter value={stat.value} delay={stat.delay} />
                    </motion.div>

                    {/* Label */}
                    <div className="text-xs sm:text-sm text-white/60">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}