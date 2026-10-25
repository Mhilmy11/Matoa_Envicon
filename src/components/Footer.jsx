import Container from "./Container";

export default function Footer() {
  return (
    <div className="bg-dark">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-6 sm:gap-10 md:grid-cols-2 md:py-4">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/assets/matoa_footer_logo.png"
              alt="matoa-footer-logo"
              className="w-36 sm:w-40 md:w-auto max-w-full object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 text-xs sm:grid-cols-4 sm:gap-x-5 sm:gap-y-6 md:gap-x-4 lg:gap-x-5 xl:gap-x-0">
            <div className="col-span-2 pl-0 xl:pl-10">
              <p className="text-light font-semibold">LAYANAN</p>

              <div className="flex flex-col items-start gap-2 pt-4 text-neutral">
                <button className="text-left hover:text-secondary">
                  AMDAL
                </button>
                <button className="text-left hover:text-secondary">
                  UKL-UPL
                </button>
                <button className="text-left hover:text-secondary">
                  Pertek (Emisi/BMAL/Rintek TPS LB3)
                </button>
                <button className="text-left hover:text-secondary">
                  SKKLH
                </button>
                <button className="text-left hover:text-secondary">SLO</button>
                <button className="text-left hover:text-secondary">IPAL</button>
                <button className="text-left hover:text-secondary">
                  Sistem Pengendalian Emisi
                </button>
              </div>
            </div>

            <div>
              <p className="text-light font-semibold">PERUSAHAAN</p>

              <div className="flex flex-col items-start gap-2 pt-4 text-neutral">
                <button className="text-left hover:text-secondary">
                  Tentang Kami
                </button>
                <button className="text-left hover:text-secondary">
                  Proyek
                </button>
                <button className="text-left hover:text-secondary">
                  Artikel
                </button>
                <button className="text-left hover:text-secondary">
                  karier
                </button>
              </div>
            </div>

            <div>
              <p className="text-light font-semibold">KONTAK</p>

              <div className="flex flex-col items-start gap-2 pt-4 text-neutral">
                <button className="text-left hover:text-secondary whitespace-nowrap">
                  +62 345-6789-0123
                </button>
                <button className="text-left hover:text-secondary break-all sm:break-normal">
                  info@matoaenvicon.co.id
                </button>
                <button className="text-left hover:text-secondary">
                  Jakarta, Indonesia
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
