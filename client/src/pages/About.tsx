/*
 * ANTHERA Systems — About Page
 * Design: Atmospheric Dark Elegance | i18n + theme aware
 */
import { Shield, Wrench, Eye, Accessibility } from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/nEIezZKFsZWpzyOl.png";
const PROFILE_PHOTO = "https://github.com/AngeloAng94.png";

const skills = ["Cloud Infrastructure", "ServiceNow/CMDB", "Python/FastAPI", "React", "MongoDB"];

export default function About() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const bg1 = isDark ? "#020617" : "#f8fafc";
  const bg2 = isDark ? "#0f172a" : "#f1f5f9";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";

  const values = [
    { icon: Shield, title: t("about.v1.title"), desc: t("about.v1.desc"), color: "#3b82f6" },
    { icon: Wrench, title: t("about.v2.title"), desc: t("about.v2.desc"), color: "#06b6d4" },
    { icon: Eye, title: t("about.v3.title"), desc: t("about.v3.desc"), color: "#6366f1" },
    { icon: Accessibility, title: t("about.v4.title"), desc: t("about.v4.desc"), color: "#3b82f6" },
  ];
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617]" : "bg-gradient-to-b from-white/80 via-white/60 to-white"}`} />
        </div>
        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <AnimatedSection>
              <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}>
                {t("about.hero.title1")}{" "}
                <span className="gradient-text-blue">{t("about.hero.title2")}</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${textSecondary}`}>
                {t("about.hero.desc")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── MISSIONE ── */}
      <section className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className={`font-display font-bold text-3xl md:text-4xl mb-8 ${textPrimary}`}>
                {t("about.mission.title")} <span className="gradient-text-blue">{t("about.mission.title2")}</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="glass-card p-8 md:p-12">
                <p className={`text-lg md:text-xl leading-relaxed ${isDark ? "text-[#c8d0dc]" : "text-[#475569]"}`}>
                  {t("about.mission.text")}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* ── VALORI ── */}
      <section className="py-24 md:py-32" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("about.values.title")}
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={0.12}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="glass-card-hover p-8 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${v.color}15` }}>
                    <v.icon className="w-6 h-6" style={{ color: v.color }} />
                  </div>
                  <h3 className={`font-display font-semibold text-lg mb-3 ${textPrimary}`}>{v.title}</h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      {/* ── TEAM ── */}
      <section className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("about.team.title")}
            </h2>
          </AnimatedSection>
          <AnimatedSection className="max-w-lg mx-auto">
            <div className="glass-card p-8 text-center">
              <img
                src={PROFILE_PHOTO}
                alt="Angelo Anglani"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-[#3b82f6]/40"
              />
              <h3 className={`font-display font-bold text-xl mb-1 ${textPrimary}`}>Angelo Anglani</h3>
              <p className="text-[#3b82f6] font-mono-brand text-sm mb-6">{t("about.team.role")}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <span key={skill} className={`font-mono-brand text-[11px] px-3 py-1.5 rounded-md border ${
                    isDark ? "bg-white/[0.04] border-white/[0.08] text-[#94a3b8]" : "bg-black/[0.03] border-black/[0.08] text-[#64748b]"
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
