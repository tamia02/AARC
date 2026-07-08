"use client";

import ScrollReveal from "@/components/ScrollReveal";
import CalendlyButton from "@/components/CalendlyButton";
import ExpandableText from "@/components/ExpandableText";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Corey Drayton",
      role: "COO / Founder, Drayton Enterprises (Houston)",
      stars: 5,
      text: `Working with Raksha has been a great experience. She's organized, responsive, and easy to work with. Knowing my bookkeeping is in good hands gives me peace of mind and lets me focus on running my business instead of worrying about the numbers. I really appreciate her professionalism and would happily recommend her to anyone looking for a reliable bookkeeper.`,
      featured: true,
    },
    {
      name: "Casey Reynolds",
      role: "Business Owner",
      stars: 5,
      text: `Raksha has been an exceptional bookkeeper for my six companies. Her accuracy, organization, and ability to manage complex, multi-entity financials are truly impressive. She consistently delivers reliable work and keeps everything running smoothly. I highly value her professionalism and dedication.`,
      featured: true,
    },
    {
      name: "Cheyann Yates",
      role: "Business Owner",
      stars: 5,
      text: `You have been so kind and helpful. Very quick to respond with any needs/questions we have. We appreciate all you've done 😊`,
      featured: true,
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
                        &quot;<ExpandableText text={test.text} maxLength={150} />&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/10">
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
