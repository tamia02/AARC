"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import CalendlyButton from "@/components/CalendlyButton";

export default function Services() {
  return (
    <div className="relative overflow-hidden bg-surface text-on-surface">
      {/* Hero Section */}
      <header className="relative pt-40 pb-24 md:pt-64 md:pb-32 bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal direction="up">
              <h1 className="font-serif text-[40px] md:text-[56px] leading-tight mb-6 font-bold">
                Bookkeeping Services
              </h1>
              <p className="font-sans text-[18px] text-on-surface-variant opacity-80 leading-relaxed max-w-2xl mx-auto">
                Meticulous financial oversight tailored for growing enterprises. We bring transparency, precision, and strategic insight to your daily operations.
              </p>
              <div className="mt-12 w-24 h-1 bg-primary mx-auto opacity-30" />
            </ScrollReveal>
          </div>
        </div>
        {/* Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-container/10 -skew-x-12 transform origin-top pointer-events-none" />
      </header>

      {/* Monthly Bookkeeping */}
      <section className="py-section-gap bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <ScrollReveal direction="right">
                <div className="inline-block bg-primary-fixed text-[#261900] px-3 py-1 font-sans text-[10px] tracking-widest uppercase font-bold mb-6">
                  ESSENTIAL
                </div>
                <h2 className="font-serif text-[36px] font-semibold leading-tight text-on-surface mb-6">
                  Monthly Bookkeeping
                </h2>
                <p className="font-sans text-sm text-on-surface-variant mb-8 leading-relaxed">
                  Stay ahead of your finances with ongoing maintenance that captures every transaction. We provide real-time visibility into your cash flow and profitability, ensuring you're never making decisions in the dark.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-sans text-sm font-semibold">Transaction Categorization & Reconciliation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-sans text-sm font-semibold">Accounts Payable & Receivable Management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] select-none" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="font-sans text-sm font-semibold">Monthly Performance Reports (P&L, Balance Sheet)</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
            <div className="order-1 md:order-2">
              <ScrollReveal direction="left">
                <div className="relative aspect-video bg-surface-container rounded-[4px] overflow-hidden premium-shadow group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Laptop screen with dashboard charts"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQia34L6tGTDP6gpbL85wL_gJPDXLIO7FGR9Gd7fnc546aQY5K80OvfJH6S57rljPtThFN6QVUfmpBl-dFGD5UHjEWORx2uA0VSxRgMJpDzjV1HSwnbZVLsVfVafk-YV3gm-3-ojjqsTR9zzbi8URqM0xW_ay4nou6Yno1ew7vBJ5J9YamssCGckb6Je_3egPY5p6ga86Cd8P0J7IgB55z5XBLAlJib-un2PT4vHijVJDYMB1LciqDEzJi8WlVp-7Ab4GksbiMGwsP"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Catch-Up & Clean-Up */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal direction="right">
                <div className="relative aspect-[4/5] bg-surface-container rounded-[4px] overflow-hidden premium-shadow group">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Organized physical books and ledger in high-end office"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZH9Gs723Whlgigkffkn1f6ne-ud4zLrjq35FqfHreW12MQBB4l3CpCKrC6QAOoGZKDdPsrs8mB2TwswTrID-hsJ6wG8xEo9stdbxlJKc0fGxMr9jXuut16XBnHXTtpl4YFeLtqA8FwscBv8oZh-3gc_mwlV9NHSsb1AVJxCLyrDNoPG1g_9_a6FTRzevANLgh4cOlwUdNU-oabJKAm89QmlKHRPMhZCK0cDNagChKuRXebavCE-2NATMJxhm8vJ_D_DDnbe3eggCL"
                  />
                </div>
              </ScrollReveal>
            </div>
            <div className="pl-0 md:pl-12">
              <ScrollReveal direction="left">
                <div className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 font-sans text-[10px] tracking-widest uppercase font-bold mb-6">
                  RESTORATION
                </div>
                <h2 className="font-serif text-[36px] font-semibold leading-tight text-on-surface mb-6">
                  Catch-Up & Clean-Up
                </h2>
                <p className="font-sans text-sm text-on-surface-variant mb-8 leading-relaxed">
                  Behind on your books? We specialize in untangling complex financial histories. Whether it's months or years of data, our meticulous approach restores your records to tax-ready perfection.
                </p>
                <div className="p-8 border-l-2 border-primary bg-surface-container-high/30 italic font-serif text-[20px] text-on-surface opacity-90 rounded-r-[4px]">
                  "Turning financial chaos into audit-proof clarity is our hallmark service."
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payroll */}
            <ScrollReveal direction="up" delay={0.05} className="h-full">
              <div className="p-10 bg-surface-container-highest rounded-[4px] premium-shadow h-full flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6 select-none">group</span>
                  <h3 className="font-serif text-[24px] font-semibold mb-4">Payroll Setup & Management</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    Automated, accurate payroll that keeps your team happy and your business compliant with state and federal regulations.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            {/* QBO Setup */}
            <ScrollReveal direction="up" delay={0.1} className="md:col-span-2 h-full">
              <div className="p-10 bg-white border border-outline-variant/30 rounded-[4px] premium-shadow h-full flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="md:w-1/2">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6 select-none">settings_suggest</span>
                  <h3 className="font-serif text-[24px] font-semibold mb-4">QuickBooks Online Setup</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Maximize the power of QBO with a custom chart of accounts, integrated apps, and optimized workflows designed for your specific industry needs.
                  </p>
                </div>
                <div className="md:w-1/2 h-48 w-full rounded-[4px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="QuickBooks Online interface mock"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMP0bwKytjdpiCERseMu4fdFBruTDWBShmr-j2AJeaTjzuLB5iqQeUev9LqzBXcU8BO3v55RYnTAOLWCEvfDbp2dVZATjacNNRAy2wE8jSehFY2TEExlkiRXv0tReuedRU_4E9n70Y-KtsMIxXOfLL4lDNFDs6FVefYfUrmoD-Ye6S6C1hY7dyqQVNKGVbf3dpGcHsTHgXEofn5AN23pHy3miafQMGv9gcOcPC2keT2w8ZfER4vJ0opZMmqvNIvBHeUnk0hGJ6bur"
                  />
                </div>
              </div>
            </ScrollReveal>
            {/* Tax Prep Support */}
            <ScrollReveal direction="up" delay={0.15} className="md:col-span-3">
              <div className="p-10 bg-secondary text-on-secondary rounded-[4px] flex flex-col md:flex-row items-center gap-12 justify-between">
                <div className="md:w-2/3">
                  <h3 className="font-serif text-[36px] font-semibold mb-4 text-white">Financial Support for Tax Prep</h3>
                  <p className="text-secondary-fixed mb-6 leading-relaxed text-sm">
                    We work hand-in-hand with your CPA. Our high-fidelity financial statements ensure that your tax professional has exactly what they need for an efficient, error-free filing season.
                  </p>
                  <CalendlyButton
                    variant="underline"
                    text="LEARN MORE"
                    className="inline-flex items-center gap-2 hover:translate-x-2 transition-transform text-[#ffdea4] border-[#ffdea4]"
                  />
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-32 h-32 border-4 border-primary-container/20 rounded-full flex items-center justify-center relative">
                    <span className="material-symbols-outlined text-6xl text-white select-none">receipt_long</span>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
                      <span className="material-symbols-outlined text-sm font-bold select-none">check</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bonus Feature */}
      <section className="py-section-gap bg-secondary-container/20 relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <ScrollReveal direction="up">
            <div className="bg-white p-12 md:p-20 rounded-[4px] premium-shadow border-t-8 border-primary flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-full text-on-primary-container flex-shrink-0">
                    <span className="material-symbols-outlined text-[24px]">wb_sunny</span>
                  </div>
                  <span className="font-sans text-[12px] font-bold text-primary tracking-widest uppercase">
                    INDUSTRY SPECIALIZATION
                  </span>
                </div>
                <h2 className="font-serif text-[36px] font-semibold leading-tight mb-6">
                  Bookkeeping for Solar & Energy Companies
                </h2>
                <p className="text-on-surface-variant font-sans text-base leading-relaxed mb-8">
                  The energy sector requires specific handling of incentives, equipment depreciation, and long-term project accounting. We bring specialized expertise to ensure your renewable energy business remains as efficient financially as it is operationally.
                </p>
                <CalendlyButton
                  variant="primary"
                  text="VIEW SECTOR DETAILS"
                  className="px-8 py-4 text-[12px] font-bold tracking-widest uppercase"
                />
              </div>
              <div className="md:w-1/2 w-full aspect-video rounded-[4px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Solar panels farm sunset"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5GKa8EgJD17nFyHhVfCLk5OcKabt1ghVDjwo5weUL-BQxU6Cs65HKG8kQeaQA6WcvPCWBY516WbY9asHwCZI_x4xKBiPAAhUIOvoz86LZ2e3J96GphyImQzShi3gVaFmYUdKglrGnkNJCoj31D7qB0zApmxcJ6SXy7-tYY5atid0Sf9Y3ESQUVtfT4l_ibbQD9XCZFti76I6Y_3IPW5UKMZ0VbgbzPzc_G-GQACLONoo1rP2Gx0uxSdDnYxB3YFhAl7g7rEiipnhs"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #186964 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </section>

      {/* CTA Section */}
      <section className="py-section-gap bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <ScrollReveal direction="up">
            <h2 className="font-serif text-[36px] font-semibold leading-tight mb-8">Not Sure Which Service You Need?</h2>
            <p className="max-w-2xl mx-auto mb-12 text-on-surface-variant font-sans text-base leading-relaxed">
              Our diagnostic session helps identify gaps in your current financial tracking and builds a roadmap for your business growth.
            </p>
            <CalendlyButton
              variant="outline"
              text="Book a Free Consultation"
              className="px-10 py-5 text-[12px] font-bold tracking-widest uppercase"
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
