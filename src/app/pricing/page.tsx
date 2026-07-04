"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import CalendlyButton from "@/components/CalendlyButton";

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How is my volume calculated?",
      answer: "We analyze the average number of monthly transactions across all linked financial accounts. This includes bank statements, credit cards, and digital payment processors. Our team conducts a complimentary initial audit to determine your exact volume tier.",
    },
    {
      question: "Can I change plans mid-year?",
      answer: "Absolutely. We believe in agility. If your business experiences significant growth or seasonal shifts, your plan can be adjusted with 30 days' notice. We review your transaction volume quarterly to ensure you are always in the most efficient tier.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative overflow-hidden bg-background text-on-surface">
      {/* Hero / Header Section */}
      <header className="relative pt-48 pb-24 md:pt-64 md:pb-32 overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOci5_9asVTSO-uNartmFTsatvlSQdqsdCRjuTRtKqF_cLFOijnOZpLWegybeFVarAO51gzpGOBHBo-M6WrvT7lYki81aC7AtHW7KSZahINMastfWHIUs-JQZ6XjjorfkSH-1smIr8wQEDGptmXJyngJogvcQrERnPviZevQCi8EiRhcenIPqSapkm5c8uuxywNhgF-Kemx2q7oaeon0Rcs-LWgVn3rpfV-qI68EDBAnKHaH5xn1TY-qvsY6DHzC1LU6W8PZacNp07')",
            }}
          />
        </div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center w-full">
          <ScrollReveal direction="up">
            <h1 className="font-serif text-[40px] md:text-[56px] text-on-surface max-w-3xl mx-auto mb-6 font-bold leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="font-sans text-[18px] text-tertiary max-w-2xl mx-auto leading-relaxed">
              Financial precision tailored to the scale of your success. Our pricing varies by transaction volume to ensure you only pay for the meticulous attention your business requires.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Pricing Cards Section */}
      <section className="py-section-gap bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <ScrollReveal direction="up" delay={0.05} className="h-full">
              <div className="bg-white p-12 flex flex-col items-center text-center premium-shadow rounded h-full justify-between hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="flex flex-col items-center w-full">
                  <div className="w-16 h-16 bg-surface-container mb-8 flex items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-primary text-3xl select-none">foundation</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-semibold mb-4 text-on-surface">Starter</h3>
                  <p className="font-sans text-sm text-tertiary mb-10 leading-relaxed">
                    Ideal for early-stage ventures and focused portfolios requiring essential monthly upkeep and financial clarity.
                  </p>
                  <div className="w-full h-[1px] bg-outline-variant mb-10" />
                  <ul className="text-left w-full space-y-4 mb-12 font-sans text-sm text-on-surface font-medium">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Monthly Reconciliation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Basic Financial Statements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Dedicated Bookkeeper</span>
                    </li>
                  </ul>
                </div>
                <CalendlyButton
                  variant="outline"
                  text="Get a Personalized Quote"
                  className="w-full py-4 text-[12px] font-bold tracking-widest uppercase"
                />
              </div>
            </ScrollReveal>

            {/* Growth Package */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="bg-white p-12 flex flex-col items-center text-center premium-shadow rounded h-full relative z-10 border-t-4 border-primary-container justify-between hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="absolute -top-4 bg-primary-container text-on-primary-container font-sans text-[10px] tracking-widest px-4 py-1 font-bold">
                  RECOMMENDED
                </div>
                <div className="flex flex-col items-center w-full">
                  <div className="w-16 h-16 bg-primary-fixed mb-8 flex items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-primary text-3xl select-none">trending_up</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-semibold mb-4 text-on-surface">Growth</h3>
                  <p className="font-sans text-sm text-tertiary mb-10 leading-relaxed">
                    Sophisticated bookkeeping for expanding businesses with moderate transaction volume and multi-channel revenue streams.
                  </p>
                  <div className="w-full h-[1px] bg-outline-variant mb-10" />
                  <ul className="text-left w-full space-y-4 mb-12 font-sans text-sm text-on-surface font-medium">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Weekly Reconciliation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Accounts Payable/Receivable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Cash Flow Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Priority Email Support</span>
                    </li>
                  </ul>
                </div>
                <CalendlyButton
                  variant="primary"
                  text="Get a Personalized Quote"
                  className="w-full py-4 text-[12px] font-bold tracking-widest uppercase"
                />
              </div>
            </ScrollReveal>

            {/* Pro Package */}
            <ScrollReveal direction="up" delay={0.15} className="h-full">
              <div className="bg-white p-12 flex flex-col items-center text-center premium-shadow rounded h-full justify-between hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="flex flex-col items-center w-full">
                  <div className="w-16 h-16 bg-surface-container mb-8 flex items-center justify-center rounded-full">
                    <span className="material-symbols-outlined text-primary text-3xl select-none">corporate_fare</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-semibold mb-4 text-on-surface">Pro</h3>
                  <p className="font-sans text-sm text-tertiary mb-10 leading-relaxed">
                    Full-spectrum financial management for high-volume enterprises requiring granular oversight and strategic insights.
                  </p>
                  <div className="w-full h-[1px] bg-outline-variant mb-10" />
                  <ul className="text-left w-full space-y-4 mb-12 font-sans text-sm text-on-surface font-medium">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Daily Transaction Entry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Custom Management Reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>Multi-entity Consolidation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1 select-none">check</span>
                      <span>24/7 Priority Concierge</span>
                    </li>
                  </ul>
                </div>
                <CalendlyButton
                  variant="outline"
                  text="Get a Personalized Quote"
                  className="w-full py-4 text-[12px] font-bold tracking-widest uppercase"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
              <ScrollReveal direction="right">
                <span className="font-sans text-[12px] font-bold text-primary tracking-[0.2em] block mb-4 uppercase">
                  CLARITY
                </span>
                <h2 className="font-serif text-[36px] font-semibold leading-tight text-on-surface mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="font-sans text-sm text-tertiary leading-relaxed">
                  Find answers to common inquiries regarding our tiered pricing and service delivery model.
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <ScrollReveal direction="left" delay={index * 0.1} key={index}>
                    <div className="bg-white rounded-[4px] premium-shadow overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center p-8 text-left group select-none"
                      >
                        <span className="font-serif text-[18px] font-semibold text-on-surface group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                        <span
                          className={`material-symbols-outlined text-primary text-[24px] select-none transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[500px]" : "max-h-0"
                        }`}
                      >
                        <div className="px-8 pb-8 font-sans text-sm text-tertiary leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-section-gap bg-on-background text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center w-full">
          <ScrollReveal direction="up">
            <h2 className="font-serif text-[36px] font-semibold leading-tight text-white mb-8">
              Ready for Books You Can Actually Trust?
            </h2>
            <p className="text-surface-bright/70 mb-12 max-w-xl mx-auto font-sans text-[18px]">
              Schedule your free 30-minute consultation today and start your journey toward financial clarity.
            </p>
            <CalendlyButton
              variant="primary"
              text="Get Your Free Consultation"
              className="px-12 py-5 text-[12px] tracking-widest uppercase font-bold"
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
