import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const services = [
  {
    id: "lingkungan",
    initial: "A",
    title: "Persetujuan Lingkungan",
    description: "Lorem Ipsum",
    items: [
      {
        title: "AMDAL",
        description: "Analisis Mengenai Dampak Lingkungan",
      },
      {
        title: "UKL-UPL",
        description: "Upaya Pengelolaan dan Pemantauan Lingkungan",
      },
      {
        title: "SPPL",
        description: "Surat Pernyataan Kesanggupan Pengelolaan Lingkungan",
      },
    ],
  },
  {
    id: "teknis",
    initial: "U",
    title: "Persetujuan Teknis",
    description: "Lorem Ipsum",
    items: [
      {
        title: "Persetujuan Teknis Air Limbah",
        description: "Kajian teknis pengelolaan air limbah",
      },
      {
        title: "Persetujuan Teknis Emisi",
        description: "Kajian teknis pengendalian emisi",
      },
      {
        title: "Surat Kelayakan Operasional",
        description: "Pendampingan pemenuhan persyaratan operasional",
      },
    ],
  },
  {
    id: "solusi",
    initial: "P",
    title: "Solusi Lingkungan",
    description: "Lorem Ipsum",
    items: [
      {
        title: "Audit Lingkungan",
        description: "Evaluasi pengelolaan lingkungan perusahaan",
      },
      {
        title: "Konsultasi Lingkungan",
        description: "Pendampingan kepatuhan terhadap regulasi",
      },
      {
        title: "Pemantauan Lingkungan",
        description: "Pemantauan dan evaluasi kualitas lingkungan",
      },
    ],
  },
];

export default function About() {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (id) => {
    setActiveMenu((current) => (current === id ? null : id));
  };

  return (
    <section className="w-full py-12 sm:px-8 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="assets/images/about-image-section.png"
            alt="Ilustrasi anak-anak menjaga kelestarian bumi"
            className="aspect-[4/4.5] w-full max-w-[430px] object-cover md:aspect-[310/352] md:max-w-none"
          />
        </div>

        <div className="w-full">
          <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral">
            Tentang Kami
          </span>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-dark sm:text-4xl">
            Siapa Kami
          </h2>

          <p className="mt-2 max-w-xl text-xs leading-[1.8] text-[#30382C]">
            PT Matoa Envicon adalah konsultan lingkungan yang membantu pelaku
            usaha memenuhi kewajiban perizinan lingkungan — dari kajian AMDAL
            hingga audit kepatuhan berkelanjutan.
          </p>

          <div className="mt-5">
            {services.map((service) => {
              const isOpen = activeMenu === service.id;

              return (
                <div key={service.id} className="border-b border-[#E5EBDD]">
                  <button
                    type="button"
                    onClick={() => toggleMenu(service.id)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${service.id}`}
                    className="flex w-full items-center gap-3 py-3 text-left transition-colors hover:bg-[#EFF4E5]/60"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF2D9] text-[10px] font-medium text-[#657F35]">
                      {service.initial}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className="text-xs font-semibold text-dark">
                        {service.title}
                      </span>
                      <span className="text-[9px] text-neutral">
                        {service.description}
                      </span>
                    </span>
                    {isOpen ? (
                      <ChevronDown
                        size={15}
                        strokeWidth={1.5}
                        className="shrink-0 text-neutral"
                      />
                    ) : (
                      <ChevronRight
                        size={15}
                        strokeWidth={1.5}
                        className="shrink-0 text-neutral"
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div id={`panel-${service.id}`} className="ml-11 pb-3">
                      {service.items.map((item, index) => (
                        <div
                          key={item.title}
                          className={`py-3 ${
                            index !== service.items.length - 1
                              ? "border-b border-[#E5EBDD]/70"
                              : ""
                          }`}
                        >
                          <h3 className="text-xs font-medium text-dark">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-[10px] leading-relaxed text-neutral">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
