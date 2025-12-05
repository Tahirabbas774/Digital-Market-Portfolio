import { motion } from "motion/react";
import { TrendingUp, Award } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { SEO, portfolioSchema } from "../components/SEO";

export function WorkPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Portfolio & Projects - Digital Marketing Case Studies | Muhammad Tahir Abbas"
        description="Explore successful digital marketing projects and campaigns by Muhammad Tahir Abbas. View case studies in Performance Marketing, Social Media Marketing, E-Commerce Marketing, Facebook Ads, Google Ads, and Lead Generation with proven ROI results."
        keywords="Digital Marketing Portfolio, Marketing Case Studies, Performance Marketing Projects, Social Media Campaigns, E-Commerce Marketing Results, Facebook Ads Case Studies, Google Ads Projects, Muhammad Tahir Abbas Portfolio, Marketing Success Stories"
        canonical="https://tahir-portfolio.netlify.app/work"
        schema={portfolioSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
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
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[300px] bg-[#FFE500]/5 rounded-full blur-3xl"
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

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 mb-4 sm:mb-6">
              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#FFE500]" />
              <span className="text-xs sm:text-sm text-[#FFE500]">Featured Projects</span>
            </div>
            <h1 className="text-white mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Project Portfolio</h1>
            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto px-4">
              Real results from real projects. See how strategic digital marketing delivers measurable business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => navigate(`/work/${project.id}`)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFE500]/50 transition-all duration-300 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden bg-white/5">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${1550000000000 + index}?w=600&q=80`}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Year badge */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#FFE500]/20 backdrop-blur-sm border border-[#FFE500]/30 text-xs text-[#FFE500]">
                      {project.year}
                    </div>

                    {/* Category on image */}
                    <div className="absolute bottom-3 left-3 text-xs text-[#FFE500]">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Title & Client */}
                    <h3 className="text-white mb-1 text-lg">{project.title}</h3>
                    <div className="text-sm text-white/50 mb-3">{project.client}</div>

                    {/* Description */}
                    <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.results.map((result, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-2.5 border border-white/10">
                          <div className="text-lg text-[#FFE500] mb-0.5">{result.value}</div>
                          <div className="text-xs text-white/50">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 text-xs text-[#FFE500]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE500]/5 via-transparent to-[#FFE500]/5" />
            
            <div className="relative z-10">
              <h2 className="text-white mb-3">Ready to Get Started?</h2>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Let's create a custom strategy that delivers results for your business.
              </p>
              <motion.a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#FFE500] text-black rounded-full hover:bg-[#FFE500]/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <TrendingUp className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}