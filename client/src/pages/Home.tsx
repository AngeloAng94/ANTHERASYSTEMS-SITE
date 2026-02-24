/*
 * ANTHERA Systems — Home Page
 * Design: Atmospheric Dark Elegance (with light mode support)
 * i18n: IT/EN via useLanguage()
 */

import { Link } from "wouter";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Shield, Zap, CheckCircle, Users } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/rHFGsEppoiDGtDMc.png";
const POWERLEAVE_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/bPlrXnwRZvOYpPUR.png";
const GOVERNAI_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/BUWqAlpijMFoFFyR.png";

function Counter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const num = parseInt(target.replace(/\D/g, ""));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * num));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num]);

  return (
    <div ref={ref} className="font-display font-bold text-5xl md:text-6xl gradient-text-blue">
      {count}{suffix}
    </div>
  );
}

export default function Home() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const bgX = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1920], [-20, 20]);
  const bgY = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1080], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const bg1 = isDark ? "#020617" : "#f8fafc";
  const bg2 = isDark ? "#0f172a" : "#f1f5f9";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";

  const whyCards = [
    { icon: Shield, title: t("home.why.card1.title"), desc: t("home.why.card1.desc"), color: "#3b82f6" },
    { icon: Zap, title: t("home.why.card2.title"), desc: t("home.why.card2.desc"), color: "#06b6d4" },
    { icon: CheckCircle, title: t("home.why.card3.title"), desc: t("home.why.card3.desc"), color: "#6366f1" },
    { icon: Users, title: t("home.why.card4.title"), desc: t("home.why.card4.desc"), color: "#3b82f6" },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" onMouseMove={handleMouseMove}>
        <motion.div className="absolute inset-0" style={{ x: bgX, y: bgY, scale: 1.1 }}>
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-[#020617]/70 via-[#020617]/50 to-[#020617]" : "bg-gradient-to-b from-white/70 via-white/50 to-white"}`} />
        </motion.div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 ${textPrimary}`}>
                {t("home.hero.title1")}{" "}
                <span className="gradient-text-blue">{t("home.hero.title2")}</span>
              </h1>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 ${textSecondary}`}>
              {t("home.hero.desc")}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10">
              <Link href="/powerleave" className="btn-gradient px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-block">
                {t("home.hero.cta1")}
              </Link>
              <Link href="/govern-ai" className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors inline-block">
                {t("home.hero.cta2")}
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-3">
              {[
                { icon: "🇮🇹", label: t("home.hero.badge1") },
                { icon: "🇪🇺", label: t("home.hero.badge2") },
                { icon: "🛡️", label: t("home.hero.badge3") },
              ].map((badge) => (
                <span key={badge.label}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border ${
                    isDark ? "bg-white/[0.05] border-white/[0.08] text-[#94a3b8]" : "bg-black/[0.03] border-black/[0.08] text-[#64748b]"
                  }`}>
                  <span>{badge.icon}</span>{badge.label}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY ANTHERA */}
      <section className="py-24 md:py-32 relative" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("home.why.title")} <span className="gradient-text-blue">ANTHERA</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${textSecondary}`}>{t("home.why.desc")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={0.12}>
            {whyCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="glass-card-hover p-8 h-full" style={{ background: isDark ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.9)', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)', color: isDark ? '#ffffff' : '#0f172a' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${card.color}15` }}>
                    <card.icon className="w-6 h-6" style={{ color: card.color }} />
                  </div>
                  <h3 className={`font-display font-semibold text-lg mb-3 ${textPrimary}`}>{card.title}</h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>{card.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 md:py-32 relative" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>{t("home.products.title")}</h2>
            <p className={`text-lg max-w-2xl mx-auto ${textSecondary}`}>{t("home.products.desc")}</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatedSection direction="left">
              <Link href="/powerleave" className="block group">
                <div className="glass-card overflow-hidden h-full transition-all duration-300 hover:border-[#3b82f6]/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]" style={{ background: isDark ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.9)', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-mono-brand text-[11px] tracking-wider text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1.5 rounded-md">{t("home.products.pl.tag")}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-5">
                      <img src={POWERLEAVE_LOGO} alt="PowerLeave" className="h-16 w-auto rounded-lg" />
                      <h3 className={`font-display font-bold text-2xl ${textPrimary}`}>{t("home.products.pl.name")}</h3>
                    </div>
                    <p className={`text-sm leading-relaxed mb-6 ${textSecondary}`}>{t("home.products.pl.desc")}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["React 18", "FastAPI", "MongoDB", "JWT"].map((tag) => (
                        <span key={tag} className="font-mono-brand text-[10px] px-2.5 py-1 rounded bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">{tag}</span>
                      ))}
                    </div>
                    <span className="text-[#3b82f6] font-display font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {t("home.products.pl.cta")} <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <Link href="/govern-ai" className="block group">
                <div className="glass-card overflow-hidden h-full transition-all duration-300 hover:border-[#6366f1]/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.1)]" style={{ background: isDark ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.9)', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="p-8 md:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-mono-brand text-[11px] tracking-wider text-[#6366f1] bg-[#6366f1]/10 px-3 py-1.5 rounded-md">{t("home.products.gov.tag")}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-5">
                      <img src={GOVERNAI_LOGO} alt="GOVERN.AI" className="h-16 w-auto rounded-lg" />
                      <h3 className={`font-display font-bold text-2xl ${textPrimary}`}>{t("home.products.gov.name")}</h3>
                    </div>
                    <p className={`text-sm leading-relaxed mb-6 ${textSecondary}`}>{t("home.products.gov.desc")}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["FastAPI", "React", "MongoDB", "GPT"].map((tag) => (
                        <span key={tag} className="font-mono-brand text-[10px] px-2.5 py-1 rounded bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20">{tag}</span>
                      ))}
                    </div>
                    <span className="text-[#6366f1] font-display font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {t("home.products.gov.cta")} <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 md:py-32 relative" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("home.stats.title")} <span className="gradient-text-blue">{t("home.stats.title2")}</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
            {[
              { value: "33", suffix: "+", label: t("home.stats.stat1") },
              { value: "25", suffix: "/25", label: t("home.stats.stat2") },
              { value: "6", suffix: "", label: t("home.stats.stat3") },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="glass-card p-8 text-center" style={{ background: isDark ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.9)', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)' }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                  <p className={`text-sm mt-4 leading-relaxed ${textSecondary}`}>{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="mt-10 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {["GDPR", "EU AI Act", "DORA", "NIS2", "ISO 27001", "ISO 42001"].map((std) => (
                <span key={std} className={`font-mono-brand text-[11px] px-3 py-1.5 rounded-md border ${
                  isDark ? "bg-white/[0.04] border-white/[0.08] text-[#94a3b8]" : "bg-black/[0.03] border-black/[0.08] text-[#64748b]"
                }`}>{std}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative" style={{ background: bg1 }}>
        <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-transparent via-[#3b82f6]/[0.03] to-transparent" : "bg-gradient-to-b from-transparent via-[#3b82f6]/[0.05] to-transparent"}`} />
        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6 ${textPrimary}`}>
              {t("home.cta.title1")}{" "}
              <span className="gradient-text-blue">{t("home.cta.title2")}</span>?
            </h2>
            <p className={`text-lg mb-10 ${textSecondary}`}>{t("home.cta.desc")}</p>
            <Link href="/contact" className="btn-gradient px-10 py-4 rounded-xl font-display font-bold text-base inline-block">
              {t("home.cta.button")}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
