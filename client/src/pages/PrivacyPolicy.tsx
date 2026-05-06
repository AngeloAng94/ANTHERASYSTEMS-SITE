import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const bg = isDark ? "#020617" : "#f8fafc";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";
  const cardBg = isDark ? "#0f172a" : "#ffffff";
  const borderColor = isDark ? "#1e293b" : "#e2e8f0";

  const sections = [
    { title: t("privacy.s1.title"), content: <p className={textSecondary}>{t("privacy.s1.text")}<br /><span className="mt-3 block font-mono text-[#3b82f6]">info@antherasystems.com</span></p> },
    { title: t("privacy.s2.title"), content: (<><p className={`mb-4 ${textSecondary}`}>{t("privacy.s2.intro")}</p><ul className={`space-y-2 ${textSecondary}`}>{[t("privacy.s2.i1"),t("privacy.s2.i2"),t("privacy.s2.i3"),t("privacy.s2.i4")].map((item,i)=><li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />{item}</li>)}</ul></>) },
    { title: t("privacy.s3.title"), content: (<><p className={`mb-4 ${textSecondary}`}>{t("privacy.s3.intro")}</p><ul className={`space-y-2 ${textSecondary}`}>{[t("privacy.s3.i1"),t("privacy.s3.i2"),t("privacy.s3.i3"),t("privacy.s3.i4")].map((item,i)=><li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />{item}</li>)}</ul></>) },
    { title: t("privacy.s4.title"), content: <p className={textSecondary}>{t("privacy.s4.text")}</p> },
    { title: t("privacy.s5.title"), content: <p className={textSecondary}>{t("privacy.s5.text")}</p> },
    { title: t("privacy.s6.title"), content: (<><p className={`mb-4 ${textSecondary}`}>{t("privacy.s6.intro")}</p><ul className={`space-y-2 ${textSecondary}`}>{[t("privacy.s6.i1"),t("privacy.s6.i2"),t("privacy.s6.i3"),t("privacy.s6.i4"),t("privacy.s6.i5"),t("privacy.s6.i6")].map((item,i)=><li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />{item}</li>)}</ul></>) },
    { title: t("privacy.s7.title"), content: <p className={textSecondary}>{t("privacy.s7.text")}</p> },
  ];

  return (
    <div style={{ background: bg }} className={`min-h-screen ${textPrimary}`}>
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" : "bg-gradient-to-b from-white/80 via-white/60 to-white"}`} />
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6" style={{ borderColor, background: isDark ? "#0f172a" : "#f1f5f9" }}>
            <span className="text-xs font-mono tracking-wider text-[#3b82f6]">{t("privacy.badge")}</span>
          </div>
          <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}>
            {t("privacy.title1")}{" "}
            <span className="gradient-text-blue">{t("privacy.title2")}</span>
          </h1>
          <p className={`text-lg ${textSecondary} max-w-2xl`}>{t("privacy.subtitle")}</p>
          <p className={`mt-4 text-sm ${textSecondary}`}>{t("privacy.updated")}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          {sections.map((section, i) => (
            <div key={i} className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
              <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>{section.title}</h2>
              {section.content}
            </div>
          ))}

          {/* CTA */}
          <div className="rounded-2xl border p-8 text-center" style={{ background: isDark ? "#0a1628" : "#eff6ff", borderColor: "#3b82f6" }}>
            <p className={`mb-4 ${textSecondary}`}>{t("privacy.cta.question")}</p>
            <Link href="/contact">
              <button className="px-6 py-3 rounded-xl bg-[#3b82f6] text-white font-semibold hover:bg-[#2563eb] transition-colors">
                {t("privacy.cta.btn")}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
