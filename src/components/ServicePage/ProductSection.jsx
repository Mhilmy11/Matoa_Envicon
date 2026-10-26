import { MoveRight } from "lucide-react";
import Container from "../Container";
import { Link } from "react-router-dom";

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

            <Link
              to="/serviceproducts/detail-service"
              className=" flex items-center gap-1 text-sm font-semibold hover:underline mt-10 w-fit"
            >
              <p>Pelajari Lebih Lanjut</p>
              <MoveRight size={15} />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
