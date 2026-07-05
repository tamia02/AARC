"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyPolicy() {
  return (
    <div className="relative overflow-hidden bg-background text-on-surface">
      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal direction="up">
              <span className="font-sans text-[11px] font-bold text-primary tracking-[0.2em] mb-4 block uppercase">
                Legal
              </span>
              <h1 className="font-serif text-[40px] md:text-[52px] mb-6 text-on-background font-bold leading-tight">
                Privacy Policy
              </h1>
              <p className="font-sans text-sm text-on-surface-variant/80">
                Effective Date: July 5, 2026
              </p>
              <div className="h-[2px] w-20 bg-primary mt-8" />
            </ScrollReveal>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 border border-outline-variant/10 shadow-[0px_10px_50px_rgba(0,0,0,0.02)] rounded-[4px]">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="prose prose-stone max-w-none space-y-10 font-sans text-base leading-relaxed text-on-surface-variant">
                <p>
                  At AARC $mart Bookkeeping, we hold your business's financial privacy to the absolute highest standard of care. This Privacy Policy describes how we collect, use, protect, and handle your personal and financial information when you access our website or engage our bookkeeping and financial consulting services.
                </p>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    1. Information We Collect
                  </h2>
                  <p>
                    To provide accurate and professional bookkeeping services, we may collect the following types of information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Contact Information:</strong> Name, business name, phone number, email address, and physical address.</li>
                    <li><strong>Financial Data:</strong> Bank statements, credit card logs, invoice files, payroll reports, tax identification numbers, and ledger records provided by you.</li>
                    <li><strong>Credentials & Integration Data:</strong> Read-only access credentials or bank feed connection information for cloud bookkeeping tools like QuickBooks Online.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    2. How We Use Your Information
                  </h2>
                  <p>
                    We collect and process your information solely for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To prepare monthly financial statements, reconcile accounts, optimize QBO setup, and manage payroll.</li>
                    <li>To communicate with you regarding missing documents, financial questions, and updates.</li>
                    <li>To invoice you for our bookkeeping services.</li>
                    <li>To comply with federal, state, and local accounting regulations.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    3. Information Sharing & Disclosure
                  </h2>
                  <p>
                    We maintain absolute confidentiality. We do not sell, rent, lease, or trade your personal or business financial information with third parties.
                  </p>
                  <p>
                    We only share necessary information in the following limited situations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Authorized Service Providers:</strong> Secure software applications (e.g., QuickBooks Online, Gusto, secure file-sharing portals) that you authorize for our work.</li>
                    <li><strong>Legal Compliance:</strong> If required by law, subpoena, or regulation to protect our rights or cooperate with law enforcement.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    4. Security and Data Protection
                  </h2>
                  <p>
                    Your financial security is our top priority. We use strict administrative, physical, and technological safeguards to protect your business records:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We require secure, encrypted portals (such as Google Drive/Dropbox/Liscio) for document sharing.</li>
                    <li>We encourage read-only account access where possible to protect your live banking assets.</li>
                    <li>All local systems are password-protected, encrypted, and run up-to-date security patches.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    5. Your Rights and Access
                  </h2>
                  <p>
                    You may review, update, or request changes to your stored contact or billing information by reaching out to us directly. You also have the right to request copies of the reconciliations and reports we have prepared on your behalf.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    6. Changes to this Policy
                  </h2>
                  <p>
                    We may occasionally update this Privacy Policy to reflect changes in our business practice or legal requirements. When we do, we will update the "Effective Date" at the top of this page.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    7. Contact Us
                  </h2>
                  <p>
                    If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:
                  </p>
                  <div className="font-sans font-bold text-on-surface leading-relaxed">
                    AARC $mart Bookkeeping<br />
                    Email: <a href="mailto:aarcsmartbookkeeping@gmail.com" className="text-primary hover:underline">aarcsmartbookkeeping@gmail.com</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
