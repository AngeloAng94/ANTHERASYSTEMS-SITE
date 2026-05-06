import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";

export default function TermsOfService() {
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
            {isIT ? "Termini di" : "Terms of"}{" "}
            <span className="gradient-text-blue">{isIT ? "Servizio" : "Service"}</span>
          </h1>
          <p className={`text-lg ${textSecondary} max-w-2xl`}>
            {isIT
              ? "Le condizioni che regolano l'utilizzo dei prodotti e servizi ANTHERA Systems."
              : "The conditions governing the use of ANTHERA Systems products and services."}
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
              {isIT ? "1. Accettazione dei termini" : "1. Acceptance of Terms"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "Utilizzando i prodotti e i servizi di ANTHERA Systems, dichiari di aver letto, compreso e accettato integralmente i presenti Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare i nostri servizi."
                : "By using ANTHERA Systems products and services, you declare that you have read, understood, and fully accepted these Terms of Service. If you do not accept these terms, please do not use our services."}
            </p>
          </div>

          {/* Sezione 2 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "2. Descrizione dei servizi" : "2. Description of Services"}
            </h2>
            <p className={`mb-4 ${textSecondary}`}>
              {isIT ? "ANTHERA Systems fornisce i seguenti prodotti SaaS:" : "ANTHERA Systems provides the following SaaS products:"}
            </p>
            <ul className={`space-y-3 ${textSecondary}`}>
              {[
                { name: "PowerLeave", desc: isIT ? "Piattaforma per la gestione di ferie, assenze e permessi aziendali" : "Platform for managing company leave, absences, and permits" },
                { name: "GOVERN.AI", desc: isIT ? "Sovereign Control Plane per la governance degli agenti AI aziendali" : "Sovereign Control Plane for enterprise AI agent governance" },
                { name: "AntheraLearn", desc: isIT ? "Piattaforma di apprendimento AI con coach intelligente" : "AI learning platform with intelligent coach" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0 mt-2" />
                  <span><strong className={textPrimary}>{item.name}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sezione 3 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "3. Account e responsabilità" : "3. Account and Responsibilities"}
            </h2>
            <p className={`mb-4 ${textSecondary}`}>
              {isIT
                ? "Registrandoti, ti impegni a:"
                : "By registering, you agree to:"}
            </p>
            <ul className={`space-y-2 ${textSecondary}`}>
              {[
                isIT ? "Fornire informazioni veritiere e aggiornate" : "Provide truthful and up-to-date information",
                isIT ? "Mantenere riservate le credenziali di accesso" : "Keep your access credentials confidential",
                isIT ? "Notificarci immediatamente in caso di accesso non autorizzato" : "Notify us immediately of any unauthorized access",
                isIT ? "Essere responsabile di tutte le attività svolte con il tuo account" : "Be responsible for all activities carried out with your account",
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
              {isIT ? "4. Utilizzo accettabile" : "4. Acceptable Use"}
            </h2>
            <p className={`mb-4 ${textSecondary}`}>
              {isIT ? "È vietato utilizzare i nostri servizi per:" : "It is prohibited to use our services to:"}
            </p>
            <ul className={`space-y-2 ${textSecondary}`}>
              {[
                isIT ? "Attività illegali o fraudolente" : "Illegal or fraudulent activities",
                isIT ? "Violare i diritti di terzi" : "Violate the rights of third parties",
                isIT ? "Trasmettere malware o contenuti dannosi" : "Transmit malware or harmful content",
                isIT ? "Tentare accessi non autorizzati ai sistemi" : "Attempt unauthorized access to systems",
                isIT ? "Rivendere i servizi senza autorizzazione scritta" : "Resell services without written authorization",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sezione 5 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "5. Proprietà intellettuale" : "5. Intellectual Property"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "Tutto il software, il codice, i design, i loghi e i contenuti di ANTHERA Systems sono di proprietà esclusiva di ANTHERA Systems e protetti dalle leggi sul diritto d'autore. È vietata qualsiasi riproduzione o distribuzione non autorizzata."
                : "All software, code, designs, logos, and content of ANTHERA Systems are the exclusive property of ANTHERA Systems and protected by copyright laws. Any unauthorized reproduction or distribution is prohibited."}
            </p>
          </div>

          {/* Sezione 6 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "6. Pagamenti e rimborsi" : "6. Payments and Refunds"}
            </h2>
            <p className={`mb-3 ${textSecondary}`}>
              {isIT
                ? "I piani a pagamento vengono fatturati in anticipo su base mensile o annuale. Non sono previsti rimborsi parziali per disdette anticipate, salvo diversa indicazione."
                : "Paid plans are billed in advance on a monthly or annual basis. No partial refunds are provided for early cancellations, unless otherwise indicated."}
            </p>
            <p className={textSecondary}>
              {isIT
                ? "ANTHERA Systems si riserva il diritto di modificare i prezzi con un preavviso di 30 giorni."
                : "ANTHERA Systems reserves the right to change prices with 30 days' notice."}
            </p>
          </div>

          {/* Sezione 7 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "7. Limitazione di responsabilità" : "7. Limitation of Liability"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "ANTHERA Systems non sarà responsabile per danni indiretti, incidentali, speciali o consequenziali derivanti dall'utilizzo o dall'impossibilità di utilizzo dei servizi. La responsabilità massima di ANTHERA Systems non supererà in nessun caso l'importo pagato nei 12 mesi precedenti."
                : "ANTHERA Systems shall not be liable for indirect, incidental, special, or consequential damages arising from the use or inability to use the services. ANTHERA Systems' maximum liability shall not exceed the amount paid in the previous 12 months."}
            </p>
          </div>

          {/* Sezione 8 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "8. Legge applicabile" : "8. Governing Law"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "I presenti Termini di Servizio sono disciplinati dalla legge italiana. Per qualsiasi controversia, le parti si sottopongono alla giurisdizione esclusiva del Tribunale di Milano."
                : "These Terms of Service are governed by Italian law. For any dispute, the parties submit to the exclusive jurisdiction of the Court of Milan."}
            </p>
          </div>

          {/* Sezione 9 */}
          <div className="rounded-2xl border p-8" style={{ background: cardBg, borderColor }}>
            <h2 className={`font-display font-semibold text-2xl mb-4 ${textPrimary}`}>
              {isIT ? "9. Modifiche ai termini" : "9. Changes to Terms"}
            </h2>
            <p className={textSecondary}>
              {isIT
                ? "ANTHERA Systems si riserva il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche saranno comunicate via email e/o pubblicate sul sito con almeno 15 giorni di preavviso. L'utilizzo continuato dei servizi dopo la notifica costituisce accettazione dei nuovi termini."
                : "ANTHERA Systems reserves the right to modify these Terms at any time. Changes will be communicated by email and/or published on the website with at least 15 days' notice. Continued use of the services after notification constitutes acceptance of the new terms."}
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border p-8 text-center" style={{ background: isDark ? "#0a1628" : "#eff6ff", borderColor: "#3b82f6" }}>
            <p className={`mb-2 font-semibold ${textPrimary}`}>
              {isIT ? "Hai domande sui nostri termini?" : "Questions about our terms?"}
            </p>
            <p className={`mb-6 text-sm ${textSecondary}`}>
              {isIT ? "Il nostro team risponde entro 24 ore lavorative." : "Our team responds within 24 business hours."}
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
