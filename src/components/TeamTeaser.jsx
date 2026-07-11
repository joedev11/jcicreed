import { teamMembers } from '@/data/content';

export default function TeamTeaser() {
  return (
    <section className="py-[80px] px-[5%] bg-jds-gray">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-extrabold text-navy mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-7 max-w-md">
            Behind every delivery is a dedicated team of logistics professionals with
            combined decades of supply chain experience.
          </p>
          <a
            href="/about#team"
            className="inline-block bg-navy text-white px-7 py-3 rounded font-semibold text-[13px] tracking-wide hover:bg-jds-orange transition-colors no-underline"
          >
            Meet the Team →
          </a>
        </div>

        {/* Avatar row */}
        <div className="flex gap-4 flex-wrap justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md ring-2 ring-white">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-navy flex items-center justify-center">
                    <span className="text-white font-extrabold text-sm tracking-wide">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-[11px] font-semibold text-navy text-center leading-tight max-w-[64px]">
                {member.name.split(' ')[0]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
