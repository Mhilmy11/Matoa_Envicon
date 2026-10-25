import { ArrowRight } from "lucide-react";
import Container from "../components/Container";
import Hero from "../components/LandingPage/Hero";
import Client from "../components/LandingPage/Client";
import About from "../components/LandingPage/About";
import ArticleCard from "../components/LandingPage/ArticleCard";

export default function LandingPage() {
  return (
    <>
      <div>
        <Hero />
      </div>

      <Container>
        <div className=" py-12">
          <h3 className=" font-semibold text-xs text-neutral text-center">
            DIPERCAYAI OLEH PERIUSAHAAN & INSTANSI
          </h3>
          <Client />
        </div>
      </Container>

      <div className=" bg-light">
        <Container>
          <About />
        </Container>
      </div>

      <Container>
        <div className=" py-12">
          <h3 className=" font-semibold text-2xl md:text-3xl">Artikel</h3>
          <ArticleCard />
        </div>
      </Container>

      <div className=" bg-secondary py-4">
        <div className=" flex justify-center">
          <div className=" text-center">
            <p className=" font-semibold text-4xl">Siap Memulai Proyek Anda?</p>
            <p className=" text-xs text-neutral pt-2">
              Konsultasikan Kebutuhan Anda bersama tim kami
            </p>

            <div className=" w-full flex justify-center pt-8">
              <button className=" bg-primary font-semibold flex items-center px-7 py-3">
                Konsultasi Sekarang <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
