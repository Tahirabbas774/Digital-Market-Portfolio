import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Muhammad's expertise in digital marketing transformed our online presence. Our revenue increased by 250% in just 6 months!",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Founder, E-Commerce Plus",
      content: "Outstanding work on our Facebook and Google Ads campaigns. The ROI has been incredible. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Global Brands",
      content: "Professional, creative, and results-driven. Muhammad's social media strategies helped us grow our audience by 400%.",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      role: "Owner, Local Services Co.",
      content: "Best digital marketing specialist we've worked with. Our lead generation has never been better!",
      rating: 5,
    },
    {
      name: "Lisa Anderson",
      role: "VP Marketing, SaaS Solutions",
      content: "Muhammad's B2B marketing strategies were exactly what we needed. Exceptional results and great communication.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Founder, Retail Chain",
      content: "From strategy to execution, everything was perfect. Our brand visibility has skyrocketed!",
      rating: 5,
    },
    {
      name: "Sofia Martinez",
      role: "Director, Health & Wellness",
      content: "The content creation and social media management services exceeded our expectations. Truly professional!",
      rating: 5,
    },
    {
      name: "Robert Kim",
      role: "CEO, Tech Innovations",
      content: "Data-driven approach and creative solutions. Muhammad helped us achieve our marketing goals faster than expected.",
      rating: 5,
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFE500]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-sm mb-4 text-[#FFE500]">
            Client Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl tracking-tight mb-4 text-white">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by businesses worldwide to deliver exceptional digital marketing results
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1 * (testimonials.length * 384)], // 384px = card width (352px) + gap (32px)
              }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[352px]"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#FFE500]/50 transition-all duration-300 h-full relative overflow-hidden group">
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/0 via-[#FFE500]/5 to-[#FFE500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Quote icon */}
                      <div className="w-10 h-10 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 flex items-center justify-center mb-4">
                        <Quote className="w-5 h-5 text-[#FFE500]" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#FFE500] text-[#FFE500]"
                          />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-white/70 mb-6 leading-relaxed text-sm">
                        {testimonial.content}
                      </p>

                      {/* Author */}
                      <div className="border-t border-white/10 pt-4">
                        <div className="text-white mb-1">{testimonial.name}</div>
                        <div className="text-sm text-[#FFE500]">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}