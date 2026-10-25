import { MoveRight } from "lucide-react";
import Container from "../Container";

const ourService = [
  {
    image: "/assets/images/service-image-1.png",
    title: "AMDAL",
    desc: "Lorem Ipsum",
  },
  {
    image: "/assets/images/service-image-2.png",
    title: "UKL-UPL",
    desc: "Lorem Ipsum",
  },
  {
    image: "/assets/images/service-image-3.png",
    title: "Pertek (Emisi/BMAL/Rintek TPS LB3)",
    desc: "Lorem Ipsum",
  },
];

export default function ProductSection() {
  return (
    <Container>
      <div className=" text-center mb-10">
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

      <div className=" pt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {ourService.map((item, i) => (
          <div key={i} className=" bg-near p-4 rounded-lg">
            <img
              className=" w-full h-[150px] rounded-lg object-cover object-center"
              src={item.image}
              alt={item.title}
            />
            <h1 className=" font-semibold py-2">{item.title}</h1>
            <p className=" text-neutral text-xs">{item.desc}</p>

            <a
              href="#"
              className=" flex items-center gap-1 text-sm font-semibold hover:underline mt-10 w-fit"
            >
              <p>Pelajari Lebih Lanjut</p>
              <MoveRight size={15} />
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}
