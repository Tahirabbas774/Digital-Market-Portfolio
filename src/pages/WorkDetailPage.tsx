import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, TrendingUp, Target, Users, Award, CheckCircle2, Calendar } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { projects } from "../data/projects";

export function WorkDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-32">
          <h1 className="text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/work")} className="bg-[#FFE500] text-black hover:bg-[#FFD700]">
            Back to Work
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={() => navigate("/work")}
              variant="ghost"
              className="mb-8 text-white/70 hover:text-[#FFE500] hover:bg-white/5 -ml-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to All Projects
            </Button>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/20 text-sm text-[#FFE500]">
                {project.category}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                {project.year}
              </span>
            </div>

            <h1 className="text-white mb-4">{project.title}</h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl">{project.description}</p>

            <div className="flex flex-wrap gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-[#FFE500]" />
                <span>Client: {project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-[#FFE500]" />
                <span>Duration: {project.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl text-white mb-8 flex items-center gap-3">
              <TrendingUp className="text-[#FFE500]" size={32} />
              Key Results
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#FFE500]/50 transition-colors"
                >
                  <div className="text-3xl md:text-4xl text-[#FFE500] mb-2">{result.value}</div>
                  <div className="text-sm text-white/60">{result.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-[#FFE500]" size={28} />
                <h3 className="text-2xl text-white">The Challenge</h3>
              </div>
              <p className="text-white/70 leading-relaxed">{project.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#FFE500]" size={28} />
                <h3 className="text-2xl text-white">The Solution</h3>
              </div>
              <p className="text-white/70 leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Used */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 className="text-2xl text-white mb-6">Services Provided</h3>
            <div className="flex flex-wrap gap-3">
              {project.services.map((service, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  className="px-4 py-2 bg-[#FFE500]/10 border border-[#FFE500]/20 rounded-full text-[#FFE500]"
                >
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 className="text-2xl text-white mb-6">Key Outcomes</h3>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="space-y-4">
                {project.outcomes.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-[#FFE500] flex-shrink-0 mt-1" size={20} />
                    <span className="text-white/80">{outcome}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#FFE500]/10 via-transparent to-[#FFE500]/5 border border-[#FFE500]/20 rounded-3xl p-10 text-center"
          >
            <h2 className="text-white mb-4">Want Similar Results?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help grow your business with proven digital marketing strategies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-[#FFE500] text-black hover:bg-[#FFD700]"
              >
                Start Your Project
              </Button>
              <Button
                onClick={() => navigate("/work")}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 hover:border-[#FFE500]/50"
              >
                View More Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}