import { fleetUnits } from '@/data/content';

export default function Fleet() {
  return (
    <section id="fleet" className="py-[90px] px-[5%] bg-jds-gray">
      <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-navy mb-3">Our Units</h2>
      <p className="text-base text-gray-500 leading-relaxed max-w-xl">
        A growing fleet of 30+ well-maintained trucks ready to serve your logistics needs.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
        {fleetUnits.map((unit) => (
          <div key={unit.label} className="bg-white rounded-lg overflow-hidden shadow-sm text-center">
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-navy to-jds-blue flex items-center justify-center text-5xl">
              {unit.icon}
            </div>
            <p className="py-4 px-3 text-[13px] font-semibold text-navy tracking-wide">{unit.label}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-400 text-center">
        All units are regularly maintained and operated by trained, experienced drivers.
      </p>
    </section>
  );
}
