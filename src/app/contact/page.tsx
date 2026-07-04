"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CalendlyWidget from "@/components/CalendlyWidget";

export default function Contact() {
  return (
    <div className="relative overflow-hidden bg-background text-on-surface">
      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal direction="up">
              <h1 className="font-serif text-[40px] md:text-[56px] mb-6 text-on-background font-bold leading-tight">
                Let's Get Your Books in Order
              </h1>
              <p className="font-sans text-[18px] text-surface-variant leading-relaxed max-w-2xl mx-auto">
                Take the first step towards financial clarity. Schedule a complimentary consultation to discuss how our meticulous bookkeeping can support your growth.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Content Area: Bento-inspired Layout */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter pb-section-gap w-full">
          {/* Booking Widget Column */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="right">
              <div className="bg-surface-container-lowest rounded-[4px] overflow-hidden shadow-[0px_10px_40px_rgba(0,0,0,0.04)] border border-surface-container transition-all hover:translate-y-[-4px] duration-500">
                <div className="p-8 border-b border-surface-container flex items-center justify-between">
                  <div>
                    <h2 className="font-serif text-[24px] font-semibold text-on-surface">Book a Strategy Call</h2>
                    <p className="text-surface-variant font-sans text-sm mt-1">Select a time that works for you.</p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-4xl select-none">calendar_month</span>
                </div>
                {/* Embed actual Calendly Inline Widget */}
                <div className="p-4 bg-white">
                  <CalendlyWidget />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Info Sidebar Column */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            {/* Direct Contact Card */}
            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-white p-8 rounded-[4px] shadow-[0px_10px_40px_rgba(0,0,0,0.04)] flex flex-col h-full border border-surface-container">
                <h3 className="font-serif text-[24px] font-semibold mb-8 text-on-surface">Direct Access</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded transition-colors group-hover:bg-primary-container flex-shrink-0">
                      <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container select-none">call</span>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] text-surface-variant tracking-widest mb-1 font-bold">PHONE</p>
                      <a className="font-sans text-base font-bold text-on-background hover:text-primary transition-colors" href="tel:+18325550199">(832) 555-0199</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded transition-colors group-hover:bg-primary-container flex-shrink-0">
                      <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container select-none">mail</span>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] text-surface-variant tracking-widest mb-1 font-bold">EMAIL</p>
                      <a className="font-sans text-base font-bold text-on-background hover:text-primary transition-colors break-all" href="mailto:raksha@aarcsmartbookkeeping.com">raksha@aarcsmartbookkeeping.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded transition-colors group-hover:bg-primary-container flex-shrink-0">
                      <span className="material-symbols-outlined text-primary group-hover:text-on-primary-container select-none">link</span>
                    </div>
                    <div>
                      <p className="font-sans text-[10px] text-surface-variant tracking-widest mb-1 font-bold">LINKEDIN</p>
                      <a className="font-sans text-base font-bold text-on-background hover:text-primary transition-colors" href="https://linkedin.com/in/raksha-shetty" target="_blank" rel="noopener noreferrer">/in/raksha-shetty</a>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-8 border-t border-surface-container">
                  <div className="flex items-center gap-3 text-surface-variant">
                    <span className="material-symbols-outlined text-primary select-none">location_on</span>
                    <p className="font-sans text-xs font-semibold">Serving Cypress & Tomball, Texas — and remote clients nationwide.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Office Visual/Atmosphere */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="relative overflow-hidden rounded-[4px] h-64 shadow-[0px_10px_40px_rgba(0,0,0,0.04)] w-full">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKMODqZAVS7XwY-6jBaun8QQucP5acgRTjq9vckpbj99JTlqn9AThvTOU3pZSyX3BnUSMhqlCdGshwNjiYAWoVJSgDeiYGha_ebjNsl89QrpWJyfR6T8QMF7SCL9NJJbRqN8OICpKjDpV4USeq3awcPpdIsu0u3nzQ0i2swfRvMCAIlmyti4cTUsCq7Q9B_ejrxfloq1dZ5-KUfrL9QCfEztevs4-a7XXudCzgJINjJdeYQJK5ydLYjdz3w8i3ixJSiYStzbH09Lz5')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                  <p className="text-white font-sans text-[10px] tracking-widest mb-1 font-bold">OUR PHILOSOPHY</p>
                  <p className="text-white font-serif text-[18px] italic font-semibold leading-snug">"Precision in every entry, clarity in every report."</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Location Context Section */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap w-full">
          <ScrollReveal direction="up">
            <div className="bg-surface-container-low rounded-[4px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h3 className="font-serif text-[24px] font-semibold mb-4">Local Presence, Global Capability</h3>
                <p className="text-surface-variant font-sans text-sm leading-relaxed">
                  While we take pride in serving our local Texas business community, our cloud-based infrastructure allows us to provide meticulous bookkeeping services to businesses in all 50 states.
                </p>
              </div>
              <div className="md:w-1/3 aspect-video bg-surface-dim rounded-[4px] overflow-hidden relative shadow-inner flex items-center justify-center">
                <div className="text-center opacity-40">
                  <span className="material-symbols-outlined text-4xl mb-2 select-none">map</span>
                  <p className="font-sans text-[10px] tracking-widest font-bold uppercase">Cypress & Tomball, TX</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
