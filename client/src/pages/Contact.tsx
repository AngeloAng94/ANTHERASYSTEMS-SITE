/*
 * ANTHERA Systems — Contact Page
 * Design: Atmospheric Dark Elegance | i18n + theme aware
 */
import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import AnimatedSection from "@/components/AnimatedSection";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/106888006/vTmdwLhjlkhRYAhg.png";

export default function Contact() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";
  const bg2 = isDark ? "#0f172a" : "#f1f5f9";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";

  const inputClasses = isDark
    ? "w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-[#64748b] focus:border-[#3b82f6]/50 focus:outline-none focus:ring-1 focus:ring-[#3b82f6]/30 transition-colors"
    : "w-full px-4 py-3 rounded-lg bg-black/[0.03] border border-black/[0.08] text-[#0f172a] text-sm placeholder-[#94a3b8] focus:border-[#3b82f6]/50 focus:outline-none focus:ring-1 focus:ring-[#3b82f6]/30 transition-colors";

  const selectBg = isDark ? "#0f172a" : "#f1f5f9";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t("contact.form.error"));
      return;
    }

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success(t("contact.form.toast"));
      } else {
        throw new Error("Netlify form submission failed");
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617]" : "bg-gradient-to-b from-white/80 via-white/60 to-white"}`} />
        </div>
        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl">
            <AnimatedSection>
              <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}>
                {t("contact.hero.title")}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className={`text-lg md:text-xl leading-relaxed max-w-2xl ${textSecondary}`}>
                {t("contact.hero.desc")}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="py-24 md:py-32" style={{ background: bg2 }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3" direction="left">
              <div className="glass-card p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full mx-auto mb-6 bg-[#3b82f6]/20 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-[#3b82f6]" />
                    </div>
                    <h3 className={`font-display font-bold text-2xl mb-3 ${textPrimary}`}>
                      {t("contact.form.success.title")}
                    </h3>
                    <p className={`text-sm ${textSecondary}`}>
                      {t("contact.form.success.desc")}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", company: "", interest: "", message: "" });
                      }}
                      className="mt-6 text-[#3b82f6] font-display font-semibold text-sm hover:underline"
                    >
                      {t("contact.form.success.again")}
                    </button>
                  </div>
                ) : (
                  <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    {/* Hidden input for Netlify bot protection and form identification */}
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                          {t("contact.form.name")} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder={t("contact.form.name.ph")}
                          required
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                          {t("contact.form.email")} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder={t("contact.form.email.ph")}
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                          {t("contact.form.company")}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClasses}
                          placeholder={t("contact.form.company.ph")}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                          {t("contact.form.interest")}
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className={`${inputClasses} appearance-none`}
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                        >
                          <option value="" style={{ background: selectBg }}>{t("contact.form.interest.ph")}</option>
                          <option value="powerleave" style={{ background: selectBg }}>PowerLeave</option>
                          <option value="governai" style={{ background: selectBg }}>GOVERN.AI</option>
                          <option value="both" style={{ background: selectBg }}>{t("contact.form.interest.both")}</option>
                          <option value="other" style={{ background: selectBg }}>{t("contact.form.interest.other")}</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                        {t("contact.form.message")} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`${inputClasses} resize-none`}
                        placeholder={t("contact.form.message.ph")}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-gradient w-full py-3.5 rounded-lg font-display font-semibold text-sm"
                    >
                      {t("contact.form.submit")}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
            {/* Info sidebar */}
            <AnimatedSection className="lg:col-span-2" direction="right">
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#3b82f6]/10 shrink-0">
                      <Mail className="w-5 h-5 text-[#3b82f6]" />
                    </div>
                    <div>
                      <h4 className={`font-display font-semibold text-sm mb-1 ${textPrimary}`}>{t("contact.info.email")}</h4>
                      <a href="mailto:info@antherasystems.com" className="text-[#3b82f6] text-sm hover:underline">
                        info@antherasystems.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#6366f1]/10 shrink-0">
                      <MapPin className="w-5 h-5 text-[#6366f1]" />
                    </div>
                    <div>
                      <h4 className={`font-display font-semibold text-sm mb-1 ${textPrimary}`}>{t("contact.info.location")}</h4>
                      <p className={`text-sm ${textSecondary}`}>{t("contact.info.location.val")}</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#06b6d4]/10 shrink-0">
                      <Clock className="w-5 h-5 text-[#06b6d4]" />
                    </div>
                    <div>
                      <h4 className={`font-display font-semibold text-sm mb-1 ${textPrimary}`}>{t("contact.info.response")}</h4>
                      <p className={`text-sm ${textSecondary}`}>{t("contact.info.response.val")}</p>
                    </div>
                  </div>
                </div>
                <div className="glass-card p-6">
                  <p className={`text-sm leading-relaxed ${textSecondary}`}>
                    {t("contact.info.direct")}{" "}
                    <a href="mailto:info@antherasystems.com" className="text-[#3b82f6] hover:underline">
                      info@antherasystems.com
                    </a>{" "}
                    {t("contact.info.direct2")}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
