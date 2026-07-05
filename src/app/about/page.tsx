"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import CalendlyButton from "@/components/CalendlyButton";

export default function About() {
  return (
    <div className="relative overflow-hidden bg-background text-on-surface">
      {/* Hero Section / Meet Raksha */}
      <header className="relative min-h-[700px] flex items-center pt-32 pb-20 overflow-hidden bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <div>
            <ScrollReveal direction="right">
              <span className="font-sans text-[12px] font-bold text-primary tracking-[0.2em] mb-4 block uppercase">
                EXPERT PARTNERSHIP
              </span>
              <h1 className="font-serif text-[40px] md:text-[56px] leading-tight mb-6 font-bold text-on-background">
                Meet Raksha — <br />
                <span className="text-primary italic font-medium">Your Bookkeeping Partner</span>
              </h1>
              <p className="font-sans text-[18px] text-on-surface-variant max-w-xl mb-10 leading-relaxed">
                With an MBA and MSA in Accounting, I bring a unique blend of strategic insight and meticulous precision to your financial landscape. My mission is simple: transforming complex, messy books into audit-ready masterpieces that fuel your growth.
              </p>
              <div className="flex gap-4">
                <CalendlyButton
                  variant="primary"
                  text="Let's Talk About Your Business"
                  className="px-8 py-4 text-[12px] tracking-widest uppercase font-bold"
                />
              </div>
            </ScrollReveal>
          </div>
          <div className="relative">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="aspect-[4/5] rounded-[4px] overflow-hidden luxury-shadow relative group">
                <Image
                  src="/My Pic - For Business card.jpeg"
                  alt="Raksha Shetty, founder of AARC Smart Bookkeeping"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface p-8 rounded-[4px] luxury-shadow border-l-4 border-primary z-20 hidden md:block">
                <p className="font-serif text-[24px] italic font-semibold text-on-surface">
                  "Clarity is the ultimate luxury."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* Bio & Experience Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <ScrollReveal direction="right">
                <h2 className="font-serif text-[36px] leading-tight mb-8 font-bold">
                  Professional Excellence, <br />Personal Commitment
                </h2>
                <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
                  My career has been defined by navigating high-stakes financial environments—from the rigorous demands of hospital accounting and public accounting to solar companies, among others.
                </p>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  I understand that behind every spreadsheet is a vision. I don't just categorize transactions; I ensure your financial narrative is clear, compliant, and ready for any level of scrutiny.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-start-7 lg:col-span-6 space-y-8">
              <ScrollReveal direction="left" delay={0.2}>
                <div className="p-8 bg-surface-container-lowest border-l-2 border-primary-container rounded-[4px] luxury-shadow hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl">school</span>
                    <h3 className="font-sans text-[12px] font-bold uppercase tracking-wider">Credentials</h3>
                  </div>
                  <ul className="space-y-3 font-sans text-sm text-on-surface font-semibold">
                    <li className="flex items-center gap-2">MBA - Master of Business Administration</li>
                    <li className="flex items-center gap-2">MSA - Master of Science in Accounting</li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                <div className="p-8 bg-surface-container-lowest border-l-2 border-primary-container rounded-[4px] luxury-shadow hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl">domain</span>
                    <h3 className="font-sans text-[12px] font-bold uppercase tracking-wider">Experience</h3>
                  </div>
                  <ul className="space-y-3 font-sans text-sm text-on-surface font-semibold">
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Hospital & Healthcare Systems</li>
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Public Accounting Firms</li>
                    <li className="flex items-center gap-2"><span className="text-primary">•</span> Solar & Energy Sectors, among others</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-section-gap bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-24">
            <ScrollReveal direction="up">
              <span className="font-sans text-[12px] font-bold text-primary tracking-[0.2em] mb-4 block uppercase">
                THE METHODOLOGY
              </span>
              <h2 className="font-serif text-[56px] font-bold text-on-surface">My Approach</h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Accuracy */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-8 luxury-shadow border border-primary-container/20">
                  <span className="material-symbols-outlined text-primary text-4xl select-none">precision_manufacturing</span>
                </div>
                <h4 className="font-serif text-[24px] mb-4 font-semibold text-on-surface">Unwavering Accuracy</h4>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed px-4">
                  In financial reporting, there is no room for "close enough." I meticulously verify every entry to ensure your books are flawless and audit-ready at all times.
                </p>
              </div>
            </ScrollReveal>
            {/* Communication */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-8 luxury-shadow border border-primary-container/20">
                  <span className="material-symbols-outlined text-primary text-4xl select-none">chat_bubble</span>
                </div>
                <h4 className="font-serif text-[24px] mb-4 font-semibold text-on-surface">Clear Communication</h4>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed px-4">
                  Complex data shouldn't be confusing. I translate technical accounting jargon into clear, actionable insights that help you make better business decisions.
                </p>
              </div>
            </ScrollReveal>
            {/* Patience */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-8 luxury-shadow border border-primary-container/20">
                  <span className="material-symbols-outlined text-primary text-4xl select-none">all_inclusive</span>
                </div>
                <h4 className="font-serif text-[24px] mb-4 font-semibold text-on-surface">Patience & Partnership</h4>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed px-4">
                  Whether your books are a month behind or years in disarray, I approach every project with patience and a commitment to long-term financial health.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
        {/* Decorative subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#CFA550 1px, transparent 1px)", backgroundSize: "40px 40px;" }} />
      </section>

      {/* Final CTA Section */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary text-on-primary p-12 md:p-20 text-center relative overflow-hidden luxury-shadow rounded-[4px]">
            <div className="absolute inset-0 opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <ScrollReveal direction="up">
                <h2 className="font-serif text-[36px] md:text-[56px] leading-tight font-bold mb-8">Ready to elevate your financial clarity?</h2>
                <p className="font-sans text-[18px] mb-12 max-w-2xl mx-auto text-[#ffdea4]">
                  Let's work together to create a sustainable, audit-ready foundation for your business's future.
                </p>
                <CalendlyButton
                  variant="primary"
                  text="Let's Talk About Your Business"
                  className="px-12 py-5 text-[12px] tracking-widest uppercase font-bold bg-[#ffdea4] hover:bg-[#eed096] text-[#261900]"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
