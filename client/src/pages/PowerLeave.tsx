/*
 * ANTHERA PowerLeave — Product Page
 * Accent: #3b82f6 (blue) | i18n + theme aware
 */

import { Link } from "wouter";
import { Calendar, Building, Users, BarChart3, Shield, GitBranch } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/BozZNfDvMwFIILLH.png";
const POWERLEAVE_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/bPlrXnwRZvOYpPUR.png";

const techStack = ["React 18", "FastAPI (Python)", "MongoDB", "JWT Auth", "GitHub Actions", "Docker-ready"];

export default function PowerLeave() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const bg1 = isDark ? "#020617" : "#f8fafc";
  const bg2 = isDark ? "#0f172a" : "#f1f5f9";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";

  const features = [
    { icon: Calendar, title: t("pl.f1.title"), desc: t("pl.f1.desc") },
    { icon: Building, title: t("pl.f2.title"), desc: t("pl.f2.desc") },
    { icon: Users, title: t("pl.f3.title"), desc: t("pl.f3.desc") },
    { icon: BarChart3, title: t("pl.f4.title"), desc: t("pl.f4.desc") },
    { icon: Shield, title: t("pl.f5.title"), desc: t("pl.f5.desc") },
    { icon: GitBranch, title: t("pl.f6.title"), desc: t("pl.f6.desc") },
  ];

  const plans = [
    { name: "Starter", desc: t("pl.pricing.starter"), price: t("pl.pricing.tbd"), highlighted: false },
    { name: "Business", desc: t("pl.pricing.business"), price: t("pl.pricing.tbd"), highlighted: true },
    { name: "Enterprise", desc: t("pl.pricing.enterprise"), price: t("pl.pricing.contact"), highlighted: false },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617]" : "bg-gradient-to-b from-white/80 via-white/60 to-white"}`} />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <AnimatedSection>
              <span className="inline-flex items-center gap-3 mb-6">
                <img src={POWERLEAVE_LOGO} alt="PowerLeave" className="h-12 w-auto rounded-lg" />
                <span className="font-mono-brand text-[11px] tracking-wider text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1.5 rounded-md border border-[#3b82f6]/20">
                  ANTHERA POWERLEAVE
                </span>
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}>
                {t("pl.hero.title1")}{" "}
                <span className="gradient-text-blue">{t("pl.hero.title2")}</span> {t("pl.hero.title3")}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 ${textSecondary}`}>
                {t("pl.hero.desc")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-gradient px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-block">
                  {t("pl.hero.cta1")}
                </Link>
                <a href="#features" className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors inline-block">
                  {t("pl.hero.cta2")}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("pl.features.title")} <span className="gradient-text-blue">{t("pl.features.title2")}</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass-card-hover p-7 h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#3b82f6]/10">
                    <f.icon className="w-5 h-5 text-[#3b82f6]" />
                  </div>
                  <h3 className={`font-display font-semibold text-base mb-2 ${textPrimary}`}>{f.title}</h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── STACK TECNICO ── */}
      <section className="py-20" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <h2 className={`font-display font-bold text-2xl mb-8 ${textPrimary}`}>{t("pl.stack.title")}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="font-mono-brand text-sm px-5 py-2.5 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>{t("pl.pricing.title")}</h2>
            <p className={`text-lg ${textSecondary}`}>{t("pl.pricing.desc")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.12}>
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`glass-card p-8 text-center h-full flex flex-col ${
                  plan.highlighted ? "border-[#3b82f6]/40 shadow-[0_0_40px_rgba(59,130,246,0.1)]" : ""
                }`}>
                  {plan.highlighted && (
                    <span className="font-mono-brand text-[10px] tracking-wider text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1 rounded-md self-center mb-4 border border-[#3b82f6]/20">
                      {t("pl.pricing.recommended")}
                    </span>
                  )}
                  <h3 className={`font-display font-bold text-xl mb-2 ${textPrimary}`}>{plan.name}</h3>
                  <p className={`text-sm mb-6 ${textSecondary}`}>{plan.desc}</p>
                  <p className="font-display font-semibold text-[#3b82f6] text-lg mt-auto mb-6">{plan.price}</p>
                  <Link href="/contact" className={`px-6 py-3 rounded-lg font-display font-semibold text-sm block ${
                    plan.highlighted ? "btn-gradient" : "border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors"
                  }`}>
                    {plan.price === t("pl.pricing.contact") ? t("pl.pricing.contact") : t("pl.pricing.join")}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="text-center mt-10">
            <Link href="/contact" className="text-[#3b82f6] font-display font-semibold text-sm hover:underline">
              {t("pl.pricing.earlyaccess")}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
