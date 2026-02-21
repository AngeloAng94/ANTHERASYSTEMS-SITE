import { Link } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/sVLDfOfljKNesubS.png";

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";
  const textMuted = isDark ? "text-[#64748b]" : "text-[#94a3b8]";

  return (
    <footer className="relative" style={{ background: isDark ? '#020617' : '#f8fafc' }}>
      <div className="section-divider" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img src={LOGO_URL} alt="ANTHERA" className="h-9 w-auto" />
              <div className="flex flex-col">
                <span className={`font-display font-bold text-lg tracking-wider leading-none ${textPrimary}`}>
                  ANTHERA
                </span>
                <span className="font-mono-brand text-[10px] tracking-[0.3em] text-[#3b82f6] leading-none mt-0.5">
                  SYSTEMS
                </span>
              </div>
            </Link>
            <p className={`text-sm leading-relaxed mb-4 ${textSecondary}`}>
              {t("footer.desc")}<br />{t("footer.desc2")}
            </p>
            <p className={`font-mono-brand text-xs ${textMuted}`}>
              {t("footer.built")}
            </p>
          </div>

          {/* Prodotti */}
          <div>
            <h4 className={`font-display font-semibold text-sm mb-5 tracking-wide ${textPrimary}`}>
              {t("footer.products")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/powerleave" className={`text-sm hover:text-[#3b82f6] transition-colors ${textSecondary}`}>
                  PowerLeave
                </Link>
              </li>
              <li>
                <Link href="/govern-ai" className={`text-sm hover:text-[#6366f1] transition-colors ${textSecondary}`}>
                  GOVERN.AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`font-display font-semibold text-sm mb-5 tracking-wide ${textPrimary}`}>
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className={`text-sm hover:text-[#3b82f6] transition-colors ${textSecondary}`}>
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`text-sm hover:text-[#3b82f6] transition-colors ${textSecondary}`}>
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={`font-display font-semibold text-sm mb-5 tracking-wide ${textPrimary}`}>
              {t("footer.legal")}
            </h4>
            <ul className="space-y-3">
              <li><span className={`text-sm cursor-default ${textMuted}`}>Privacy Policy</span></li>
              <li><span className={`text-sm cursor-default ${textMuted}`}>Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark ? "border-white/[0.06]" : "border-black/[0.06]"
        }`}>
          <p className={`text-xs ${textMuted}`}>
            &copy; 2026 ANTHERA Systems. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono-brand text-[10px] text-[#3b82f6] tracking-wider">
              EMPOWERING INTELLIGENT SYSTEMS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
