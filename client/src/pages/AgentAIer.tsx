/*
 * ANTHERA agentAIer — Product Page
 * Faithful clone of the live landing (https://witty-llamas-wonder.freebuff.dev/),
 * restyled with the ANTHERA site design system (theme-aware, IT/EN).
 * Accent: #10b981 (emerald) → #14b8a6 (teal).
 * Every "try the product" button opens the real app.
 */

import {
  Sparkles,
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Workflow,
  TestTube,
  Gauge,
  ChevronRight,
  Terminal,
  Check,
  FlaskConical,
  Radio,
  Lock,
  GitBranch,
  Users,
} from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import ProductLogo from "@/components/ProductLogo";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { AGENTAIER_URL } from "@/const";

const ACCENT = "#10b981";
const ACCENT_2 = "#14b8a6";
const gradientStyle = {
  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
} as const;

export default function AgentAIer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const bg1 = isDark ? "#020617" : "#f8fafc";
  const bg2 = isDark ? "#0f172a" : "#f1f5f9";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";
  const cardStyle = {
    background: isDark ? "rgba(2,6,23,0.9)" : "rgba(255,255,255,0.9)",
    border: isDark ? `1px solid rgba(16,185,129,0.22)` : `1px solid rgba(16,185,129,0.15)`,
  };

  const navItems = [
    { href: "#aa-how", label: t("aa.nav.how") },
    { href: "#aa-examples", label: t("aa.nav.examples") },
    { href: "#aa-modes", label: t("aa.nav.modes") },
  ];

  const examples = Array.from({ length: 8 }, (_, i) => ({
    title: t(`aa.ex${i + 1}.title`),
    desc: t(`aa.ex${i + 1}.desc`),
    prompt: t(`aa.ex${i + 1}.prompt`),
  }));

  const steps = [
    { icon: Workflow, title: t("aa.s1.title"), desc: t("aa.s1.desc") },
    { icon: Brain, title: t("aa.s2.title"), desc: t("aa.s2.desc") },
    { icon: Gauge, title: t("aa.s3.title"), desc: t("aa.s3.desc") },
    { icon: TestTube, title: t("aa.s4.title"), desc: t("aa.s4.desc") },
  ];

  const features = [
    { icon: Sparkles, title: t("aa.f1.title"), desc: t("aa.f1.desc") },
    { icon: Brain, title: t("aa.f2.title"), desc: t("aa.f2.desc") },
    { icon: Shield, title: t("aa.f3.title"), desc: t("aa.f3.desc") },
    { icon: Workflow, title: t("aa.f4.title"), desc: t("aa.f4.desc") },
    { icon: TestTube, title: t("aa.f5.title"), desc: t("aa.f5.desc") },
    { icon: GitBranch, title: t("aa.f6.title"), desc: t("aa.f6.desc") },
  ];

  const modes = [
    {
      icon: FlaskConical,
      title: t("aa.demo.title"),
      desc: t("aa.demo.desc"),
      items: [t("aa.demo.i1"), t("aa.demo.i2"), t("aa.demo.i3")],
      highlighted: false,
    },
    {
      icon: Radio,
      title: t("aa.live.title"),
      desc: t("aa.live.desc"),
      items: [t("aa.live.i1"), t("aa.live.i2"), t("aa.live.i3")],
      highlighted: true,
    },
  ];

  const trust = [
    { icon: Users, title: t("aa.trust1.title"), desc: t("aa.trust1.desc") },
    { icon: Lock, title: t("aa.trust2.title"), desc: t("aa.trust2.desc") },
    { icon: Shield, title: t("aa.trust3.title"), desc: t("aa.trust3.desc") },
    { icon: GitBranch, title: t("aa.trust4.title"), desc: t("aa.trust4.desc") },
  ];

  const chatbotItems = [1, 2, 3, 4, 5].map((i) => t(`aa.compare.chatbot.i${i}`));
  const agentItems = [1, 2, 3, 4, 5].map((i) => t(`aa.compare.agent.i${i}`));

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: bg1 }}>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(20,184,166,0.18), transparent 50%)",
            }}
          />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <AnimatedSection>
              <nav className={`hidden md:flex items-center gap-1 mb-8 text-sm ${textSecondary}`}>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      isDark ? "hover:text-white hover:bg-white/[0.06]" : "hover:text-[#0f172a] hover:bg-black/[0.04]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </AnimatedSection>

            <AnimatedSection>
              <span className="inline-flex items-center gap-3 mb-6 flex-wrap">
                <ProductLogo
                  src="/products/agent-aier.svg"
                  alt="agentAIer"
                  className="h-12 w-12 rounded-xl shrink-0 object-contain"
                  fallback={
                    <span
                      className="inline-flex items-center justify-center h-12 w-12 rounded-xl text-white"
                      style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})` }}
                      data-testid="aa-hero-logo"
                    >
                      <Sparkles className="w-6 h-6" />
                    </span>
                  }
                />
                <span className="font-display font-bold text-lg tracking-wide">
                  <span className={textPrimary}>AgentAIer</span>{" "}
                  <span className={`font-normal text-sm ${textSecondary}`}>by ANTHERA</span>
                </span>
                <span
                  className="font-mono-brand text-[11px] tracking-wider px-3 py-1.5 rounded-md border"
                  style={{
                    color: ACCENT,
                    background: "rgba(16,185,129,0.10)",
                    borderColor: "rgba(16,185,129,0.25)",
                  }}
                >
                  {t("aa.badge")}
                </span>
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}>
                {t("aa.h1a")} <span style={gradientStyle}>{t("aa.h1b")}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 ${textSecondary}`}>
                {t("aa.subtitle")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={AGENTAIER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="aa-hero-cta-demo"
                  className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-flex items-center gap-2 text-white transition-transform hover:translate-y-[-1px]"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
                    boxShadow: "0 10px 30px -10px rgba(16,185,129,0.5)",
                  }}
                >
                  <Zap className="w-4 h-4" />
                  {t("aa.tryDemo")}
                </a>
                <a
                  href="#aa-how"
                  className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-flex items-center gap-2 border transition-colors"
                  style={{ color: ACCENT, borderColor: "rgba(16,185,129,0.4)" }}
                >
                  {t("aa.howItWorks")}
                </a>
                <a
                  href={AGENTAIER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                  style={{ color: ACCENT }}
                >
                  {t("aa.getStarted")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className={`text-xs max-w-xl leading-relaxed ${textSecondary}`}>{t("aa.demoHint")}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── EXAMPLES ── */}
      <section id="aa-examples" className="py-24 md:py-32 scroll-mt-24" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-4 max-w-3xl mx-auto">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("aa.examples.title")}
            </h2>
            <p className={`text-lg ${textSecondary}`}>{t("aa.examples.subtitle")}</p>
          </AnimatedSection>

          <StaggerContainer
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            staggerDelay={0.08}
          >
            {examples.map((ex) => (
              <StaggerItem key={ex.title}>
                <a
                  href={AGENTAIER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card-hover flex h-full flex-col p-5 text-left"
                  style={cardStyle}
                  aria-label={`${t("aa.examples.cta")}: ${ex.title}`}
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" style={{ color: `${ACCENT}99` }} />
                    <span className={`text-sm font-semibold ${textPrimary}`}>{ex.title}</span>
                  </span>
                  <span className={`mt-2 flex-1 text-xs leading-relaxed ${textSecondary}`}>{ex.desc}</span>
                  <span
                    className="mt-3 line-clamp-3 rounded-xl p-2.5 text-[11px] leading-relaxed font-mono-brand"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                      color: isDark ? "#94a3b8" : "#64748b",
                    }}
                  >
                    {ex.prompt}
                  </span>
                  <span
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium"
                    style={{ color: ACCENT }}
                  >
                    {t("aa.examples.cta")}
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2} className="text-center mt-8">
            <p className={`text-xs ${textSecondary}`}>{t("aa.examples.note")}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="aa-how" className="py-24 md:py-32 scroll-mt-24" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("aa.steps.title")}
            </h2>
            <p className={`text-lg ${textSecondary}`}>{t("aa.steps.subtitle")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="glass-card p-7 h-full" style={cardStyle}>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg font-display font-bold text-sm"
                      style={{ background: "rgba(16,185,129,0.12)", color: ACCENT }}
                    >
                      {i + 1}
                    </span>
                    <s.icon className="w-5 h-5" style={{ color: `${ACCENT}99` }} />
                  </div>
                  <h3 className={`font-display font-semibold text-base mb-2 ${textPrimary}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("aa.features.title")}
            </h2>
            <p className={`text-lg ${textSecondary}`}>{t("aa.features.subtitle")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass-card-hover p-7 h-full" style={cardStyle}>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(16,185,129,0.12)" }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <h3 className={`font-display font-semibold text-base mb-2 ${textPrimary}`}>{f.title}</h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── DEMO & LIVE ── */}
      <section id="aa-modes" className="py-24 md:py-32 scroll-mt-24" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("aa.modes.title")}
            </h2>
            <p className={`font-mono-brand text-xs tracking-wider mb-4 uppercase`} style={{ color: ACCENT }}>
              {t("aa.modes.subtitle")}
            </p>
            <p className={`text-lg ${textSecondary}`}>{t("aa.modes.desc")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.12}>
            {modes.map((m) => (
              <StaggerItem key={m.title}>
                <div
                  className={`glass-card p-8 h-full ${m.highlighted ? "shadow-[0_0_40px_rgba(16,185,129,0.18)]" : ""}`}
                  style={{
                    background: cardStyle.background,
                    border: m.highlighted ? "1px solid rgba(16,185,129,0.5)" : cardStyle.border,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(16,185,129,0.12)" }}
                    >
                      <m.icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <h3 className={`font-display font-bold text-lg ${textPrimary}`}>{m.title}</h3>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${textSecondary}`}>{m.desc}</p>
                  <ul className="space-y-3">
                    {m.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-sm ${isDark ? "text-[#cbd5e1]" : "text-[#334155]"}`}
                      >
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2} className="text-center mt-8 max-w-3xl mx-auto">
            <p className={`text-xs leading-relaxed ${textSecondary}`}>{t("aa.modes.note")}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── TRUST ── */}
      <section className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("aa.trust.title")}
            </h2>
            <p className={`text-lg ${textSecondary}`}>{t("aa.trust.subtitle")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto" staggerDelay={0.1}>
            {trust.map((item) => (
              <StaggerItem key={item.title}>
                <div className="glass-card p-7 h-full" style={cardStyle}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(16,185,129,0.10)" }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <h3 className={`font-display font-semibold text-base mb-2 ${textPrimary}`}>{item.title}</h3>
                      <p className={`text-sm leading-relaxed ${textSecondary}`}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-24 md:py-32" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("aa.compare.title")}
            </h2>
            <p className={`text-lg mb-4 ${textSecondary}`}>{t("aa.compare.subtitle")}</p>
            <p className={`text-sm ${textSecondary}`}>{t("aa.compare.desc")}</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.12}>
            <StaggerItem>
              <div
                className="glass-card p-8 h-full"
                style={{
                  background: isDark ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.9)",
                  border: isDark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <h3 className={`font-display font-semibold text-base mb-6 ${textSecondary}`}>
                  {t("aa.compare.chatbot.title")}
                </h3>
                <ul className="space-y-3">
                  {chatbotItems.map((item) => (
                    <li key={item} className={`flex items-start gap-2.5 text-sm ${textSecondary}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64748b] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div
                className="glass-card p-8 h-full"
                style={{
                  background: cardStyle.background,
                  border: "1px solid rgba(16,185,129,0.4)",
                  boxShadow: "0 0 40px rgba(16,185,129,0.10)",
                }}
              >
                <h3 className="font-display font-semibold text-base mb-6" style={{ color: ACCENT }}>
                  {t("aa.compare.agent.title")}
                </h3>
                <ul className="space-y-3">
                  {agentItems.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-sm ${isDark ? "text-[#cbd5e1]" : "text-[#334155]"}`}
                    >
                      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span
              className="inline-flex items-center justify-center h-12 w-12 rounded-xl text-white mb-6"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})` }}
            >
              <Sparkles className="w-6 h-6" />
            </span>
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-6 ${textPrimary}`}>
              {t("aa.cta.title")}
            </h2>
            <p className={`text-lg mb-10 ${textSecondary}`}>{t("aa.cta.subtitle")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={AGENTAIER_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="aa-final-cta"
                className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-flex items-center gap-2 text-white transition-transform hover:translate-y-[-1px]"
                style={{
                  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
                  boxShadow: "0 10px 30px -10px rgba(16,185,129,0.5)",
                }}
              >
                {t("aa.cta.button")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#aa-how"
                className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-flex items-center gap-2 border transition-colors"
                style={{ color: ACCENT, borderColor: "rgba(16,185,129,0.4)" }}
              >
                {t("aa.cta.secondary")}
              </a>
            </div>

            <div className={`mt-12 pt-8 border-t ${isDark ? "border-white/[0.06]" : "border-black/[0.06]"}`}>
              <p className={`text-sm ${textSecondary}`}>{t("aa.footer.tagline")}</p>
              <p className={`font-mono-brand text-[11px] tracking-wider mt-2 ${isDark ? "text-[#64748b]" : "text-[#94a3b8]"}`}>
                {t("aa.footer.note")}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
