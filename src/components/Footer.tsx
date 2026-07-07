import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#303030] py-16 text-[#e4e2e2] mt-auto">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 select-none cursor-pointer mb-6">
            <img
              alt="AARC Logo"
              className="h-16 w-auto object-contain flex-shrink-0"
              src="/logo-transparent.png"
            />
            <div className="flex flex-col justify-center mt-1">
              <span className="font-serif leading-tight text-primary font-bold text-[28px] whitespace-nowrap uppercase tracking-widest">
                AARC
              </span>
              <span className="font-sans text-[#CFA550] uppercase font-bold text-[11px] tracking-[0.2em] whitespace-nowrap -mt-1">
                Smart Bookkeeping
              </span>
            </div>
          </Link>
          <p className="font-sans text-sm text-[#e4e2e2]/80 leading-relaxed italic">
            Empowering your business with Smart books.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans text-[#ffdea4] mb-6 uppercase tracking-widest text-[12px] font-bold">
            Quick Links
          </h4>
          <ul className="space-y-4 font-sans text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-[#cfa550] transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-sans text-[#ffdea4] mb-6 uppercase tracking-widest text-[12px] font-bold">
            Service Areas
          </h4>
          <ul className="space-y-4 font-sans text-sm">
            <li>Cypress, TX (Local)</li>
            <li>Tomball, TX (Local)</li>
            <li>The Woodlands, TX</li>
            <li className="text-[#ffdea4]/90 font-medium leading-relaxed">
              Serving Nationwide<br />
              <span className="text-[11px] opacity-75 font-normal">(incl. California, Texas)</span>
            </li>
          </ul>
        </div>

        {/* Contact info & Socials */}
        <div>
          <h4 className="font-sans text-[#ffdea4] mb-6 uppercase tracking-widest text-[12px] font-bold">
            Contact
          </h4>
          <p className="text-sm mb-4 font-sans">aarcsmartbookkeeping@gmail.com</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-[24px] select-none">
              hub
            </span>
            <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors text-[24px] select-none">
              linked_services
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-20 pt-8 border-t border-surface-variant/10 text-center space-y-3">
        <p className="font-sans text-xs opacity-60">
          © {new Date().getFullYear()} AARC Smart Bookkeeping. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 text-xs opacity-65 font-sans py-1">
          <Link href="/privacy" className="hover:text-[#cfa550] transition-colors">Privacy Policy</Link>
          <span className="opacity-40">|</span>
          <Link href="/terms" className="hover:text-[#cfa550] transition-colors">Terms of Service</Link>
        </div>
        <p className="font-sans text-xs opacity-40">
          Made with ♥ by{" "}
          <a
            href="https://vaslinq.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
          >
            Tasmiya @ vaslinq.com
          </a>
        </p>
      </div>
    </footer>
  );
}
