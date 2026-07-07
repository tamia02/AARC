"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function TermsOfService() {
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
                Terms of Service
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
                  Welcome to AARC Smart Bookkeeping. By accessing our website or engaging us for professional bookkeeping services, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
                </p>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    1. Scope of Services
                  </h2>
                  <p>
                    AARC Smart Bookkeeping provides monthly bookkeeping, catch-up and clean-up, payroll management support, and QuickBooks Online optimization.
                  </p>
                  <p>
                    <strong>Non-CPA / Tax Preparation Disclaimer:</strong> AARC Smart Bookkeeping provides general ledger management and financial document collection. Unless explicitly contracted under a separate engagement, our services do not constitute certified audits, certified public accounting (CPA) evaluations, or formal legal advice. While we assist in preparing clean books for tax filing, final tax filings and tax strategies are the responsibility of the client's CPA or tax preparer.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    2. Client Responsibilities & Data Accuracy
                  </h2>
                  <p>
                    To ensure the precision of your financial reports, the client is responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing accurate, complete, and timely business transaction logs, bank statements, receipts, and invoices.</li>
                    <li>Ensuring credentials or links for cloud feeds remain active.</li>
                    <li>Reviewing financial statements upon delivery and immediately reporting any discrepancies.</li>
                  </ul>
                  <p>
                    AARC Smart Bookkeeping relies on the truth and completeness of the records provided by you and will not verify or audit client records for fraud or external accuracy.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    3. Fees, Billing, and Retainers
                  </h2>
                  <p>
                    Fees for recurring monthly packages or project work (such as catch-up bookkeeping) are detailed in individual client service contracts.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Monthly recurring fees are billed on a fixed date each month and are payable via automated clearing house (ACH) or credit card.</li>
                    <li>A late fee or temporary service suspension may occur if payments are overdue by more than 15 calendar days.</li>
                    <li>Either party may terminate the ongoing engagement with a written notice period as defined in the client contract (typically 30 days).</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    4. Strict Confidentiality
                  </h2>
                  <p>
                    We recognize that your financial records are highly sensitive. AARC Smart Bookkeeping maintains strict confidentiality regarding all information, accounts, books, and business operations provided. We will never share your business data with any third party without your explicit consent, except as required by law.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    5. Limitation of Liability
                  </h2>
                  <p>
                    AARC Smart Bookkeeping will perform services in a diligent and professional manner. However, in no event shall AARC Smart Bookkeeping be liable for any indirect, special, incidental, or consequential damages (including, but not limited to, lost profits, tax penalties, or business disruption) arising out of inaccurate data provided by the client, bank feed integration failures, or tax preparation decisions. Our maximum liability under any circumstances is limited to the fees paid for the specific services in question.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    6. Governing Law & Jurisdiction
                  </h2>
                  <p>
                    These terms and the relationships between AARC Smart Bookkeeping and its clients will be governed by and construed in accordance with the laws of the State of Texas, without giving effect to conflict of law principles. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in Harris County, Texas.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-serif text-2xl font-semibold text-on-surface mt-8 mb-4 border-b border-surface-container pb-2">
                    7. Contact Us
                  </h2>
                  <p>
                    If you have questions about these Terms of Service, please reach out to us at:
                  </p>
                  <div className="font-sans font-bold text-on-surface leading-relaxed">
                    AARC Smart Bookkeeping<br />
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
