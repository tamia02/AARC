"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import CalendlyButton from "@/components/CalendlyButton";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background text-on-surface">
      {/* Hero Section */}
      <header className="relative flex flex-col pt-24 overflow-hidden bg-surface-bright" id="home">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none" />
        {/* Hero Content */}
        <div className="flex-1 flex items-center py-16 md:py-24">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter relative z-10 w-full">
            <div className="lg:col-span-8">
              <ScrollReveal direction="up" delay={0.1}>
                <h1 className="font-serif text-[40px] md:text-[56px] text-on-background mb-6 leading-tight font-bold">
                  Empowering Your Business with <span className="italic text-primary">$mart Books</span>.
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.2}>
                <p className="font-sans text-[18px] text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
                  Accurate, timely, and compliant bookkeeping services for small businesses, self-employed professionals, and growing companies nationwide (including Texas, California, and beyond).
                </p>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <CalendlyButton
                    variant="primary"
                    text="Book a Free Consultation"
                    className="w-full sm:w-auto px-10 py-5 text-[12px] tracking-widest uppercase font-bold"
                  />
                  <Link
                    href="/services"
                    className="w-full sm:w-auto border border-[#CFA550] text-[#CFA550] hover:bg-[#CFA550]/10 hover:scale-105 active:scale-95 transition-all duration-300 px-10 py-5 font-sans text-label-caps uppercase tracking-widest text-[12px] font-bold text-center inline-block"
                  >
                    View Our Services
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Trust Strip — flows naturally BELOW hero content, never overlaps */}
        <div className="w-full bg-surface-container-low py-5 border-t border-outline-variant/30 relative z-10">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col sm:flex-row flex-wrap justify-center md:justify-between items-center gap-3 md:gap-6 text-on-surface-variant opacity-80">
            <span className="font-sans text-[11px] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0">verified</span> MBA &amp; MSA CREDENTIALED
            </span>
            <span className="font-sans text-[11px] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0">domain</span> DIVERSE INDUSTRY EXPERIENCE
            </span>
            <span className="font-sans text-[11px] font-bold tracking-widest uppercase flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary flex-shrink-0">location_on</span> CYPRESS &amp; TOMBALL, TX &amp; NATIONWIDE
            </span>
          </div>
        </div>
      </header>


      {/* Pain Points Section */}
      <section className="py-section-gap bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal direction="right">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-sans text-[10px] tracking-[0.2em] uppercase mb-6 font-bold">
                The Struggle
              </div>
              <h2 className="font-serif text-[36px] font-semibold leading-tight text-on-surface mb-8">
                You Didn't Start Your Business to Manage Spreadsheets
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary mt-1 text-[20px]">check_circle</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1 uppercase text-xs tracking-wider">Books Falling Behind</h4>
                    <p className="text-on-surface-variant text-sm">The pile of receipts and unrecorded transactions is growing weekly.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary mt-1 text-[20px]">check_circle</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1 uppercase text-xs tracking-wider">Tax Season Dread</h4>
                    <p className="text-on-surface-variant text-sm">Stress levels peak every April because your financial records aren't ready.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary mt-1 text-[20px]">check_circle</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1 uppercase text-xs tracking-wider">No Cash Flow Visibility</h4>
                    <p className="text-on-surface-variant text-sm">You don't actually know if you're making money or just moving it around.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-primary mt-1 text-[20px]">check_circle</span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1 uppercase text-xs tracking-wider">Outgrown DIY Bookkeeping</h4>
                    <p className="text-on-surface-variant text-sm">Your business is scaling, and manual entry is no longer sustainable.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="left">
              <div className="relative h-[500px] bg-surface-container rounded-[4px] overflow-hidden ambient-shadow group">
                <img
                  className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                  alt="Professional office workspace with financial books"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVhrA1wPDiPjP3RnuLdu30G6_HwA8bi08-ysVAeVALnNfBtxuAhhyrbgHhyCwWB8OxCwjNqEqQb6sDwFEIORrWYfc2kCW8ee1oIeJPne5mOyo7plh7V9Yqd0E0FonK2BmsIx9Fsqqvs4vHKbxKAaJJcn0UVWF0wy22rtoH5vhYBpRCxXn55x_E9t93YIxmtm-iS1eQ4aI8_trQRpPW8OsTj3cT5NnsgoIBP2SovesD5-bGvqpgald7bARyXHw-GRfN0H1Ep_m-k7BS"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-gap bg-surface-container-low" id="services">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <ScrollReveal direction="up">
              <h2 className="font-serif text-[36px] font-semibold leading-tight mb-6">Specialized Financial Services</h2>
              <p className="text-on-surface-variant text-base">Precise financial management tailored to the unique needs of businesses in Texas and nationwide.</p>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={0.05} className="h-full">
              <div className="bg-white p-8 rounded-[4px] border border-outline-variant/10 ambient-shadow hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 select-none">calendar_month</span>
                <h3 className="font-bold text-on-surface mb-4 h-12 flex items-center text-base uppercase tracking-wider">Monthly Bookkeeping</h3>
                <p className="text-on-surface-variant text-xs">Regular reconciliation and reporting to keep your finger on the pulse.</p>
              </div>
            </ScrollReveal>
            {/* Card 2 */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="bg-white p-8 rounded-[4px] border border-outline-variant/10 ambient-shadow hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 select-none">history</span>
                <h3 className="font-bold text-on-surface mb-4 h-12 flex items-center text-base uppercase tracking-wider">Catch-Up & Clean-Up</h3>
                <p className="text-on-surface-variant text-xs">Organizing historical data to get your business back on solid ground.</p>
              </div>
            </ScrollReveal>
            {/* Card 3 */}
            <ScrollReveal direction="up" delay={0.15} className="h-full">
              <div className="bg-white p-8 rounded-[4px] border border-outline-variant/10 ambient-shadow hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 select-none">payments</span>
                <h3 className="font-bold text-on-surface mb-4 h-12 flex items-center text-base uppercase tracking-wider">Payroll Management</h3>
                <p className="text-on-surface-variant text-xs">End-to-end payroll setup ensuring your team is paid on time, every time.</p>
              </div>
            </ScrollReveal>
            {/* Card 4 */}
            <ScrollReveal direction="up" delay={0.2} className="h-full">
              <div className="bg-white p-8 rounded-[4px] border border-outline-variant/10 ambient-shadow hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 select-none">settings</span>
                <h3 className="font-bold text-on-surface mb-4 h-12 flex items-center text-base uppercase tracking-wider">QBO Optimization</h3>
                <p className="text-on-surface-variant text-xs">QuickBooks Online setup and fine-tuning for maximum efficiency.</p>
              </div>
            </ScrollReveal>
            {/* Card 5 */}
            <ScrollReveal direction="up" delay={0.25} className="h-full">
              <div className="bg-white p-8 rounded-[4px] border border-outline-variant/10 ambient-shadow hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center text-center h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6 select-none">account_balance</span>
                <h3 className="font-bold text-on-surface mb-4 h-12 flex items-center text-base uppercase tracking-wider">Tax Prep Support</h3>
                <p className="text-on-surface-variant text-xs">Comprehensive financial documentation to simplify your tax filing process.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-section-gap relative overflow-hidden bg-on-background text-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <ScrollReveal direction="right">
              <h2 className="font-serif text-[36px] font-semibold leading-tight mb-8">Not Just Numbers. Clarity.</h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-6 group">
                  <div className="h-14 w-14 border border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-white">analytics</span>
                  </div>
                  <span className="text-[18px] font-sans font-bold tracking-tight uppercase">Strategic Insight vs. Data Entry</span>
                </li>
                <li className="flex items-center gap-6 group">
                  <div className="h-14 w-14 border border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-white">shield</span>
                  </div>
                  <span className="text-[18px] font-sans font-bold tracking-tight uppercase">High-Level Compliance Standards</span>
                </li>
                <li className="flex items-center gap-6 group">
                  <div className="h-14 w-14 border border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-white">query_stats</span>
                  </div>
                  <span className="text-[18px] font-sans font-bold tracking-tight uppercase">Real-Time Financial Reporting</span>
                </li>
                <li className="flex items-center gap-6 group">
                  <div className="h-14 w-14 border border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-white">psychology</span>
                  </div>
                  <span className="text-[18px] font-sans font-bold tracking-tight uppercase">Expertise Across Diversified Sectors</span>
                </li>
                <li className="flex items-center gap-6 group">
                  <div className="h-14 w-14 border border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-white">handshake</span>
                  </div>
                  <span className="text-[18px] font-sans font-bold tracking-tight uppercase">Dedicated Local Partnership</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="left">
              <div className="aspect-square bg-surface-variant p-2 rounded-[4px] overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Precision financial management materials"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVstLOZGcJzjzostwz-nJv4nCWoOHH9kKkj8NeoETvgrUsKhg7_uN75CYWj-24VGf0IAbqZPOvbS1cQFNQZYyH8YFly8_Kc9UJMlzNNKp8E-CuNXwVoeBFm7lQ1JWTwFsTV2NYLW4QXcn0GdNwrmbUXIRuaofq5lxzIp177ykqbx0wZI2kqn4cLJXbUMgscmfDlAFbPY53-VgUC6k-2t3xJa1UcXntvCggfNxwp-KKQflHEbQ8oCscv7dULmUYKx8pNX2VeCw5c24E"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder Preview */}
      <section className="py-section-gap bg-surface" id="about">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/3">
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary" />
                  <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden shadow-lg border border-gray-100/50 group">
                    <Image
                      src="/My Pic - For Business card.jpeg"
                      alt="Raksha Shetty, founder of AARC Smart Bookkeeping"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-2/3">
              <ScrollReveal direction="left">
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-sans text-[10px] tracking-[0.2em] uppercase mb-6 font-bold">
                  Leadership
                </div>
                <h2 className="font-serif text-[36px] font-semibold leading-tight mb-6">Meet Your Local Bookkeeper with Nationwide Reach</h2>
                <p className="font-sans text-[18px] text-on-surface-variant mb-8 leading-relaxed">
                  With an MBA and MSA credential, I bring rigorous analytical precision and years of experience across hospital systems, public accounting, and solar energy sectors, among others. I founded AARC $mart Bookkeeping to help business owners regain their time and confidence through crystal-clear financial management.
                </p>
                <Link
                  href="/about"
                  className="border border-[#CFA550] text-[#CFA550] hover:bg-[#CFA550]/10 hover:scale-105 active:scale-95 transition-all duration-300 px-8 py-4 font-sans text-label-caps uppercase tracking-widest text-[12px] font-bold text-center inline-flex items-center gap-2 group"
                >
                  Read My Full Story
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[16px]">arrow_forward</span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-section-gap bg-surface-container-low border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-serif text-[24px] mb-12 uppercase tracking-[0.2em] font-semibold">Industries We Empower</h2>
          <ScrollReveal direction="up">
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-8 py-3 bg-white border border-outline-variant text-on-surface font-sans text-xs tracking-widest rounded-full uppercase hover:bg-primary hover:text-white transition-colors duration-300 cursor-default font-bold">Small Businesses</span>
              <span className="px-8 py-3 bg-white border border-outline-variant text-on-surface font-sans text-xs tracking-widest rounded-full uppercase hover:bg-primary hover:text-white transition-colors duration-300 cursor-default font-bold">Startups</span>
              <span className="px-8 py-3 bg-white border border-outline-variant text-on-surface font-sans text-xs tracking-widest rounded-full uppercase hover:bg-primary hover:text-white transition-colors duration-300 cursor-default font-bold">Professional Services</span>
              <span className="px-8 py-3 bg-white border border-outline-variant text-on-surface font-sans text-xs tracking-widest rounded-full uppercase hover:bg-primary hover:text-white transition-colors duration-300 cursor-default font-bold">Healthcare Practices</span>
              <span className="px-8 py-3 bg-white border border-outline-variant text-on-surface font-sans text-xs tracking-widest rounded-full uppercase hover:bg-primary hover:text-white transition-colors duration-300 cursor-default font-bold">Construction & Trades</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section-gap bg-surface" id="testimonials">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-16">
            <ScrollReveal direction="up">
              <h2 className="font-serif text-[36px] font-semibold leading-tight mb-4">Client Voices</h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <ScrollReveal direction="up" delay={0.05} className="h-full">
              <div className="bg-white p-10 border border-outline-variant/10 rounded-[4px] ambient-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="text-[#CFA550] mb-6 flex gap-1 select-none">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="italic text-on-surface-variant text-sm leading-relaxed mb-8">
                    "AARC transformed our messy spreadsheet system into a professional dashboard. Tax season was a breeze for the first time in years."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm uppercase text-on-surface">Sarah J.</p>
                    <p className="text-[10px] text-primary tracking-widest uppercase font-bold">Bright Design LLC</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            {/* Card 2 */}
            <ScrollReveal direction="up" delay={0.1} className="h-full">
              <div className="bg-white p-10 border border-outline-variant/10 rounded-[4px] ambient-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="text-[#CFA550] mb-6 flex gap-1 select-none">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="italic text-on-surface-variant text-sm leading-relaxed mb-8">
                    "The expertise from someone with an MBA background really shows. It's not just bookkeeping; it's strategic advice for my firm."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm uppercase text-on-surface">David M.</p>
                    <p className="text-[10px] text-primary tracking-widest uppercase font-bold">Cypress Law Group</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            {/* Card 3 */}
            <ScrollReveal direction="up" delay={0.15} className="h-full">
              <div className="bg-white p-10 border border-outline-variant/10 rounded-[4px] ambient-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="text-[#CFA550] mb-6 flex gap-1 select-none">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <p className="italic text-on-surface-variant text-sm leading-relaxed mb-8">
                    "Fast, reliable, and incredibly organized. I finally feel like I have full control over my business's financial future."
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex-shrink-0" />
                  <div>
                    <p className="font-bold text-sm uppercase text-on-surface">Elena R.</p>
                    <p className="text-[10px] text-primary tracking-widest uppercase font-bold">Tomball Design Studio</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-on-background p-12 md:p-24 text-center relative overflow-hidden rounded-[4px]">
            <div className="absolute inset-0 opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <ScrollReveal direction="up">
                <h2 className="font-serif text-[36px] font-semibold leading-tight text-white mb-8">Ready for Books You Can Actually Trust?</h2>
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
          </div>
        </div>
      </section>
    </div>
  );
}
