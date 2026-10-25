import { Link } from "react-router-dom";
import Container from "../components/Container";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import TeamCards from "../components/AboutPage/TeamCards";
import FormCareer from "../components/AboutPage/FormCareer";

export default function AboutUsPage() {
  const [isVisionMissionOpen, setIsVisionMissionOpen] = useState(false);

  return (
    <div>
      <div className=" bg-light py-4 mb-5">
        <Container>
          <div className=" text-xs">
            <Link to="/" className=" text-neutral hover:text-dark transition">
              Beranda
            </Link>
            <span className=" text-neutral px-2"> / </span>
            <span className=" text-dark font-bold">Tentang</span>
          </div>
        </Container>
      </div>

      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className=" w-[366px]">
            <div className=" flex">
              <p className=" text-xs font-semibold bg-near text-secnear py-1 px-5 rounded-full">
                TENTANG KAMI
              </p>
            </div>
            <div>
              <p className=" text-4xl font-semibold">
                Mengenal Lebih Dekat Matoa Envicon
              </p>
            </div>
            <div>
              <p className=" text-xs text-neutral mt-2">
                Konsultan lingkungan yang berkomitmen membantu bisnis tumbuh
                selaras dengan kelestarian alam & kepatuhan regulasi
              </p>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/about-page-image.png"
              alt="about page image"
              className=" w-full h-[340px] object-top object-cover"
            />
          </div>
        </div>
      </Container>

      <div className="w-full bg-light py-12 my-12">
        <Container>
          <div className=" grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
            <div className="w-full">
              <span className="mb-2 block text-[9px] font-medium uppercase tracking-wide text-neutral">
                PT Matoa Envicon
              </span>

              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-dark sm:text-3xl">
                Sambutan Direktur
              </h2>

              <p className="mt-3 max-w-lg text-xs leading-[1.8] text-neutral">
                Sejak berdiri, kami percaya bahwa pertumbuhan bisnis dan
                kelestarian lingkungan bukan dua hal yang bertentangan. Melalui
                setiap kajian, dokumen, dan pendampingan yang kami berikan, kami
                berupaya menjadi mitra terpercaya bagi pelaku usaha dalam
                memenuhi kewajiban perizinan lingkungan.
              </p>

              <div className="mt-6 overflow-hidden rounded-md border border-[#E1E7D9] bg-white">
                <button
                  type="button"
                  onClick={() => setIsVisionMissionOpen((current) => !current)}
                  aria-expanded={isVisionMissionOpen}
                  aria-controls="vision-mission-content"
                  className="flex w-full items-center justify-between gap-4 px-3 py-3 text-left transition-colors hover:bg-secondary"
                >
                  <span className="text-[11px] font-semibold text-dark">
                    Visi &amp; Misi
                  </span>

                  {isVisionMissionOpen ? (
                    <ChevronUp
                      size={15}
                      strokeWidth={1.7}
                      className="text-neutral"
                    />
                  ) : (
                    <ChevronDown
                      size={15}
                      strokeWidth={1.7}
                      className="text-neutral"
                    />
                  )}
                </button>

                {isVisionMissionOpen && (
                  <div
                    id="vision-mission-content"
                    className="space-y-4 border-t border-[#E8EDE2] px-3 py-4"
                  >
                    <div>
                      <h3 className="text-[11px] font-semibold text-dark">
                        • Visi
                      </h3>
                      <p className="mt-1 pl-3 text-[11px] leading-relaxed text-neutral">
                        Menjadi mitra konsultasi lingkungan terpercaya yang
                        mendukung pertumbuhan industri berkelanjutan dan
                        bertanggung jawab.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[11px] font-semibold text-dark">
                        • Misi
                      </h3>
                      <p className="mt-1 pl-3 text-[11px] leading-relaxed text-neutral">
                        Memberikan layanan konsultasi yang profesional, membantu
                        pemenuhan regulasi lingkungan, serta meningkatkan
                        kesadaran terhadap kelestarian alam.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mx-auto w-full max-w-[430px] md:max-w-none">
              <div className="overflow-hidden rounded-md bg-white">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85"
                  alt="Direktur PT Matoa Envicon"
                  className="h-[260px] w-full object-cover object-center sm:h-[320px] md:h-[260px] lg:h-[320px]"
                />

                <div className="px-3 py-3">
                  <h3 className="text-xs font-semibold text-dark">
                    Lorem Ipsum
                  </h3>

                  <p className="mt-0.5 text-[10px] text-neutral">
                    Direktur Utama, PT Matoa Envicon
                  </p>

                  <p className="mt-1 text-[10px] italic leading-relaxed text-[#858C7D]">
                    "Bertumbuh bersama, menjaga alam bersama."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <TeamCards />
      </div>

      <div className=" bg-light py-12 md:py-16">
        <FormCareer />
      </div>
    </div>
  );
}
