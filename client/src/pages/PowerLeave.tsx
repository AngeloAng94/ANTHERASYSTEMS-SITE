/*
 * ANTHERA PowerLeave — Product Page
 * Accent: #3b82f6 (blue) | i18n + theme aware
 * Aligned with live product: https://company-leave-app.preview.emergentagent.com/
 */

import { Link } from "wouter";
import {
  LayoutDashboard,
  CheckCircle2,
  CalendarDays,
  BarChart3,
  Building2,
  Layers,
  Check,
} from "lucide-react";
import AnimatedSection, { StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/BozZNfDvMwFIILLH.png";
const POWERLEAVE_LOGO = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/bPlrXnwRZvOYpPUR.png";

const APP_REGISTER = "https://company-leave-app.preview.static.emergentagent.com/#/register";
const APP_LOGIN = "https://company-leave-app.preview.static.emergentagent.com/#/login";

const techStack = [
  "React 18",
  "FastAPI (Python)",
  "MongoDB",
  "JWT + Google Auth",
  "Multi-tenant",
  "GitHub Actions",
];

export default function PowerLeave() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const bg1 = isDark ? "#020617" : "#f8fafc";
  const bg2 = isDark ? "#0f172a" : "#f1f5f9";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";

  const features = [
    { icon: LayoutDashboard, title: t("pl.f1.title"), desc: t("pl.f1.desc") },
    { icon: CheckCircle2, title: t("pl.f2.title"), desc: t("pl.f2.desc") },
    { icon: CalendarDays, title: t("pl.f3.title"), desc: t("pl.f3.desc") },
    { icon: BarChart3, title: t("pl.f4.title"), desc: t("pl.f4.desc") },
    { icon: Building2, title: t("pl.f5.title"), desc: t("pl.f5.desc") },
    { icon: Layers, title: t("pl.f6.title"), desc: t("pl.f6.desc") },
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
    external?: boolean;
  };

  const plans: Plan[] = [
    {
      name: t("pl.pricing.free.name"),
      desc: t("pl.pricing.free.desc"),
      price: t("pl.pricing.free.price"),
      unit: t("pl.pricing.free.unit"),
      features: [
        t("pl.pricing.free.f1"),
        t("pl.pricing.free.f2"),
        t("pl.pricing.free.f3"),
      ],
      cta: t("pl.pricing.free.cta"),
      href: APP_REGISTER,
      highlighted: false,
      external: true,
    },
    {
      name: t("pl.pricing.pro.name"),
      desc: t("pl.pricing.pro.desc"),
      price: t("pl.pricing.pro.price"),
      unit: t("pl.pricing.pro.unit"),
      features: [
        t("pl.pricing.pro.f1"),
        t("pl.pricing.pro.f2"),
        t("pl.pricing.pro.f3"),
        t("pl.pricing.pro.f4"),
      ],
      cta: t("pl.pricing.pro.cta"),
      href: APP_REGISTER,
      highlighted: true,
      external: true,
    },
    {
      name: t("pl.pricing.ent.name"),
      desc: t("pl.pricing.ent.desc"),
      price: t("pl.pricing.ent.price"),
      unit: t("pl.pricing.ent.unit"),
      features: [
        t("pl.pricing.ent.f1"),
        t("pl.pricing.ent.f2"),
        t("pl.pricing.ent.f3"),
        t("pl.pricing.ent.f4"),
      ],
      cta: t("pl.pricing.ent.cta"),
      href: "/contact",
      highlighted: false,
      external: false,
    },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617]"
                : "bg-gradient-to-b from-white/80 via-white/60 to-white"
            }`}
          />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <AnimatedSection>
              <span className="inline-flex items-center gap-3 mb-6 flex-wrap">
                <img src={POWERLEAVE_LOGO} alt="PowerLeave" className="h-12 w-auto rounded-lg" />
                <span className="font-mono-brand text-[11px] tracking-wider text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1.5 rounded-md border border-[#3b82f6]/20">
                  ANTHERA POWERLEAVE
                </span>
                <span className="font-mono-brand text-[11px] tracking-wider text-[#06b6d4] bg-[#06b6d4]/10 px-3 py-1.5 rounded-md border border-[#06b6d4]/20">
                  {t("pl.badge")}
                </span>
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1
                className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}
              >
                {t("pl.hero.title1")}{" "}
                <span className="gradient-text-blue">{t("pl.hero.title2")}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl mb-10 ${textSecondary}`}>
                {t("pl.hero.desc")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href={APP_REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="pl-hero-cta-register"
                  className="btn-gradient px-8 py-3.5 rounded-lg font-display font-semibold text-sm inline-block"
                >
                  {t("pl.hero.cta1")}
                </a>
                <a
                  href={APP_LOGIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="pl-hero-cta-demo"
                  className="px-8 py-3.5 rounded-lg font-display font-semibold text-sm border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors inline-block"
                >
                  {t("pl.hero.cta2")}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs"
                style={{
                  background: isDark ? "rgba(2,6,23,0.6)" : "rgba(255,255,255,0.8)",
                  border: isDark
                    ? "1px solid rgba(59,130,246,0.25)"
                    : "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <span
                  className={`font-mono-brand tracking-wider ${
                    isDark ? "text-[#94a3b8]" : "text-[#64748b]"
                  }`}
                >
                  {t("pl.hero.demo")}:
                </span>
                <code
                  className={`font-mono-brand font-semibold ${
                    isDark ? "text-white" : "text-[#0f172a]"
                  }`}
                >
                  {t("pl.hero.democreds")}
                </code>
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
              {t("pl.features.title")}{" "}
              <span className="gradient-text-blue">{t("pl.features.title2")}</span>
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
                    border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-[#3b82f6]/10">
                    <f.icon className="w-5 h-5 text-[#3b82f6]" />
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

      {/* ── STACK TECNICO ── */}
      <section className="py-20" style={{ background: bg1 }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <h2 className={`font-display font-bold text-2xl mb-8 ${textPrimary}`}>
              {t("pl.stack.title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-brand text-sm px-5 py-2.5 rounded-lg bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20"
                >
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
            <h2 className={`font-display font-bold text-3xl md:text-4xl mb-4 ${textPrimary}`}>
              {t("pl.pricing.title")}
            </h2>
            <p className={`text-lg ${textSecondary}`}>{t("pl.pricing.desc")}</p>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            staggerDelay={0.12}
          >
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div
                  className={`glass-card p-8 h-full flex flex-col ${
                    plan.highlighted
                      ? "shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                      : ""
                  }`}
                  style={{
                    background: isDark ? "rgba(2,6,23,0.9)" : "rgba(255,255,255,0.9)",
                    border: plan.highlighted
                      ? "1px solid rgba(59,130,246,0.45)"
                      : isDark
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  {plan.highlighted && (
                    <span className="font-mono-brand text-[10px] tracking-wider text-[#3b82f6] bg-[#3b82f6]/10 px-3 py-1 rounded-md self-start mb-4 border border-[#3b82f6]/20">
                      {t("pl.pricing.popular")}
                    </span>
                  )}

                  <h3 className={`font-display font-bold text-xl mb-1 ${textPrimary}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${textSecondary}`}>{plan.desc}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className={`font-display font-bold text-4xl ${textPrimary}`}
                    >
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
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#3b82f6]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.external ? (
                    <a
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`pl-pricing-${plan.name.toLowerCase()}-cta`}
                      className={`mt-auto px-6 py-3 rounded-lg font-display font-semibold text-sm text-center block ${
                        plan.highlighted
                          ? "btn-gradient"
                          : "border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors"
                      }`}
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <Link
                      href={plan.href}
                      data-testid={`pl-pricing-${plan.name.toLowerCase()}-cta`}
                      className={`mt-auto px-6 py-3 rounded-lg font-display font-semibold text-sm text-center block ${
                        plan.highlighted
                          ? "btn-gradient"
                          : "border border-[#3b82f6]/40 text-[#3b82f6] hover:bg-[#3b82f6]/10 transition-colors"
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
