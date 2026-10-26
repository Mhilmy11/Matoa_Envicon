import { Link } from "react-router-dom";
import Container from "../components/Container";
import { MoveRight } from "lucide-react";
import ProductSection from "../components/ServicePage/ProductSection";
import ConsulForm from "../components/ServicePage/ConsulForm";

export default function DetailServicePage() {
  return (
    <div>
      <div className=" bg-light py-4 mb-5">
        <Container>
          <div className=" text-xs">
            <Link to="/" className=" text-neutral hover:text-dark transition">
              Beranda
            </Link>
            <span className=" text-neutral px-2"> / </span>
            <Link
              to="/serviceproducts"
              className=" text-neutral hover:text-dark transition"
            >
              Layanan
            </Link>
            <span className=" text-neutral px-2"> / </span>
            <span className=" text-dark font-bold">AMDAL</span>
          </div>
        </Container>
      </div>

      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className=" w-[356px] md:w-[396px]">
            <div className=" flex">
              <p className=" text-xxs font-semibold bg-near text-secnear py-1 px-5 rounded-full">
                DETAIL LAYANAN
              </p>
            </div>
            <div>
              <p className=" text-4xl font-semibold">AMDAL</p>
              <p className=" text-lg font-semibold mt-2">Apa itu AMDAL?</p>
            </div>
            <div>
              <p className=" text-xs text-neutral mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since 1966, when designers at Letraset and James
                Mosley, the librarian at St Bride Printing Library in London,
                took a 1914 Cicero translation and scrambled it to make dummy
                text for Letraset's Body Type sheets. It has survived not only
                many decades, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised thanks to
                these sheets and more recently with desktop publishing software
                like Aldus PageMaker and Microsoft Word including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className=" mt-8">
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

      <div className=" my-10">
        <Container>
          <div className=" text-center">
            <span className="mb-2 block text-[10px] font-semibold tracking-[0.15em] text-neutral">
              JELAJAHI LAYANAN LAIN
            </span>

            <h2 className="text-2xl font-semibold tracking-tight text-dark sm:text-3xl">
              Layanan Lainnya
            </h2>
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
