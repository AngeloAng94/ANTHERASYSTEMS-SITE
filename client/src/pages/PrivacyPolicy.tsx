import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const isDark = theme === "dark";

  const bg = isDark ? "#020617" : "#f8fafc";
  const textPrimary = isDark ? "text-white" : "text-[#0f172a]";
  const textSecondary = isDark ? "text-[#94a3b8]" : "text-[#64748b]";
  const cardBg = isDark ? "#0f172a" : "#ffffff";
  const borderColor = isDark ? "#1e293b" : "#e2e8f0";

  const isIT = language === "it";

  return (
    <div style={{ background: bg }} className={`min-h-screen ${textPrimary}`}>
      {/* Hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-[#020617] via-[#020617]/80 to-[#020617]" : "bg-gradient-to-b from-white/80 via-white/60 to-white"}`} />
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6" style={{ borderColor, background: isDark ? "#0f172a" : "#f1f5f9" }}>
            <span className="text-xs font-mono tracking-wider text-[#3b82f6]">LEGAL</span>
          </div>
          <h1 className={`font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] mb-6 ${textPrimary}`}>
            {isIT ? "Privacy" : "Privacy"}{" "}
            <span className="gradient-text-blue">{isIT ? "Policy" : "Policy"}</span>
          </h1>
          <p className={`text-lg ${textSecondary} max-w-2xl`}>
            {isIT
              ? "Come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali."
              : "How we collect, use, and protect your personal data."}
          </p>
          <p className={`mt-4 text-sm ${textSecondary}`}>
            {isIT ? "Ultimo aggiornamento: 6 maggio 2026" : "Last updated: May 6, 2026"}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Sezione 1 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "1. Titolare del trattamento" : "1. Data Controller"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "Il titolare del trattamento dei dati personali è ANTHERA Systems, con sede in Italia. Per qualsiasi richiesta relativa ai tuoi dati, puoi contattarci all'indirizzo:"
                : "The data controller is ANTHERA Systems, based in Italy. For any requests regarding your data, you can contact us at:"}
            </p>
            <p className="mt-3 font-mono text-[#3b82f6]">info@antherasystems.com</p>
          </div>

          {/* Sezione 2 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "2. Dati raccolti" : "2. Data We Collect"}
            </h2>
            <p className={`mb-4 ${textSecondary}`}>
              {isIT
                ? "Raccogliamo esclusivamente i dati che ci fornisci volontariamente, tra cui:"
                : "We only collect data you voluntarily provide to us, including:"}
            </p>
            <ul className={`space-y-2 ${textSecondary}`}>
              {[
                isIT ? "Nome e cognome" : "Full name",
                isIT ? "Indirizzo email aziendale" : "Business email address",
                isIT ? "Nome dell'azienda" : "Company name",
                isIT ? "Messaggi inviati tramite il modulo di contatto" : "Messages sent via the contact form",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sezione 3 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "3. Finalità del trattamento" : "3. Purpose of Processing"}
            </h2>
            <p className={`mb-4 ${textSecondary}`}>
              {isIT ? "I tuoi dati vengono utilizzati per:" : "Your data is used for:"}
            </p>
            <ul className={`space-y-2 ${textSecondary}`}>
              {[
                isIT ? "Rispondere alle tue richieste e messaggi" : "Responding to your requests and messages",
                isIT ? "Fornire dimostrazioni dei nostri prodotti" : "Providing product demonstrations",
                isIT ? "Inviarti comunicazioni commerciali (solo con consenso)" : "Sending commercial communications (only with consent)",
                isIT ? "Migliorare i nostri servizi" : "Improving our services",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sezione 4 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "4. Base giuridica" : "4. Legal Basis"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "Il trattamento dei tuoi dati si basa sul tuo consenso esplicito (Art. 6(1)(a) GDPR) e sull'esecuzione di misure precontrattuali su tua richiesta (Art. 6(1)(b) GDPR)."
                : "Processing of your data is based on your explicit consent (Art. 6(1)(a) GDPR) and on the execution of pre-contractual measures at your request (Art. 6(1)(b) GDPR)."}
            </p>
          </div>

          {/* Sezione 5 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "5. Conservazione dei dati" : "5. Data Retention"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "I tuoi dati vengono conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti, e comunque non oltre 24 mesi dall'ultima interazione."
                : "Your data is retained for the time strictly necessary to achieve the purposes for which it was collected, and in any case no longer than 24 months from the last interaction."}
            </p>
          </div>

          {/* Sezione 6 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "6. I tuoi diritti (GDPR)" : "6. Your Rights (GDPR)"}
            </h2>
            <p className={`mb-4 ${textSecondary}`}>
              {isIT ? "Ai sensi del GDPR, hai diritto a:" : "Under the GDPR, you have the right to:"}
            </p>
            <ul className={`space-y-2 ${textSecondary}`}>
              {[
                isIT ? "Accedere ai tuoi dati personali" : "Access your personal data",
                isIT ? "Richiederne la rettifica o cancellazione" : "Request rectification or erasure",
                isIT ? "Opporti al trattamento" : "Object to processing",
                isIT ? "Richiedere la portabilità dei dati" : "Request data portability",
                isIT ? "Revocare il consenso in qualsiasi momento" : "Withdraw consent at any time",
                isIT ? "Proporre reclamo all'Autorità Garante" : "Lodge a complaint with the supervisory authority",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sezione 7 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "7. Cookie" : "7. Cookies"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Non utilizziamo cookie di profilazione o di tracciamento di terze parti."
                : "This website uses only technical cookies necessary for its operation. We do not use third-party profiling or tracking cookies."}
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border p-8 text-center" style={{ background: isDark ? "#0a1628" : "#eff6ff", borderColor: "#3b82f6" }}>
            <p className={`mb-4 ${textSecondary}`}>
              {isIT ? "Hai domande sulla nostra privacy policy?" : "Questions about our privacy policy?"}
            </p>
            <Link href="/contact">
              <button className="px-6 py-3 rounded-xl bg-[#3b82f6] text-white font-semibold hover:bg-[#2563eb] transition-colors">
                {isIT ? "Contattaci" : "Contact Us"}
              </button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
