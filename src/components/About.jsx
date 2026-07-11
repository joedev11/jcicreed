import { contactInfo } from '@/data/content';

const infoItems = [
  { icon: '📍', label: 'Address', value: contactInfo.address },
  { icon: '📞', label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
  { icon: '✉️', label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
];


export default function About() {
  return (
    <section id="about" className="bg-white">

      {/* Main content */}
      <div className="px-[5%] py-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Text — takes 3 cols */}
          <div className="lg:col-span-3 space-y-5">
            <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-navy mb-3">Company Profile</h2>
            <p className="text-base text-gray-400 leading-relaxed mb-6">
              Your mission is our passion — we are committed to delivering value.
            </p>
            <p className="text-[15px] leading-[1.9] text-gray-600">
              JCICREED DELIVERY SERVICE was established 8 years ago as a premiere
              service-oriented transport company. We are a team of service-oriented,
              dynamic, committed and passionate in taking the load to our clients in
              the most efficient service.
            </p>
            <p className="text-[15px] leading-[1.9] text-gray-600">
              As we expanded our horizon over the years from our humble beginning of
              1 truck, we have grown our company to a fleet of 30+ trucks to fill the
              need for outstanding service, reliability and competitive prices to
              freight forwarders in the marketplace.
            </p>
            <p className="text-[15px] leading-[1.9] text-gray-600">
              Our existence in this industry is to remain loyal to our clients with
              the highest commitment in providing value added services, personalized
              and innovative ways that are best suited for the needs of our partners.
            </p>

            <div className="mt-8 p-6 bg-jds-gray rounded-xl border-l-4 border-jds-orange">
              <p className="text-navy font-bold text-lg italic">&quot;Your mission, Our passion.&quot;</p>
              <p className="text-gray-400 text-sm mt-1">— JCICREED Delivery Services, Est. 2018</p>
            </div>
          </div>

          {/* Contact card — takes 2 cols */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              {/* Card header */}
              <div className="bg-jds-orange px-7 py-5">
                <p className="text-white font-black text-lg tracking-wide">Get in Contact</p>
                <p className="text-orange-100 text-sm mt-0.5">We&apos;d love to hear from you</p>
              </div>

              {/* Card body */}
              <div className="bg-navy px-7 py-6 space-y-5">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-base">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[11px] text-jds-orange font-bold uppercase tracking-widest mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[14px] text-white hover:text-jds-orange transition-colors no-underline leading-snug block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[14px] text-white leading-snug">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] text-[#5a7aaa] uppercase tracking-widest mb-3">Business Hours</p>
                  <p className="text-white text-sm">Monday – Saturday</p>
                  <p className="text-jds-orange font-bold text-sm">8:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="/#contact"
                className="block bg-jds-orange/90 hover:bg-jds-orange text-white text-center py-4 font-bold text-sm tracking-wide transition-colors no-underline"
              >
                Send an Inquiry →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
