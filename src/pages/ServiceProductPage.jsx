import { Link } from "react-router-dom";
import Container from "../components/Container";
import { MoveRight } from "lucide-react";
import ProductSection from "../components/ServicePage/ProductSection";
import ConsulForm from "../components/ServicePage/ConsulForm";

const ourValues = ["Integritas", "Presisi", "Kolaboratif", "Berkelanjutan"];

export default function ServiceProductPage() {
  return (
    <div>
      <div className=" bg-light py-4 mb-5">
        <Container>
          <div className=" text-xs">
            <Link to="/" className=" text-neutral hover:text-dark transition">
              Beranda
            </Link>
            <span className=" text-neutral px-2"> / </span>
            <span className=" text-dark font-bold">Layanan</span>
          </div>
        </Container>
      </div>

      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className=" w-[366px]">
            <div className=" flex">
              <p className=" text-xs font-semibold bg-near text-secnear py-1 px-5 rounded-full">
                LAYANAN KAMI
              </p>
            </div>
            <div>
              <p className=" text-4xl font-semibold">
                Solusi Perizinan Lingkungan Terpadu
              </p>
            </div>
            <div>
              <p className=" text-xs text-neutral mt-2">
                Dari kajian AMDAL hingga sistem pengendalian emisi — kami
                mendampingi setiap tahap perizinan lingkungan usaha Anda.
              </p>
            </div>
            <div className=" pt-5">
              <a
                href="#"
                className=" w-fit flex items-center gap-1 text-xs py-3 px-6 bg-primary rounded-md hover:bg-orange-500 transition-colors"
              >
                <p className=" font-semibold">Konsultasi</p>
                <MoveRight size={15} />
              </a>
            </div>
          </div>
          <div>
            <img
              src="/assets/images/layanan-hero-image.png"
              alt="about page image"
              className=" w-full h-[400px] object-top object-cover rounded-lg"
            />
          </div>
        </div>
      </Container>

      <div className=" bg-light py-10 my-20">
        <Container>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            <div>
              <img
                src="/assets/images/about-page-image.png"
                alt="layanan-image"
                className=" w-full h-[420px] object-center object-cover rounded-lg"
              />
            </div>
            <div className=" pt-2">
              <p className=" font-bold text-xs text-neutral">
                PROFIL PERUSAHAAN
              </p>
              <div className=" text-3xl font-semibold text-dark pt-2">
                <p>Siapa Kami &</p>
                <p>Apa Yang Kami Yakini</p>
              </div>
              <p className=" w-[351px] md:w-[429px] text-sm text-dark pt-2">
                PT Matoa Envicon adalah konsultan lingkungan yang membantu
                pelaku usaha & instansi memenuhi kewajiban perizinan lingkungan
                dari kajian teknis hingga pengurusan izin resmi, dengan standar
                mutu & kepatuhan regulasi yang tinggi.
              </p>

              <div className=" bg-white px-8 py-6 rounded-lg border border-secondary mt-6">
                <div>
                  <p className=" text-sm font-semibold">Visi</p>
                  <p className=" text-xs text-neutral">
                    Menjadi konsultan lingkungan terdepan & terpercaya di
                    Indonesia.
                  </p>
                </div>

                <div className=" h-0.5 w-full bg-near my-3"></div>

                <div>
                  <p className=" text-sm font-semibold">Nilai Kami</p>
                  <div className=" flex flex-wrap items-center gap-4">
                    {ourValues.map((item, i) => (
                      <div
                        className=" bg-near text-secnear font-semibold py-1 px-3 rounded-full text-xs mt-2"
                        key={i}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className=" mb-20">
        <Container>
          <div className=" text-center mb-5">
            <span className="mb-2 block text-[10px] font-semibold tracking-[0.15em] text-neutral">
              CAKUPAN LAYANAN
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
              Detail Layanan Kami
            </h2>

            <p className=" text-sm text-neutral pt-2">
              Tujuh layanan inti untuk mendukung kepatuhan lingkungan usaha Anda
            </p>
          </div>
        </Container>

        <ProductSection />
      </div>

      <div className=" bg-light py-10">
        <Container>
          <ConsulForm />
        </Container>
      </div>
    </div>
  );
}
