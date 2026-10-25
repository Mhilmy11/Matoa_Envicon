import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../Container";

const directors = [
  {
    id: 1,
    name: "Lorem Ipsum",
    position: "Direktur Utama",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    position: "Direktur Utama",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    position: "Direktur Utama",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 4,
    name: "Lorem Ipsum",
    position: "Direktur Utama",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85",
  },
  {
    id: 5,
    name: "Lorem Ipsum",
    position: "Direktur Utama",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85",
  },
];

export default function TeamCards() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    setCanScrollLeft(slider.scrollLeft > 0);

    setCanScrollRight(
      slider.scrollLeft + slider.clientWidth < slider.scrollWidth - 1,
    );
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    updateButtons();

    slider.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      slider.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const firstCard = slider.querySelector("[data-director-card]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 300;

    const gap = 24;

    slider.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="w-full overflow-hidden bg-white px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <Container>
          <div className=" text-center mb-10">
            <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-neutral">
              TIM KAMI
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
              MEET OUR TEAM
            </h2>
          </div>

          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {directors.map((director) => (
              <article
                key={director.id}
                data-director-card
                className="w-[260px] shrink-0 snap-start rounded-xl border border-[#D8E2CD] bg-[#F7FAF0] p-4 shadow-md transition-shadow hover:shadow-lg sm:w-[300px] lg:w-[330px]"
              >
                <div className="overflow-hidden rounded-md bg-gray-100">
                  <img
                    src={director.image}
                    alt={director.name}
                    loading="lazy"
                    draggable="false"
                    className="h-[230px] w-full object-cover object-center sm:h-[260px]"
                  />
                </div>

                <div className="flex min-h-[92px] flex-col items-center pt-5 text-center">
                  <h3 className="text-base font-semibold text-black">
                    {director.name}
                  </h3>

                  <p className="mt-1 text-xs text-neutral">
                    {director.position}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className=" flex items-center justify-end">
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlider(-1)}
                aria-label="Geser ke kiri"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCE4D3] text-dark transition hover:bg-[#EAF2D9]"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollSlider(1)}
                aria-label="Geser ke kanan"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#DCE4D3] text-dark transition hover:bg-[#EAF2D9]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
