import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import profileImage from "figma:asset/079a5ae85af47858c842561f3f758c9345067381.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#FFE500]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div className="relative overflow-hidden rounded-full border-2 border-[#FFE500]/50 group-hover:border-[#FFE500] transition-all duration-300 w-10 h-10">
                <img
                  src={profileImage}
                  alt="Muhammad Tahir Abbas"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Yellow glow effect on hover */}
                <div className="absolute inset-0 bg-[#FFE500]/0 group-hover:bg-[#FFE500]/20 transition-colors duration-300" />
              </div>
              <span className="text-xl sm:text-2xl text-[#FFE500]">TAHIR</span>
            </Link>
            <p className="text-gray-500 text-xs sm:text-sm">
              Transforming businesses through strategic digital marketing and creative excellence.
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link to="/services" className="hover:text-[#FFE500] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-[#FFE500] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FFE500] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFE500] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link to="/services" className="hover:text-[#FFE500] transition-colors">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FFE500] transition-colors">
                  Pay-Per-Click Advertising
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FFE500] transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FFE500] transition-colors">
                  Content Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm mb-4 text-white">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574710097043"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFE500] hover:text-black transition-colors"
                aria-label="Follow on Facebook"
              >
                <Facebook size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.instagram.com/tahir_abbas_shah/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFE500] hover:text-black transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram size={14} className="sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://linkedin.com/in/muhammad-tahir-abbas-05443a221/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FFE500] hover:text-black transition-colors"
                aria-label="Follow on LinkedIn"
              >
                <Linkedin size={14} className="sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500">
          <div>
            &copy; {currentYear} TAHIR. All rights reserved.
          </div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-[#FFE500] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FFE500] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}