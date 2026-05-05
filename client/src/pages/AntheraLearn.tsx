/*
 * ANTHERA Learn — Product Page
 * Accent: #06b6d4 (cyan) → #3b82f6 gradient
 * Aligned with live product: https://ai-mastery-lab-4.preview.emergentagent.com/
 */

import { Link } from "wouter";
import { useMemo, useState } from "react";
import {
  Sparkles,
  GraduationCap,
  Zap,
  Bot,
  Languages,
  Award,
  BookOpen,
  Gauge,
  Wallet,
  UserCheck,
  Filter,
  Check,
  ArrowRight,
} from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const APP_REGISTER = "https://ai-mastery-lab-4.preview.emergentagent.com/register";
const APP_DEMO = "https://ai-mastery-lab-4.preview.emergentagent.com/#demo";

const ACCENT = "#06b6d4";
const ACCENT_2 = "#3b82f6";
const gradientStyle = {
  background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export default function AntheraLearn() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  // ── Mini-exercise state (lead capture, no backend) ──
  const [exerciseText, setExerciseText] = useState("");
  const [exerciseError, setExerciseError] = useState(false);

  const checks = useMemo(() => {
    const txt = exerciseText.trim().toLowerCase();
    const len = txt.length;
    const wordCount = txt.split(/\s+/).filter(Boolean).length;

    // Heuristic 1 — Context: enough length + presence of qualifiers
    const contextWords = ["per", "rivolto", "audience", "pubblico", "target", "azienda", "settore", "for", "audience", "company", "industry"];
    const hasContext = len >= 60 && contextWords.some((w) => txt.includes(w));

    // Heuristic 2 — Task: clear action verbs
    const taskVerbs = ["scriv", "crea", "genera", "elenca", "spiega", "riassumi", "propon", "write", "create", "generate", "list", "explain", "summarize", "propose"];
    const hasTask = taskVerbs.some((v) => txt.includes(v));

    // Heuristic 3 — Criteria: tone, length, format markers
    const criteriaMarkers = ["tono", "stile", "lunghezza", "parole", "formato", "punti", "elenco", "esempi", "tone", "style", "length", "words", "format", "bullet", "examples"];
    const hasCriteria = criteriaMarkers.some((m) => txt.includes(m)) || /\d{2,}/.test(txt);

    return {
      hasContext,
      hasTask,
      hasCriteria,
      score: [hasContext, hasTask, hasCriteria].filter(Boolean).length,
      wordCount,
    };
  }, [exerciseText]);

  const handleEvaluate = () => {
    if (!exerciseText.trim()) {
      setExerciseError(true);
      return;
    }
    // Persist draft for live app to potentially read on same-domain or via custom logic
    try {
      localStorage.setItem("anthera_exercise_draft", exerciseText);
    } catch {
      /* localStorage unavailable */
    }
    window.open(APP_DEMO, "_blank", "noopener,noreferrer");
  };

  const bg1 = isDark ? "#020617" : "#f8fafc";
  const bg2 = isDark ? "#0f172a" : "#f1f5f9";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";

  const features = [
    { icon: UserCheck, title: t("al.f1.title"), desc: t("al.f1.desc") },
    { icon: Zap, title: t("al.f2.title"), desc: t("al.f2.desc") },
    { icon: Bot, title: t("al.f3.title"), desc: t("al.f3.desc") },
    { icon: BookOpen, title: t("al.f4.title"), desc: t("al.f4.desc") },
    { icon: Languages, title: t("al.f5.title"), desc: t("al.f5.desc") },
    { icon: Award, title: t("al.f6.title"), desc: t("al.f6.desc") },
  ];

  const whyCards = [
    { icon: Gauge, title: t("al.w1.title"), desc: t("al.w1.desc") },
    { icon: Wallet, title: t("al.w2.title"), desc: t("al.w2.desc") },
    { icon: UserCheck, title: t("al.w3.title"), desc: t("al.w3.desc") },
    { icon: Filter, title: t("al.w4.title"), desc: t("al.w4.desc") },
  ];

  type Plan = {
    name: string;
    desc: string;
    price: string;
    unit: string;
    features: string[];
    cta: string;
    href: string;
    highlighted: boolean;
  };

  const plans: Plan[] = [
    {
      name: t("al.pricing.free.name"),
      desc: t("al.pricing.free.desc"),
      price: t("al.pricing.free.price"),
      unit: t("al.pricing.free.unit"),
      features: [
        t("al.pricing.free.f1"),
        t("al.pricing.free.f2"),
        t("al.pricing.free.f3"),
      ],
      cta: t("al.pricing.free.cta"),
      href: APP_REGISTER,
      highlighted: false,
    },
    {
      name: t("al.pricing.pro.name"),
      desc: t("al.pricing.pro.desc"),
      price: t("al.pricing.pro.price"),
      unit: t("al.pricing.pro.unit"),
      features: [
        t("al.pricing.pro.f1"),
        t("al.pricing.pro.f2"),
        t("al.pricing.pro.f3"),
        t("al.pricing.pro.f4"),
      ],
      cta: t("al.pricing.pro.cta"),
      href: APP_REGISTER,
      highlighted: true,
    },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: bg1 }}>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(6,182,212,0.18), transparent 50%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.18), transparent 50%)",
            }}
          />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
            {/* ── LEFT: Hero copy ── */}
            <div>
              <AnimatedSection>
              <span className="inline-flex items-center gap-3 mb-6 flex-wrap">
                <span
                  className="inline-flex items-center justify-center h-12 w-12 rounded-xl text-white font-display font-bold text-xl"
                  style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})` }}
                  data-testid="al-hero-logo"
                >
                  <GraduationCap className="w-6 h-6" />
                </span>
                <span
                  className="font-mono-brand text-[11px] tracking-wider px-3 py-1.5 rounded-md border"
                  style={{
                    color: ACCENT,
                    background: "rgba(6,182,212,0.10)",
                    borderColor: "rgba(6,182,212,0.25)",
                  }}
                >
                  ANTHERA LEARN
                </span>
                <span
                  className="font-mono-brand text-[11px] tracking-wider px-3 py-1.5 rounded-md border inline-flex items-center gap-1.5"
                  style={{
                    color: ACCENT_2,
                    background: "rgba(59,130,246,0.10)",
                    borderColor: "rgba(59,130,246,0.25)",
                  }}
                >
                  <Sparkles className="w-3 h-3" />
                  {t("al.badge")}
                </span>
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1
                className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}
              >
                {t("al.hero.title1")}{" "}
                <span style={gradientStyle}>{t("al.hero.title2")}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 ${textSecondary}`}>
                {t("al.hero.desc")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={APP_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="al-hero-cta-register"
                  className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-block text-white transition-transform hover:translate-y-[-1px]"
                  style={{
                    background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
                    boxShadow: "0 10px 30px -10px rgba(6,182,212,0.5)",
                  }}
                >
                  {t("al.hero.cta1")}
                </a>
                <a
                  href={APP_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="al-hero-cta-demo"
                  className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-flex items-center gap-2 border transition-colors"
                  style={{
                    color: ACCENT,
                    borderColor: "rgba(6,182,212,0.4)",
                    background: "transparent",
                  }}
                >
                  <Zap className="w-4 h-4" />
                  {t("al.hero.cta2")}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs ${textSecondary}`}>
                <span className="inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  {t("al.hero.meta1")}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  {t("al.hero.meta2")}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" style={{ color: "#10b981" }} />
                  {t("al.hero.meta3")}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div
                className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-[11px] font-mono-brand tracking-wider"
                style={{
                  background: isDark ? "rgba(245,158,11,0.08)" : "rgba(245,158,11,0.10)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  color: "#f59e0b",
                }}
              >
                <Sparkles className="w-3 h-3" />
                {t("al.beta")}
              </div>
            </AnimatedSection>
            </div>

            {/* ── RIGHT: Mini-exercise widget (lead capture, no backend) ── */}
            <AnimatedSection delay={0.3}>
              <div
                className="rounded-2xl p-6 md:p-7 backdrop-blur-xl"
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, rgba(2,6,23,0.85), rgba(15,23,42,0.85))"
                    : "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))",
                  border: isDark
                    ? "1px solid rgba(6,182,212,0.25)"
                    : "1px solid rgba(6,182,212,0.20)",
                  boxShadow: isDark
                    ? "0 24px 60px -20px rgba(6,182,212,0.25), 0 0 0 1px rgba(6,182,212,0.05) inset"
                    : "0 24px 60px -20px rgba(6,182,212,0.18)",
                }}
                data-testid="al-exercise-card"
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(6,182,212,0.15)" }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <h3 className={`font-display font-semibold text-sm ${textPrimary}`}>
                    {t("al.exercise.title")}
                  </h3>
                </div>

                {/* Intro */}
                <p className={`text-sm leading-relaxed mb-3 ${textSecondary}`}>
                  {t("al.exercise.intro")}
                </p>

                {/* Prompt to reframe */}
                <div
                  className="rounded-lg px-3 py-2.5 mb-4 font-mono-brand text-sm"
                  style={{
                    background: isDark ? "rgba(15,23,42,0.7)" : "rgba(15,23,42,0.05)",
                    border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                    color: isDark ? "#cbd5e1" : "#334155",
                  }}
                >
                  &ldquo;{t("al.exercise.prompt")}&rdquo;
                </div>

                {/* Textarea */}
                <textarea
                  value={exerciseText}
                  onChange={(e) => {
                    setExerciseText(e.target.value);
                    if (exerciseError) setExerciseError(false);
                  }}
                  placeholder={t("al.exercise.placeholder")}
                  rows={4}
                  data-testid="al-exercise-textarea"
                  className={`w-full rounded-lg px-3.5 py-3 text-sm resize-none focus:outline-none transition-colors ${
                    isDark ? "text-white placeholder:text-[#64748b]" : "text-[#0f172a] placeholder:text-[#94a3b8]"
                  }`}
                  style={{
                    background: isDark ? "rgba(2,6,23,0.5)" : "rgba(255,255,255,0.7)",
                    border: exerciseError
                      ? "1px solid #ef4444"
                      : isDark
                      ? "1px solid rgba(255,255,255,0.10)"
                      : "1px solid rgba(0,0,0,0.10)",
                  }}
                />

                {/* Live checks */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                  {[
                    { ok: checks.hasContext, label: t("al.exercise.check1") },
                    { ok: checks.hasTask, label: t("al.exercise.check2") },
                    { ok: checks.hasCriteria, label: t("al.exercise.check3") },
                  ].map((c, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-md text-xs transition-all"
                      style={{
                        background: c.ok
                          ? "rgba(16,185,129,0.10)"
                          : isDark
                          ? "rgba(255,255,255,0.03)"
                          : "rgba(0,0,0,0.03)",
                        border: c.ok
                          ? "1px solid rgba(16,185,129,0.30)"
                          : isDark
                          ? "1px solid rgba(255,255,255,0.06)"
                          : "1px solid rgba(0,0,0,0.06)",
                        color: c.ok ? "#10b981" : isDark ? "#64748b" : "#94a3b8",
                      }}
                      data-testid={`al-exercise-check-${i + 1}`}
                    >
                      <Check
                        className="w-3.5 h-3.5 shrink-0 transition-opacity"
                        style={{ opacity: c.ok ? 1 : 0.4 }}
                      />
                      <span className="truncate">{c.label}</span>
                    </div>
                  ))}
                </div>

                {exerciseError && (
                  <p className="text-xs mt-3" style={{ color: "#ef4444" }}>
                    {t("al.exercise.empty")}
                  </p>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <button
                    type="button"
                    onClick={handleEvaluate}
                    data-testid="al-exercise-evaluate-btn"
                    className="flex-1 px-5 py-3 rounded-lg font-display font-semibold text-sm text-white inline-flex items-center justify-center gap-2 transition-transform hover:translate-y-[-1px]"
                    style={{
                      background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
                      boxShadow: "0 10px 24px -10px rgba(6,182,212,0.5)",
                    }}
                  >
                    <Sparkles className="w-4 h-4" />
                    {t("al.exercise.evaluate")}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href={APP_REGISTER}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="al-exercise-register-btn"
                    className="px-5 py-3 rounded-lg font-display font-semibold text-sm text-center transition-colors"
                    style={{
                      color: ACCENT,
                      border: "1px solid rgba(6,182,212,0.4)",
                    }}
                  >
                    {t("al.exercise.register")}
                  </a>
                </div>

                {/* Hint */}
                <p
                  className={`text-[11px] leading-relaxed mt-4 inline-flex items-start gap-1.5 ${textSecondary}`}
                >
                  <Bot className="w-3 h-3 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                  <span>{t("al.exercise.hint")}</span>
                </p>
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
              {t("al.features.title")}{" "}
              <span style={gradientStyle}>{t("al.features.title2")}</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            staggerDelay={0.1}
          >
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div
                  className="glass-card-hover p-7 h-full"
                  style={{
                    background: isDark ? "rgba(2,6,23,0.9)" : "rgba(255,255,255,0.9)",
                    border: isDark
                      ? "1px solid rgba(6,182,212,0.20)"
                      : "1px solid rgba(6,182,212,0.15)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(6,182,212,0.12)" }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <h3 className={`font-display font-semibold text-base mb-2 ${textPrimary}`}>
                    {f.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── WHY AI NOW ── */}
      <section className="py-24 md:py-32" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("al.why.title")} <span style={gradientStyle}>{t("al.why.title2")}</span>
            </h2>
            <p className={`text-lg ${textSecondary}`}>{t("al.why.desc")}</p>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            staggerDelay={0.1}
          >
            {whyCards.map((card) => (
              <StaggerItem key={card.title}>
                <div
                  className="glass-card p-7 h-full"
                  style={{
                    background: isDark ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.9)",
                    border: isDark ? "1px solid rgba(255,255,255,0.10)" : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(6,182,212,0.10)" }}
                    >
                      <card.icon className="w-5 h-5" style={{ color: ACCENT }} />
                    </div>
                    <div>
                      <h3 className={`font-display font-semibold text-base mb-2 ${textPrimary}`}>
                        {card.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${textSecondary}`}>{card.desc}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── POWERED BY ── */}
      <section className="py-16" style={{ background: bg2 }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <h3
              className={`font-mono-brand text-xs tracking-[0.3em] mb-5 uppercase ${textSecondary}`}
            >
              {t("al.stack.title")}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "Anthropic Claude", color: ACCENT },
                { name: "React", color: ACCENT_2 },
                { name: "FastAPI", color: ACCENT },
                { name: "MongoDB", color: ACCENT_2 },
                { name: "Multi-language", color: ACCENT },
              ].map((tech) => (
                <span
                  key={tech.name}
                  className="font-mono-brand text-sm px-4 py-2 rounded-lg border"
                  style={{
                    color: tech.color,
                    background: `${tech.color}15`,
                    borderColor: `${tech.color}33`,
                  }}
                >
                  {tech.name}
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
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("al.pricing.title")}
            </h2>
            <p className={`text-lg ${textSecondary}`}>{t("al.pricing.desc")}</p>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            staggerDelay={0.12}
          >
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div
                  className={`glass-card p-8 h-full flex flex-col ${
                    plan.highlighted ? "shadow-[0_0_40px_rgba(6,182,212,0.18)]" : ""
                  }`}
                  style={{
                    background: isDark ? "rgba(2,6,23,0.9)" : "rgba(255,255,255,0.9)",
                    border: plan.highlighted
                      ? "1px solid rgba(6,182,212,0.5)"
                      : isDark
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {plan.highlighted && (
                    <span
                      className="font-mono-brand text-[10px] tracking-wider px-3 py-1 rounded-md self-start mb-4 border"
                      style={{
                        color: ACCENT,
                        background: "rgba(6,182,212,0.10)",
                        borderColor: "rgba(6,182,212,0.25)",
                      }}
                    >
                      {t("al.pricing.popular")}
                    </span>
                  )}

                  <h3 className={`font-display font-bold text-xl mb-1 ${textPrimary}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${textSecondary}`}>{plan.desc}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`font-display font-bold text-4xl ${textPrimary}`}>
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className={`text-sm ${textSecondary}`}>{plan.unit}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 text-sm ${
                          isDark ? "text-[#cbd5e1]" : "text-[#334155]"
                        }`}
                      >
                        <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ACCENT }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`al-pricing-${plan.name.toLowerCase()}-cta`}
                    className="mt-auto px-6 py-3 rounded-lg font-display font-semibold text-sm text-center block transition-colors"
                    style={
                      plan.highlighted
                        ? {
                            background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
                            color: "#fff",
                          }
                        : {
                            color: ACCENT,
                            border: "1px solid rgba(6,182,212,0.4)",
                          }
                    }
                  >
                    {plan.cta}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.3} className="text-center mt-10">
            <Link
              href="/contact"
              className="text-sm font-display font-semibold hover:underline"
              style={{ color: ACCENT }}
              data-testid="al-pricing-contact-link"
            >
              {t("nav.contact")} →
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
