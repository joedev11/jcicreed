const clients = [
  { name: "Unilogix Inc.", logo: "/images/clients/unilogix.jpg" },
  { name: "DHL Summit Solutions", logo: "/images/clients/dhl.jpg" },
  { name: "Robinsons Supermarket", logo: "/images/clients/robinsons.jpg" },
  { name: "Premier Wine & Spirits", logo: "/images/clients/premier.jpg" },
  { name: "Mary Grace", logo: "/images/clients/mary_grace.jpg" },
  { name: "Sika", logo: "/images/clients/sika.jpg" },
];

export default function Clients() {
  return (
    <section className="py-[60px] px-[5%] bg-navy-dark">
      <p className="text-center text-[11px] font-bold uppercase tracking-[3px] text-[#5a7aaa] mb-10">
        Trusted by Leading Companies
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {clients.map((client) => (
          <div
            key={client.name}
            className="h-14 w-32 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-full max-w-full object-contain rounded-sm"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
