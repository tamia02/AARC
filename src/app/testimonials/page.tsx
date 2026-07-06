"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CalendlyButton from "@/components/CalendlyButton";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Corey Drayton",
      role: "COO / Founder, Drayton Enterprises (Houston)",
      stars: 5,
      text: `"Working with Raksha has been a great experience. She's organized, responsive, and easy to work with. Knowing my bookkeeping is in good hands gives me peace of mind and lets me focus on running my business instead of worrying about the numbers. I really appreciate her professionalism and would happily recommend her to anyone looking for a reliable bookkeeper."`,
      image: "/corey-drayton.jpg",
      featured: true,
    },
    {
      name: "Elena Richardson",
      role: "CEO, Richardson & Co. Real Estate",
      stars: 5,
      text: `"AARC has completely transformed how we handle our monthly closing. Their meticulous attention to detail is something I've rarely seen in traditional bookkeeping firms."`,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC5wXxgUol9JKhG-fskspWxMhZAkCDp4zUpliJCfdCMNGmIcTWQfSuIrs_4RO1jJsnue2qh-TNzUHBaJyioDKc0_nTVO15IvAhofajt2jUDDj4fSTY35_9VqMOlCfq2U3CMLYStVGklD_VWhK4sFSsWyZv_7qRREnv84Xm9evG5LaWzn2M_XxMbKQvlJzN-MD7C1R4MNgsxUFwd8lx9REMhhcjEDCMEgpcajLWxZqFQvVd9lk03tqQCHkpr2w8vjt6DJE-h9m-O6hd",
      featured: true,
    },
    {
      name: "Marcus Thorne",
      role: "Director, Thorne Digital Systems",
      stars: 5,
      text: `"The transition to AARC was seamless. Their team integrated with our existing software and immediately identified cost-saving opportunities we had missed for years."`,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAE6uU3iQtsOR5VSln5tCZ56vzitVLPSu9F8Aj7BzEKgfIgi-K5p_1r4mlO4MtzhRnE0d4dWDQa4tZiQQq9YwCvvYOh7Ncd0Jm3f4wGpkAhm0aAxYfWL-nAfa_ofn-UuNAHCss8rpEkqr1bypU7Tptw6ltVbRn-s_WzuHL6xGsrK8jXf_2Xv8Xa2f9PzwplCpo9GtluSuqOyX6dwDtIRt0FFQ-FEd3nb5iLrVXMbhTYByCGI2XfzXcui9SEhyhQbnIL2TAhEgxZgypZ",
      featured: false,
    },
    {
      name: "Sophia Vance",
      role: "Founder, L'Auberge Collective",
      stars: 5,
      text: `"Finally, a bookkeeping service that understands the unique pressures of the luxury hospitality sector. Precision is non-negotiable for us, and AARC delivers every single month."`,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5WRYAth8Cx0lkqe7Xu89tYKmbxZlRBCP_yqju4e7amro7UMotvvA9jJ3HV0-otTVTg6reGa0SxlpBnUBOflSRAducJDy1O791shY51UKVB9FN2i0v5AiZ71odbsncfIXzjh5sC4jnx1IWebvohbZdzIL3chPUAltl5cXcsL0TW8kO7Kb6IK_eRm7m4Ihjkma9nXuPSqJ9Sz9c2AmCjbUyiLB_cu2KqMobYA98EZTO8Xy2XBdD2Lvt8cJgqyahVAtTo9MTdriOuGuH",
      featured: true,
    },
    {
      name: "Julian Chen",
      role: "Founder, NexaStream AI",
      stars: 5,
      text: `"Their dashboard reporting provides clarity I didn't think was possible. I can see my exact cash position and future liabilities with a single click. Truly smart bookkeeping."`,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoSkyFpLjQpYU3XYCcSvZwG6S8Biz1IgZr_Uk3MLMPxRO6DDbLPuVKpuD2QIrdfsC1nXW5ei_3iKe9RvawAv2e0ayk-griT64S1UiVITa3U2UCGCLyqSvqpr6dEZypTQvUr5n2K_SmUmC3wMDETLxA-Q35-bxwPXpOlkEZSqSRBjxCV5_gOLSWI2BGQ5RTY6qqT6T1tpAvEDfSYWfqCLJZr5hO2xI1aHMYiHn0-_LdT60MrM3drXh7a_6jhLxYmosYTe0w3AcImEc0",
      featured: false,
    },
    {
      name: "Diane Abernathy",
      role: "Managing Partner, Abernathy & Ross",
      stars: 5,
      text: `"The team at AARC behaves like an extension of our internal executive board. They don't just record numbers; they provide genuine strategic insight."`,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfFjtGF15esoiOK-HtWt2UdUa6mLhCaeZDY1r_l-LzxWL4ICyzpA4c-8WGKWiU0h9baaMXadFOnjBv6nM-ZPywZBe8duvRNdgXjGm3PAtwOvgU3XkBAthpE3ClbsD_6_MeEsYT7SLgB9K3tpLMX_IsT4kpoSeSJ9wM4y_zlKFzN_LbB56Uh4wAn8XNPmNBjA7h1Mzg6ucnSQIVltiASj-ROqLwg7kTBNOSdsB8j87RGsapUtGwBDBGhNKdSOr3cVEOcC2J0yLRiGbr",
      featured: true,
    },
    {
      name: "Oliver Kent",
      role: "COO, Kent & Co. Manufacturing",
      stars: 5,
      text: `"Reliable, responsive, and remarkably thorough. AARC removed the administrative burden of bookkeeping from my plate so I could focus on growth."`,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiQjkCv1TfrijcRj0g4ZAWNwccOy14jdBDLZ1KKs6b0F8G73HjpmxtMzfhKStzTgU7j0VBe_bCiSt_JH3oiFSo1poQEh9VtNwt2mElC9cBKlnM2tQ3UBUiSjBgFHMGRi28njd51eOTkbYfHB3crHhhRT_EHy-JWn6wQbzX0joFJirvGm_gPboFinB4FuFadfrmoLXh6gXHirMfxo3MJTgUrgvns9oou48T4cMJZkpQ5oHdtHqbCJxnW7Y-uEaGAVaJnli5pH6nWehB",
      featured: false,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-background text-on-background">
      {/* Hero Content Header */}
      <header className="pt-40 pb-16 bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center w-full">
          <ScrollReveal direction="up">
            <p className="font-sans text-label-caps text-primary mb-4 font-bold tracking-widest text-[12px] uppercase">
              OUR TRACK RECORD
            </p>
            <h1 className="font-serif text-[40px] md:text-[56px] text-on-surface mb-6 font-bold leading-tight">
              What Clients Are Saying
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" />
            <p className="font-sans text-[18px] text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              We take pride in delivering meticulous financial precision to boutique firms, growing startups, and established enterprises across the globe.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Testimonials Bento-inspired Grid */}
      <main className="py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test, index) => {
              return (
                <ScrollReveal
                  direction="up"
                  delay={index * 0.05}
                  key={test.name}
                  className="h-full"
                >
                  <div
                    className={`luxury-card-shadow hover:translate-y-[-8px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white p-8 rounded-[4px] transition-all duration-300 flex flex-col justify-between h-full border border-gray-100/50 ${
                      test.featured ? "border-l-4 border-l-primary-container" : ""
                    }`}
                  >
                    <div>
                      <div className="mb-6 flex gap-1 text-primary-container select-none">
                        {[...Array(test.stars)].map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <p className="font-sans text-sm text-on-surface italic leading-relaxed mb-8">
                        {test.text}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
                      <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden relative flex-shrink-0">
                        <img
                          className="w-full h-full object-cover"
                          alt={test.name}
                          src={test.image}
                        />
                      </div>
                      <div>
                        <h4 className="font-sans text-label-caps uppercase tracking-widest text-[12px] font-bold text-on-surface">
                          {test.name}
                        </h4>
                        <p className="text-xs text-on-surface-variant font-medium">
                          {test.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="py-section-gap bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center w-full">
          <ScrollReveal direction="up">
            <h2 className="font-serif text-[36px] font-semibold leading-tight text-on-surface mb-6">
              Ready to Experience Precision?
            </h2>
            <p className="font-sans text-[18px] text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
              Join our network of sophisticated business owners who have elevated their financial management with AARC.
            </p>
            <CalendlyButton
              variant="primary"
              text="Join Our Clients"
              className="px-12 py-5 text-[12px] tracking-widest uppercase font-bold"
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
