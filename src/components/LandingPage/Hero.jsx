import { useEffect, useState } from "react";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../Container";

const heroSlides = [
  {
    eyebrow: "AMDAL",
    title: (
      <>
        Partner untuk <span className="text-secondary">lingkungan</span> dan
        kepatuhan industri anda
      </>
    ),
    description:
      "Kami membantu industri menjalankan perizinan lingkungan secara terukur, tepat regulasi, dan dapat dipertanggungjawabkan.",
    buttonText: "Selengkapnya",
    image: "/assets/images/hero-image-amdal.png",
    imageAlt: "Tanaman hijau sebagai simbol kepedulian lingkungan",
  },
  {
    eyebrow: "ENVIRONMENTAL SOLUTIONS",
    title: (
      <>
        Solusi berkelanjutan untuk{" "}
        <span className="text-secondary">masa depan</span> industri
      </>
    ),
    description:
      "Mendampingi bisnis membangun strategi lingkungan yang bertanggung jawab, efisien, dan berkelanjutan.",
    buttonText: "Jelajahi Solusi",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Pemandangan alam hijau yang asri",
  },
  {
    eyebrow: "COMPLIANCE & SAFETY",
    title: (
      <>
        Wujudkan kepatuhan dengan{" "}
        <span className="text-secondary">standar terbaik</span>
      </>
    ),
    description:
      "Membantu perusahaan memahami regulasi, mengelola risiko, dan meningkatkan standar kepatuhan industri.",
    buttonText: "Pelajari Layanan",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Lingkungan kerja profesional",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = heroSlides[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <div className="w-full">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-14 pt-5">
          <div
            key={`content-${activeIndex}`}
            className="flex flex-col items-start justify-center animate-in fade-in duration-700"
          >
            <span className="mb-5 text-[9px] font-medium uppercase tracking-[0.18em] text-neutral">
              {activeSlide.eyebrow}
            </span>

            <h1 className="max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight text-black sm:text-4xl lg:text-[48px]">
              {activeSlide.title}
            </h1>

            <p className="mt-3 max-w-md text-xs leading-relaxed text-neutral sm:text-sm">
              {activeSlide.description}
            </p>

            <a
              href="#layanan"
              className="mt-7 inline-flex items-center gap-2 bg-primary px-4 py-2.5 text-[11px] font-medium text-white transition-colors duration-300 hover:bg-[#d87924]"
            >
              {activeSlide.buttonText}
              <MoveRight size={15} />
            </a>
          </div>

          <div
            key={`image-${activeIndex}`}
            className="relative h-[240px] overflow-hidden bg-white sm:h-[320px] md:h-[300px] lg:h-[380px] animate-in fade-in duration-700"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

            <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white">
              {/* <span className="text-xs font-medium">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-7 bg-white/70" />
              <span className="text-xs text-white/80">
                {String(heroSlides.length).padStart(2, "0")}
              </span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pt-4">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Slide sebelumnya"
          className="flex h-7 w-7 items-center justify-center border border-gray-200 text-dark transition hover:bg-light rounded-full"
        >
          <ChevronLeft size={15} />
        </button>

        <div className="flex items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.eyebrow}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Tampilkan slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-secondary"
                  : "w-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Slide berikutnya"
          className="flex h-7 w-7 items-center justify-center border border-gray-200 text-dark transition hover:bg-light rounded-full"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </Container>
  );
}
