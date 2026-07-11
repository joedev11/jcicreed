const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark flex items-center justify-between px-[5%] h-[68px]">
      <a href="/" className="flex items-center gap-3.5 no-underline">
        <div className="text-white font-bold text-[15px] tracking-wide leading-tight">
          JCICREED
          <span className="block font-light text-[11px] tracking-[2px] text-[#aabbdd]">
            DELIVERY SERVICES
          </span>
        </div>
      </a>

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
    </nav>
  );
}
