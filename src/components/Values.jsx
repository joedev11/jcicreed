'use client';

import { useState } from 'react';
import { values } from '@/data/content';

export default function Values() {
  const [open, setOpen] = useState(null);

  return (
    <section id="values" className="py-[90px] px-[5%] bg-white">
      <div className="w-10 h-1 bg-jds-orange rounded mb-4" />
      <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold text-navy mb-3">Our Values</h2>
      <p className="text-base text-gray-500 leading-relaxed max-w-xl">
        <strong>S.E.R.V.I.C.E.</strong> — The foundation of everything we do for trucking services.
      </p>

      {/* Desktop grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[52px]">
        {values.map((v) => (
          <div
            key={v.title}
            className="p-8 rounded-lg border border-[#e8edf5] hover:shadow-lg hover:-translate-y-1 hover:border-jds-orange/30 transition-all group"
          >
            <div className="w-14 h-14 bg-jds-orange/10 rounded-xl flex items-center justify-center text-2xl mb-5 group-hover:bg-jds-orange/20 transition-colors">
              {v.icon}
            </div>
            <h4 className="text-base font-bold text-navy mb-2.5">{v.title}</h4>
            <p className="text-[14px] text-gray-500 leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="flex flex-col gap-2 mt-10 sm:hidden">
        {values.map((v) => {
          const isOpen = open === v.title;
          return (
            <div
              key={v.title}
              className="border border-[#e8edf5] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : v.title)}
                className="w-full flex items-center gap-4 px-5 py-4 bg-white text-left"
              >
                <div className="shrink-0 w-10 h-10 bg-jds-orange/10 rounded-lg flex items-center justify-center text-lg">
                  {v.icon}
                </div>
                <span className="font-bold text-navy flex-1">{v.title}</span>
                <span className={`text-jds-orange text-lg transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>

              {/* Expandable description */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-[14px] text-gray-500 leading-relaxed border-t border-[#f0f4fa] pt-3">
                  {v.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
