export default function FounderQuote() {
  return (
    <section className="py-[80px] px-[5%] bg-jds-gray">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Quote */}
        <div className="flex-1 border-l-4 border-jds-orange pl-8">
          <p className="text-navy text-[clamp(17px,2.2vw,22px)] font-semibold leading-[1.75] mb-6">
            &ldquo;We started with one truck and a promise — to never let our clients down.
            Eight years later, that promise is still the foundation of everything we do.
            Your mission is not just a job to us. It is our passion.&rdquo;
          </p>
          <p className="text-jds-orange font-bold text-[13px] uppercase tracking-[2px]">
            — JC Ibañez
          </p>
          <p className="text-gray-400 text-[12px] mt-0.5 tracking-wide">
            Founder & CEO, JCICREED Delivery Services
          </p>
        </div>

        {/* Photo / Avatar */}
        <div className="shrink-0 w-36 h-36 rounded-full overflow-hidden ring-4 ring-[#e8edf5]">
          <div className="w-full h-full bg-navy flex items-center justify-center">
            <span className="text-white font-extrabold text-2xl tracking-wide">JCI</span>
          </div>
        </div>

      </div>
    </section>
  );
}
