import { Navbar } from "../components/navbar";
import { Hero } from "../components/hero";
import { Stats } from "../components/stats";
import { Services } from "../components/services";
import { Projects } from "../components/projects";
import { Experience } from "../components/experience";
import { Education } from "../components/education";
import { About } from "../components/about";
import { Testimonials } from "../components/testimonials";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { SEO, personSchema, organizationSchema } from "../components/SEO";

export function HomePage() {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [personSchema, organizationSchema]
  };

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Muhammad Tahir Abbas - Full Stack Digital Marketer | Performance Marketer | Media Buyer"
        description="Results-driven Full Stack Digital Marketer specializing in Performance Marketing, Media Buying, Creative Strategy, Social Media Marketing, Facebook & Google Ads, E-Commerce Marketing, Lead Generation, and AI Agent Automation. Based in Vancouver, BC."
        keywords="Full Stack Digital Marketer, Performance Marketer, Media Buyer, Creative Strategist, Digital Branding, Lead Generation Specialist, Marketing Analyst, Business Consultant, AI Agent Automation, Social Media Marketing, Facebook Ads Specialist, Google Ads Specialist, E-Commerce Marketing, Muhammad Tahir Abbas, Marketing Consultant Vancouver"
        canonical="https://tahir-portfolio.netlify.app"
        schema={combinedSchema}
      />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}