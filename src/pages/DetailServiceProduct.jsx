import { Link } from "react-router-dom";
import Container from "../components/Container";
import {
  Ambulance,
  Calculator,
  Camera,
  Earth,
  Key,
  Locate,
} from "lucide-react";
import ConsulForm from "../components/ServicePage/ConsulForm";

const explainProduct = [
  {
    icon: <Earth size={24} />,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only.",
  },
  {
    icon: <Camera size={24} />,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  },
  {
    icon: <Calculator size={24} />,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    icon: <Key size={24} />,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.",
  },
  {
    icon: <Locate size={24} />,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    icon: <Ambulance size={24} />,
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.",
  },
];

export default function DetailServiceProduct() {
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
              to="/service"
              className=" text-neutral hover:text-dark transition"
            >
              Layanan
            </Link>
            <span className=" text-neutral px-2"> / </span>
            <Link
              to="/service/service-name"
              className=" text-neutral hover:text-dark transition"
            >
              AMDAL
            </Link>
            <span className=" text-neutral px-2"> / </span>
            <span className=" text-dark font-bold">detail product</span>
          </div>

          <div></div>
        </Container>
      </div>

      <Container>
        <div className="py-10">
          <h3 className="text-2xl md:text-5xl font-bold max-w-3xl mx-auto text-center text-dark">
            Empowering Homes And Business With Sustainable Energy
          </h3>
          <p className=" text-neutral mt-4 text-center md:text-base text-xs">
            We deliver reliable, efficient, and future-ready solar solutions
            that help communities reduce energy cost and create a cleaner
            tomorrow.
          </p>

          <img
            src="/assets/images/hero-image-amdal.png"
            alt="image-detail-product"
            className=" w-full mt-10 rounded-3xl h-[200px] md:h-[400px] object-cover"
          />

          <div className=" grid grid-cols-2 md:grid-cols-4 gap-10 mt-10">
            <div className=" text-center">
              <p className=" font-semibold text-2xl md:text-4xl text-dark">
                1,200+
              </p>
              <p className=" text-neutral text-sm md:text-base">
                Successful Projects
              </p>
            </div>
            <div className=" text-center">
              <p className=" font-semibold text-2xl md:text-4xl text-dark">
                500+
              </p>
              <p className=" text-neutral text-sm md:text-base">
                Happy Customers
              </p>
            </div>
            <div className=" text-center">
              <p className=" font-semibold text-2xl md:text-4xl text-dark">
                24/7
              </p>
              <p className=" text-neutral text-sm md:text-base">Support</p>
            </div>
            <div className=" text-center">
              <p className=" font-semibold text-2xl md:text-4xl text-dark">
                10+
              </p>
              <p className=" text-neutral text-sm md:text-base">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 py-14">
          {explainProduct.map((item, index) => (
            <div
              key={index}
              className=" border bg-light hover:border-neutral border-white transition duration-300 rounded-xl p-3"
            >
              <div className=" border border-secnear w-fit p-2 rounded-lg">
                {item.icon}
              </div>

              <h2 className=" text-dark font-semibold mt-10 text-3xl">
                {item.title}
              </h2>
              <p className=" text-neutral text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className=" pb-10">
          <h3 className=" text-2xl font-semibold">
            Portfolio of projects we have completed for this product
          </h3>

          <div className=" mt-4 flex md:flex-row flex-col gap-5">
            <img
              src="/assets/images/cover-document-1.png"
              alt="cover-document-1"
              className=" w-[150px] rounded-lg hover:scale-105 transition duration-300"
            />
            <img
              src="/assets/images/cover-document-2.png"
              alt="cover-document-1"
              className=" w-[150px] rounded-lg hover:scale-105 transition duration-300"
            />
            <img
              src="/assets/images/cover-document-3.png"
              alt="cover-document-1"
              className=" w-[150px] rounded-lg hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </Container>

      <div className=" bg-light py-10">
        <ConsulForm />
      </div>
    </div>
  );
}
