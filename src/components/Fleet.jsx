import { fleetSpecs, fleetFeatures } from '@/data/content';

export default function Fleet() {
  return (
    <section id="fleet" className="py-[90px] px-[5%] bg-jds-gray">
      <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-navy mb-3">Our Units</h2>
      <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-12">
        A growing fleet of 30+ well-maintained trucks ready to serve your logistics needs.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Photo */}
        <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-navy">
          <img
            src="/images/fleet-trucks.png"
            alt="JCICREED 6-wheeler fleet"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {fleetSpecs.map((spec) => (
              <div key={spec.label} className="bg-white rounded-xl px-5 py-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-jds-orange mb-1">
                  {spec.label}
                </p>
                <p className="text-navy font-extrabold text-[17px]">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Features list */}
          <ul className="space-y-3">
            {fleetFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[14px] text-gray-600">
                <span className="mt-[3px] shrink-0 w-4 h-4 rounded-full bg-jds-orange/15 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-jds-orange block" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <a
            href="/#contact"
            className="inline-block mt-8 bg-jds-orange text-white px-7 py-3 rounded font-semibold text-[13px] tracking-wide hover:bg-[#b85315] transition-colors no-underline"
          >
            Request a Unit →
          </a>
        </div>

      </div>
    </section>
  );
}
