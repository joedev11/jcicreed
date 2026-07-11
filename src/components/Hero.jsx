"use client";

import { useState, useEffect, useCallback } from "react";
import { stats } from "@/data/content";

const slides = [
  {
    image: "/images/fleet-trucks-3.jpg",
    overlay: "rgba(10, 20, 50, 0.60)",
    headline: ["Let Us Take the", "Weight Off", "Your Shoulders."],
    accent: 1,
    sub: "JCICREED Delivery Services is a premiere service-oriented transport company with a fleet of 30+ trucks.",
  },
  {
    image: "/images/fleet-trucks.png",
    overlay: "rgba(10, 22, 48, 0.68)",
    headline: ["Fast. Efficient.", "Hassle-Free", "Delivery."],
    accent: 0,
    sub: "From our humble beginning of 1 truck to 30+ units nationwide — we deliver on time, every time.",
  },
  {
    image: "/images/hero-trucks.png",
    overlay: "rgba(17, 29, 62, 0.75)",
    headline: ["Your Mission", "Is Our Passion.", ""],
    accent: 1,
    sub: "Service-first, committed, and passionate in taking your load to its destination in the most efficient way.",
  },
];

const INTERVAL = 10000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-[5%] pt-24 pb-16 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
          aria-hidden={i !== current}
        >
          {/* Photo background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0"
            style={{ background: slide.overlay }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-block bg-jds-orange text-white text-[11px] font-bold tracking-[2px] px-3.5 py-1.5 rounded-sm mb-6">
          ESTABLISHED 2018 &bull; MUNTINLUPA CITY
        </div>

        {/* Headlines */}
        <div className="relative min-h-[180px] md:min-h-[210px] mb-5">
          {slides.map((slide, i) => (
            <h1
              key={i}
              className="absolute top-0 left-0 text-[clamp(36px,6vw,68px)] font-extrabold text-white leading-[1.1] transition-all duration-500"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? "translateY(0)" : "translateY(20px)",
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              {slide.headline.map((line, j) => (
                <span
                  key={j}
                  className={j === slide.accent ? "text-jds-orange" : ""}
                >
                  {line}
                  {j < slide.headline.length - 1 && line && <br />}
                </span>
              ))}
            </h1>
          ))}
        </div>

        {/* Subtexts */}
        <div className="relative min-h-[56px] mb-9">
          {slides.map((slide, i) => (
            <p
              key={i}
              className="absolute top-0 left-0 text-[17px] text-[#b0c4e8] leading-relaxed max-w-xl transition-all duration-500 delay-100"
              style={{
                opacity: i === current ? 1 : 0,
                transform: i === current ? "translateY(0)" : "translateY(12px)",
                pointerEvents: i === current ? "auto" : "none",
              }}
            >
              {slide.sub}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="bg-jds-orange text-white px-8 py-3.5 rounded font-bold text-sm tracking-wide hover:bg-[#b85315] hover:-translate-y-px transition-all no-underline"
          >
            Get a Quote
          </a>
          <a
            href="/about"
            className="border-2 border-white/30 text-white px-8 py-3.5 rounded font-semibold text-sm hover:border-white hover:bg-white/10 transition-all no-underline"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-14 pt-9 border-t border-white/15">
          {stats.map((s) => (
            <div key={s.label}>
              <strong className="block text-[36px] font-extrabold text-jds-orange leading-none">
                {s.value}
              </strong>
              <span className="text-xs tracking-widest text-[#aabbdd] mt-1 block uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Prev arrow — hidden on mobile */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white text-lg items-center justify-center hover:bg-jds-orange hover:border-jds-orange transition-colors backdrop-blur-sm"
      >
        &#8592;
      </button>

      {/* Next arrow — hidden on mobile */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white text-lg items-center justify-center hover:bg-jds-orange hover:border-jds-orange transition-colors backdrop-blur-sm"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full border-0 transition-all cursor-pointer p-0 ${
              i === current
                ? "bg-jds-orange scale-125"
                : "bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20">
        <div
          key={current}
          className="h-full bg-jds-orange"
          style={{
            animation: `progressFill ${INTERVAL}ms linear forwards`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      </div>
    </section>
  );
}
