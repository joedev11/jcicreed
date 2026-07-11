import { whyItems } from '@/data/content';

export default function WhyUsTeaser() {
  return (
    <section className="py-[80px] px-[5%] bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-navy mb-2">
              Why Choose Us?
            </h2>
            <p className="text-gray-500 text-[15px] max-w-md">
              The reasons our clients trust us — and keep coming back.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {whyItems.map((item) => (
            <div
              key={item.number}
              className="flex gap-5 items-start bg-white p-7 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="shrink-0 w-10 h-10 rounded-full border-2 border-jds-orange flex items-center justify-center">
                <span className="text-jds-orange font-black text-[15px] leading-none">{item.number}</span>
              </div>
              <div>
                <h4 className="text-navy font-bold text-[15px] mb-1">{item.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
