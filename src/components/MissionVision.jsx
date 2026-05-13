const cards = [
  {
    label: 'Mission',
    heading: 'To provide the best logistic solutions you can rely on.',
    body: 'We handle everything with a service-first approach — fast, efficient, and hassle-free delivery for every client, every time.',
  },
  {
    label: 'Vision',
    heading: 'Going beyond by delivering your company\'s expectations.',
    body: 'We strive to be the most trusted and innovative transport partner in the Philippines, setting the standard for reliability and service excellence.',
  },
];

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-[90px] px-[5%] bg-jds-gray">
      <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-navy mb-3">Mission &amp; Vision</h2>
      <p className="text-gray-400 text-base leading-relaxed max-w-xl mb-[60px]">
        The principles that drive every delivery we make.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl p-10 shadow-sm border border-gray-100">
            {/* Label */}
            <p className="text-[11px] font-bold uppercase tracking-[3px] text-jds-orange mb-5">
              {card.label}
            </p>

            {/* Heading */}
            <h3 className="text-navy font-bold text-[22px] leading-snug mb-5">
              {card.heading}
            </h3>

            {/* Divider */}
            <div className="w-10 h-0.5 bg-jds-orange mb-5" />

            {/* Body */}
            <p className="text-gray-500 text-[15px] leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
