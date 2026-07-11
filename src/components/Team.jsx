import { teamMembers } from '@/data/content';

export default function Team() {
  return (
    <section id="team" className="py-[90px] px-[5%] bg-jds-gray">
      <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-navy mb-3">Meet Our Team</h2>
      <p className="text-base text-gray-400 leading-relaxed max-w-xl mb-[60px]">
        The people behind every delivery — passionate, experienced, and committed to your success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[#e8edf5] hover:shadow-lg hover:-translate-y-1 hover:border-jds-orange/30 transition-all"
          >
            {/* Avatar / Photo */}
            <div className="w-24 h-24 rounded-full overflow-hidden mb-5 shrink-0 ring-2 ring-[#e8edf5] group-hover:ring-jds-orange/40 transition-all">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-navy group-hover:bg-jds-orange transition-colors flex items-center justify-center">
                  <span className="text-white font-extrabold text-lg tracking-wide">
                    {member.initials}
                  </span>
                </div>
              )}
            </div>

            {/* Name & role */}
            <h4 className="text-navy font-extrabold text-[15px] mb-1">{member.name}</h4>
            <p className="text-[10px] font-bold uppercase tracking-[2px] text-jds-orange mb-4">
              {member.role}
            </p>

            {/* Divider */}
            <div className="w-8 h-0.5 bg-[#e8edf5] group-hover:bg-jds-orange/40 transition-colors mb-4" />

            {/* Bio */}
            <p className="text-[12px] text-gray-500 leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
