import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/sVLDfOfljKNesubS.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const products = [
    { href: "/powerleave", label: "PowerLeave", desc: "HR & Team Management" },
    { href: "/govern-ai", label: "GOVERN.AI", desc: "AI Governance" },
  ];

  const isActive = (href: string) => location === href;
  const isDark = theme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-[#020617]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-white/80 backdrop-blur-xl border-b border-black/[0.06] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="ANTHERA" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className={`font-display font-bold text-lg tracking-wider leading-none ${isDark ? "text-white" : "text-[#0f172a]"}`}>
              ANTHERA
            </span>
            <span className="font-mono-brand text-[10px] tracking-[0.3em] text-[#3b82f6] leading-none mt-0.5">
              SYSTEMS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? isDark
                    ? "text-white bg-white/[0.08]"
                    : "text-[#0f172a] bg-black/[0.06]"
                  : isDark
                    ? "text-[#94a3b8] hover:text-white hover:bg-white/[0.04]"
                    : "text-[#64748b] hover:text-[#0f172a] hover:bg-black/[0.04]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                location.startsWith("/powerleave") || location.startsWith("/govern-ai")
                  ? isDark ? "text-white bg-white/[0.08]" : "text-[#0f172a] bg-black/[0.06]"
                  : isDark ? "text-[#94a3b8] hover:text-white hover:bg-white/[0.04]" : "text-[#64748b] hover:text-[#0f172a] hover:bg-black/[0.04]"
              }`}
            >
              {t("nav.products")}
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute top-full left-0 mt-2 w-72 rounded-xl backdrop-blur-xl border shadow-2xl overflow-hidden ${
                    isDark
                      ? "bg-[#0f172a]/95 border-white/[0.08]"
                      : "bg-white/95 border-black/[0.08]"
                  }`}
                >
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className={`flex flex-col px-5 py-4 transition-colors border-b last:border-0 ${
                        isDark
                          ? "hover:bg-white/[0.04] border-white/[0.04]"
                          : "hover:bg-black/[0.04] border-black/[0.04]"
                      }`}
                    >
                      <span className={`font-display font-semibold text-sm ${isDark ? "text-white" : "text-[#0f172a]"}`}>
                        {product.label}
                      </span>
                      <span className={`text-xs mt-0.5 ${isDark ? "text-[#94a3b8]" : "text-[#64748b]"}`}>
                        {product.desc}
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Right: Theme Toggle + Lang Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-lg transition-colors ${
              isDark
                ? "text-[#94a3b8] hover:text-white hover:bg-white/[0.08]"
                : "text-[#64748b] hover:text-[#0f172a] hover:bg-black/[0.06]"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono-brand font-bold tracking-wider transition-colors border ${
              isDark
                ? "text-[#94a3b8] hover:text-white border-white/[0.08] hover:bg-white/[0.08]"
                : "text-[#64748b] hover:text-[#0f172a] border-black/[0.08] hover:bg-black/[0.06]"
            }`}
          >
            {lang === "it" ? "EN" : "IT"}
          </button>

          <Link
            href="/contact"
            className="btn-gradient px-6 py-2.5 rounded-lg text-sm font-semibold font-display ml-1"
          >
            {t("nav.cta")}
          </Link>
        </div>

        {/* Mobile Right: Theme + Lang + Hamburger */}
        <div className="lg:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              isDark ? "text-[#94a3b8] hover:text-white" : "text-[#64748b] hover:text-[#0f172a]"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            className={`px-2 py-1 rounded text-[10px] font-mono-brand font-bold tracking-wider border ${
              isDark
                ? "text-[#94a3b8] border-white/[0.08]"
                : "text-[#64748b] border-black/[0.08]"
            }`}
          >
            {lang === "it" ? "EN" : "IT"}
          </button>

          <button
            className={`p-2 ${isDark ? "text-white" : "text-[#0f172a]"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:hidden backdrop-blur-xl border-t overflow-hidden ${
              isDark
                ? "bg-[#020617]/98 border-white/[0.06]"
                : "bg-white/98 border-black/[0.06]"
            }`}
          >
            <div className="container py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? isDark ? "text-white bg-white/[0.08]" : "text-[#0f172a] bg-black/[0.06]"
                      : isDark ? "text-[#94a3b8] hover:text-white" : "text-[#64748b] hover:text-[#0f172a]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 text-xs font-mono-brand text-[#3b82f6] uppercase tracking-wider">
                {t("nav.products")}
              </div>
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ml-2 ${
                    isActive(product.href)
                      ? isDark ? "text-white bg-white/[0.08]" : "text-[#0f172a] bg-black/[0.06]"
                      : isDark ? "text-[#94a3b8] hover:text-white" : "text-[#64748b] hover:text-[#0f172a]"
                  }`}
                >
                  {product.label}
                  <span className={`text-xs ml-2 ${isDark ? "text-[#64748b]" : "text-[#94a3b8]"}`}>{product.desc}</span>
                </Link>
              ))}
              <div className="mt-4 px-4">
                <Link
                  href="/contact"
                  className="btn-gradient block text-center px-6 py-3 rounded-lg text-sm font-semibold font-display"
                >
                  {t("nav.cta")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
