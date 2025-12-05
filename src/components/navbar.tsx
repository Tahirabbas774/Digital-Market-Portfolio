import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import profileImage from "figma:asset/079a5ae85af47858c842561f3f758c9345067381.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      // Navigate to home page with hash
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 z-50 ${
        isScrolled
          ? "top-4 sm:top-6 transition-all duration-500 ease-in-out"
          : "top-4 sm:top-0 transition-all duration-300 ease-out"
      }`}
    >
      <div
        className={`mx-auto ${
          isScrolled
            ? "max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out"
            : "max-w-7xl px-4 md:px-0 transition-all duration-300 ease-out"
        }`}
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.95)",
          }}
          transition={{ duration: 0.4 }}
          className={`${
            isScrolled
              ? "bg-black/90 border-2 border-white/10 rounded-full shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-500 ease-in-out"
              : "bg-black/95 md:bg-transparent border-2 md:border-0 border-white/10 md:border-transparent rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none transition-all duration-300 ease-out"
          }`}
        >
          <div
            className={`flex justify-between items-center bg-transparent ${
              isScrolled ? "h-16 px-4 sm:px-6" : "h-16 px-4 md:h-20 md:px-0"
            }`}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Link
                to="/"
                className="flex items-center gap-2 sm:gap-3 group"
              >
                <div
                  className={`relative overflow-hidden rounded-full border-2 border-[#FFE500]/50 group-hover:border-[#FFE500] transition-all duration-300 ${
                    isScrolled ? "w-9 h-9 sm:w-10 sm:h-10" : "w-9 h-9 sm:w-12 sm:h-12"
                  }`}
                >
                  <img
                    src={profileImage}
                    alt="Muhammad Tahir Abbas"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Yellow glow effect on hover */}
                  <div className="absolute inset-0 bg-[#FFE500]/0 group-hover:bg-[#FFE500]/20 transition-colors duration-300" />
                </div>
                <span className="text-lg sm:text-2xl tracking-tight text-white group-hover:text-[#FFE500] transition-colors">
                  TAHIR
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2"
            >
              <Link
                to="/services"
                className="text-gray-400 hover:text-[#FFE500] transition-colors"
              >
                Services
              </Link>
              <Link
                to="/work"
                className="text-gray-400 hover:text-[#FFE500] transition-colors"
              >
                Work
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-[#FFE500] transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-[#FFE500] transition-colors"
              >
                Contact
              </Link>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:block"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#FFE500] text-black hover:bg-[#FFD700]"
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:hidden"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-[#FFE500] transition-colors p-2"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`md:hidden mt-2 transition-all duration-300 ${
                isScrolled
                  ? "bg-black/90 border-2 border-white/10 rounded-3xl backdrop-blur-md"
                  : "bg-black/90 border-2 border-white/10 rounded-3xl backdrop-blur-md"
              }`}
            >
              <div className="px-4 pt-4 pb-4 space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-[#FFE500] rounded-lg transition-colors"
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <Link
                    to="/work"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-[#FFE500] rounded-lg transition-colors"
                  >
                    Work
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link
                    to="/about"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-[#FFE500] rounded-lg transition-colors"
                  >
                    About
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-3 py-3 text-gray-300 hover:bg-white/5 hover:text-[#FFE500] rounded-lg transition-colors"
                  >
                    Contact
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="pt-2"
                >
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-[#FFE500] text-black hover:bg-[#FFD700] py-3"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}