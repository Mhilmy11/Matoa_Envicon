import { ArrowUpRight, Sparkles, MoveUpRight } from "lucide-react";

export default function UndermaintenancePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7FAF0] text-[#1C2B0E]">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#A9D043]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#ED8F35]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 sm:px-10 lg:px-20">
        <section className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-2 lg:gap-12 lg:py-12">
          <div className="relative z-10 order-2 lg:order-1">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#A9D043]/40 bg-[#A9D043]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#657060] sm:text-xs">
              <Sparkles size={14} className="text-[#ED8F35]" />
              Something new is coming
            </div>

            <h1 className="max-w-[700px] text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[0.96] tracking-[-0.075em]">
              Ideas into
              <br />
              <span className="text-[#A9D043] italic">reality.</span>
              <br />
              Coming soon.
            </h1>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="mailto:hello@yourdomain.com"
                className="group inline-flex items-center gap-4 rounded-xl bg-[#1C2B0E] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#657060] hover:shadow-xl hover:shadow-[#1C2B0E]/15"
              >
                Let's work together
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#A9D043] text-[#1C2B0E] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </a>

              <span className="text-xs font-medium text-[#657060]">
                Stay tuned for what's next.
              </span>
            </div>
          </div>

          <div className="relative order-1 flex min-h-[300px] items-center justify-center sm:min-h-[400px] lg:order-2 lg:min-h-[570px]">
            <div className="absolute h-[270px] w-[270px] rounded-full border border-[#657060]/15 sm:h-[390px] sm:w-[390px]" />
            <div className="absolute h-[340px] w-[340px] rotate-45 rounded-[42%] border border-dashed border-[#A9D043]/40 sm:h-[470px] sm:w-[470px]" />

            <div className="absolute left-[15%] top-[23%] h-4 w-4 animate-pulse rounded-full bg-[#ED8F35] shadow-[0_0_25px_#ED8F3550] sm:left-[12%]" />
            <div className="absolute bottom-[20%] right-[12%] h-3 w-3 animate-pulse rounded-full bg-[#A9D043] shadow-[0_0_20px_#A9D04380]" />

            <div className="relative z-10 flex h-[210px] w-[210px] animate-[pulse_6s_ease-in-out_infinite] items-center justify-center rounded-[42%_58%_62%_38%/43%_44%_56%_57%] bg-gradient-to-br from-[#C3E66B] via-[#A9D043] to-[#657F31] shadow-[inset_-15px_-20px_35px_#1C2B0E20,0_35px_80px_#65706035] transition-transform duration-700 hover:scale-105 sm:h-[290px] sm:w-[290px]">
              <div className="absolute left-[20%] top-[15%] h-[45%] w-[45%] rounded-full bg-white/25 blur-2xl" />
              <div className="absolute bottom-[17%] right-[15%] h-[35%] w-[35%] rounded-full bg-[#1C2B0E]/15 blur-2xl" />

              <div className="relative flex h-20 w-20 rotate-[-12deg] items-center justify-center rounded-[28px] sm:h-24 sm:w-24">
                <img src="/matoa_navbar_logo.png" alt="matoa-logo-navbar" />
              </div>
            </div>

            <div className="absolute right-0 top-[13%] z-20 animate-bounce [animation-duration:5s] rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-[#1C2B0E]/5 backdrop-blur-xl sm:right-[2%] sm:p-5">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A9D043]/20 text-[#657F31]">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-widest text-[#657060]">
                    Our focus
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#1C2B0E] sm:text-sm">
                    Creative ideas
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[13%] left-0 z-20 animate-bounce [animation-duration:6s] rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-[#1C2B0E]/5 backdrop-blur-xl sm:left-[2%] sm:p-5">
              <p className="text-[9px] font-semibold uppercase tracking-widest text-[#657060]">
                The next chapter
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ED8F35]" />
                <p className="text-sm font-bold text-[#1C2B0E]">
                  In the making
                </p>
              </div>
              <div className="mt-3 flex gap-1">
                <span className="h-1 w-7 rounded-full bg-[#A9D043]" />
                <span className="h-1 w-7 rounded-full bg-[#A9D043]" />
                <span className="h-1 w-7 rounded-full bg-[#ED8F35]" />
                <span className="h-1 w-7 rounded-full bg-[#E6E9DF]" />
              </div>
            </div>

            <div className="absolute right-[16%] top-[28%] text-[#ED8F35]">
              <Sparkles size={25} strokeWidth={1.5} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
