export default function Footer() {
  return (
    <footer className="bg-navy-dark text-[#9ab0d4] px-[5%] py-10 flex justify-between items-center flex-wrap gap-4">
      <div className="flex items-center gap-3">
        <div className="text-white font-bold text-[13px]">
          JCICREED DELIVERY SERVICES
          <span className="block text-[10px] font-normal text-[#7a9ac0] tracking-[2px]">
            ESTABLISHED 2018
          </span>
        </div>
      </div>

      <p className="text-xs">
        &copy; {new Date().getFullYear()} JCICREED Delivery Services. All rights
        reserved.
      </p>

      <p className="text-[11px] tracking-[2px] text-[#5a7a9c] uppercase">
        Your Mission, Our Passion
      </p>
    </footer>
  );
}
