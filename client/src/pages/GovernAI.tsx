/*
 * ANTHERA GOVERN.AI — Product Page
 * Accent: #6366f1 (indigo/violet) | i18n + theme aware
 */

import { Link } from "wouter";
import { toast } from "sonner";
import { Database, Shield, FileText, CheckSquare, MessageSquare, Globe } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/AiGnuuMbSbUOTIwJ.png";
const GOVERNAI_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/BUWqAlpijMFoFFyR.png";

const techStack = ["FastAPI (Python)", "React", "MongoDB", "OpenAI GPT", "EU-first Architecture", "25/25 API Tests"];

export default function GovernAI() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const bg1 = isDark ? "#020617" : "#f8fafc";
  const bg2 = isDark ? "#0f172a" : "#f1f5f9";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";

  const features = [
    { icon: Database, title: t("gov.f1.title"), desc: t("gov.f1.desc") },
    { icon: Shield, title: t("gov.f2.title"), desc: t("gov.f2.desc") },
    { icon: FileText, title: t("gov.f3.title"), desc: t("gov.f3.desc") },
    { icon: CheckSquare, title: t("gov.f4.title"), desc: t("gov.f4.desc") },
    { icon: MessageSquare, title: t("gov.f5.title"), desc: t("gov.f5.desc") },
    { icon: Globe, title: t("gov.f6.title"), desc: t("gov.f6.desc") },
  ];

  const standards = [
    { name: t("gov.std1.name"), color: "#6366f1", desc: t("gov.std1.desc") },
    { name: t("gov.std2.name"), color: "#3b82f6", desc: t("gov.std2.desc") },
    { name: t("gov.std3.name"), color: "#06b6d4", desc: t("gov.std3.desc") },
    { name: t("gov.std4.name"), color: "#8b5cf6", desc: t("gov.std4.desc") },
    { name: t("gov.std5.name"), color: "#3b82f6", desc: t("gov.std5.desc") },
    { name: t("gov.std6.name"), color: "#06b6d4", desc: t("gov.std6.desc") },
  ];

  const plans = [
    { name: "Pro", desc: t("gov.pricing.pro"), price: t("pl.pricing.tbd"), highlighted: false },
    { name: "Business", desc: t("gov.pricing.business"), price: t("pl.pricing.tbd"), highlighted: true },
    { name: "Enterprise", desc: t("gov.pricing.enterprise"), price: t("pl.pricing.contact"), highlighted: false },
  ];

  const gradientStyle = { background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };

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
                <img src={GOVERNAI_LOGO} alt="GOVERN.AI" className="h-12 w-auto rounded-lg" />
                <span className="font-mono-brand text-[11px] tracking-wider text-[#6366f1] bg-[#6366f1]/10 px-3 py-1.5 rounded-md border border-[#6366f1]/20">
                  ANTHERA GOVERN.AI
                </span>
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}>
                {t("gov.hero.title1")}{" "}
                <span style={gradientStyle}>{t("gov.hero.title2")}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 ${textSecondary}`}>
                {t("gov.hero.desc")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-block text-white"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                  {t("gov.hero.cta1")}
                </Link>
                <button className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm border border-[#6366f1]/40 text-[#6366f1] hover:bg-[#6366f1]/10 transition-colors"
                  onClick={() => toast(t("gov.docs.toast"))}>
                  {t("gov.hero.cta2")}
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("gov.features.title1")}{" "}
              <span style={gradientStyle}>{t("gov.features.title2")}</span>{" "}
              {t("gov.features.title3")}
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass-card-hover p-7 h-full" style={{ background: isDark ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.9)', border: isDark ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(99,102,241,0.15)' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#6366f1]/10">
                    <f.icon className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <h3 className={`font-display font-semibold text-base mb-2 ${textPrimary}`}>{f.title}</h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── STANDARD COMPLIANCE ── */}
      <section className="py-24 md:py-32" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("gov.standards.title1")}{" "}
              <span style={gradientStyle}>{t("gov.standards.title2")}</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto" staggerDelay={0.08}>
            {standards.map((std) => (
              <StaggerItem key={std.name}>
                <div className="glass-card p-6 h-full" style={{ background: isDark ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.9)', border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)' }}>
                  <div className="w-3 h-3 rounded-full mb-4" style={{ background: std.color, boxShadow: `0 0 12px ${std.color}60` }} />
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: std.color }}>{std.name}</h3>
                  <p className={`text-sm ${textSecondary}`}>{std.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── STACK TECNICO ── */}
      <section className="py-20" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <h2 className={`font-display font-bold text-2xl mb-8 ${textPrimary}`}>{t("gov.stack.title")}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="font-mono-brand text-sm px-5 py-2.5 rounded-lg bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20">
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-24 md:py-32" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>{t("gov.pricing.title")}</h2>
            <p className={`text-lg ${textSecondary}`}>{t("gov.pricing.desc")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.12}>
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`glass-card p-8 text-center h-full flex flex-col ${
                  plan.highlighted ? "border-[#6366f1]/40 shadow-[0_0_40px_rgba(99,102,241,0.1)]" : ""
                }`} style={{ background: isDark ? 'rgba(2,6,23,0.9)' : 'rgba(255,255,255,0.9)', border: isDark ? '1px solid rgba(99,102,241,0.3)' : '1px solid rgba(99,102,241,0.15)' }}>
                  {plan.highlighted && (
                    <span className="font-mono-brand text-[10px] tracking-wider text-[#6366f1] bg-[#6366f1]/10 px-3 py-1 rounded-md self-center mb-4 border border-[#6366f1]/20">
                      {t("pl.pricing.recommended")}
                    </span>
                  )}
                  <h3 className={`font-display font-bold text-xl mb-2 ${textPrimary}`}>{plan.name}</h3>
                  <p className={`text-sm mb-6 ${textSecondary}`}>{plan.desc}</p>
                  <p className="font-display font-semibold text-[#6366f1] text-lg mt-auto mb-6">{plan.price}</p>
                  <Link href="/contact" className={`px-6 py-3 rounded-lg font-display font-semibold text-sm block ${
                    plan.highlighted ? "text-white" : "border border-[#6366f1]/40 text-[#6366f1] hover:bg-[#6366f1]/10 transition-colors"
                  }`} style={plan.highlighted ? { background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' } : {}}>
                    {plan.price === t("pl.pricing.contact") ? t("pl.pricing.contact") : t("gov.pricing.start")}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
