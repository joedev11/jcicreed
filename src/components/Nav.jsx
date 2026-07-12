'use client';

import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark flex items-center justify-between px-[5%] h-[68px]">
        <a href="/" className="flex items-center gap-3.5 no-underline">
          <div className="text-white font-bold text-[15px] tracking-wide leading-tight">
            JCICREED
            <span className="block font-light text-[11px] tracking-[2px] text-[#aabbdd]">
              DELIVERY SERVICES
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#c8d6f0] no-underline text-[13px] font-medium tracking-wide hover:text-jds-orange transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              className="bg-jds-orange text-white px-5 py-2 rounded font-semibold text-[13px] hover:bg-[#b85315] transition-colors no-underline"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Burger button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] bg-transparent border-0 cursor-pointer p-0"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-40 bg-navy-dark flex flex-col px-[5%] overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-64 py-6' : 'max-h-0 py-0'
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-[#c8d6f0] no-underline text-[15px] font-medium py-3 border-b border-white/10 hover:text-jds-orange transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/#contact"
          onClick={() => setOpen(false)}
          className="mt-4 bg-jds-orange text-white text-center py-3 rounded font-semibold text-[13px] hover:bg-[#b85315] transition-colors no-underline"
        >
          Contact Us
        </a>
      </div>
    </>
  );
}
