import { whyItems } from '@/data/content';

export default function WhyUs() {
  return (
    <section id="why" className="py-[90px] px-[5%] bg-navy overflow-hidden">
      <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-white mb-3">Why Choose Us?</h2>
      <p className="text-[#b0c4e8] text-base max-w-xl mb-[60px]">
        The reasons our clients trust us — and keep coming back.
      </p>

      <div className="flex flex-col gap-0">
        {whyItems.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={item.number}
              className={`flex flex-col md:flex-row items-center gap-10 py-12 border-b border-white/10 last:border-0 ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number side */}
              <div className={`shrink-0 flex flex-col items-center gap-3 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                <div className="w-20 h-20 rounded-full border-2 border-jds-orange flex items-center justify-center">
                  <span className="text-[40px] font-black text-jds-orange leading-none">
                    {item.number}
                  </span>
                </div>
              </div>

              {/* Divider line */}
              <div className="hidden md:block w-16 h-px bg-jds-orange/40 shrink-0" />

              {/* Text side */}
              <div className={`max-w-lg ${isEven ? '' : 'md:text-right'}`}>
                <h4 className="text-white font-extrabold text-xl mb-3">{item.title}</h4>
                <p className="text-[#b0c4e8] text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
