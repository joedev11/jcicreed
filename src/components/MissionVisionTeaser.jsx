const cards = [
  {
    label: 'Mission',
    heading: 'To provide the best logistic solutions you can rely on.',
    icon: '🎯',
  },
  {
    label: 'Vision',
    heading: 'Going beyond by delivering your company\'s expectations.',
    icon: '🔭',
  },
];

export default function MissionVisionTeaser() {
  return (
    <section className="py-[80px] px-[5%] bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-navy mb-2">
              Mission & Vision
            </h2>
            <p className="text-gray-500 text-[15px] max-w-md">
              The principles that drive every delivery we make.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex gap-5 items-start p-7 rounded-xl border border-[#e8edf5] hover:shadow-md hover:border-jds-orange/30 transition-all"
            >
              <div className="shrink-0 w-12 h-12 bg-jds-orange/10 rounded-xl flex items-center justify-center text-2xl">
                {card.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-jds-orange mb-2">
                  {card.label}
                </p>
                <p className="text-navy font-bold text-[16px] leading-snug">{card.heading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
