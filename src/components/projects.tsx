import { ArrowUpRight, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects as allProjects } from "../data/projects";

// Get first 4 projects for the homepage featured section
const projects = allProjects.slice(0, 8);

// Individual project card with scroll animation
function ProjectCard({ project, index }: { project: any; index: number }) {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Scale effect as card goes out of view
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.95, 1, 0.98]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.6, 1, 1, 0.95]
  );

  return (
    <motion.div
      ref={cardRef}
      className="sticky w-full"
      style={{
        top: `${80 + index * 30}px`,
        zIndex: 10 + index, // Bottom cards have higher z-index to overlap on top
        scale,
        opacity
      }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div
        className="group cursor-pointer bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFE500]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFE500]/10"
        onClick={() => navigate(`/work/${project.id}`)}
      >
        {/* Horizontal Layout: Content Left, Image Right */}
        <div className="flex flex-col lg:flex-row">
          {/* Content Section - Left Side */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1 relative bg-zinc-900">
            {/* Background gradient effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/0 via-[#FFE500]/5 to-[#FFE500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-4">
              {/* Category Badge */}
              <div className="inline-block">
                <div className="px-3 py-1.5 bg-[#FFE500]/10 backdrop-blur-md border border-[#FFE500]/20 rounded-lg text-xs text-[#FFE500]">
                  {project.category}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-[#FFE500] transition-colors duration-300 flex items-center gap-2 sm:gap-3">
                {project.title}
                <ArrowUpRight
                  size={20}
                  className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 translate-y-0 group-hover:-translate-y-1 transition-all duration-300 sm:w-6 sm:h-6"
                />
              </h3>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                {project.description}
              </p>

              {/* Metrics Display */}
              <div className="flex items-center gap-6 sm:gap-8 pt-4">
                {project.metrics.map((metric: any, i: number) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-xs sm:text-sm text-white/50 mb-1">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <TrendingUp size={16} className="text-[#FFE500]" />
                      <span className="text-lg sm:text-xl text-[#FFE500] font-medium">{metric.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden relative">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Metrics Badges on Image */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {project.metrics.map((metric: any, i: number) => (
                  <motion.div
                    key={i}
                    className="bg-[#FFE500] text-black px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm flex items-center gap-1.5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <TrendingUp size={12} />
                    <span className="font-medium">{metric.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#FFE500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-xs sm:text-sm mb-4 text-[#FFE500]">
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Real results for real businesses across industries
          </p>
        </motion.div>

        {/* Stacking Cards Container */}
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
