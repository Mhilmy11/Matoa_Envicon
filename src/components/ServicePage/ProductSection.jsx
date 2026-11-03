import { MoveRight } from "lucide-react";
import Container from "../Container";
import { Link } from "react-router-dom";

const ourService = [
  {
    image: "/assets/images/service-image-1.png",
    title: "AMDAL",
    desc: "PT Matoa Envicon adalah konsultan lingkungan yang membantu pelaku usaha & instansi memenuhi kewajiban perizinan lingkungan dari kajian teknis hingga pengurusan izin resmi,",
  },
  {
    image: "/assets/images/service-image-2.png",
    title: "UKL-UPL",
    desc: "PT Matoa Envicon adalah konsultan lingkungan yang membantu pelaku usaha & instansi memenuhi kewajiban perizinan lingkungan dari kajian teknis hingga pengurusan izin resmi,",
  },
  {
    image: "/assets/images/service-image-3.png",
    title: "Pertek (Emisi/BMAL/Rintek TPS LB3)",
    desc: "PT Matoa Envicon adalah konsultan lingkungan yang membantu pelaku usaha & instansi memenuhi kewajiban perizinan lingkungan dari kajian teknis hingga pengurusan izin resmi,",
  },
];

export default function ProductSection() {
  return (
    <Container>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {ourService.map((item, i) => (
          <div key={i} className="bg-near p-4 rounded-lg flex flex-col h-full">
            <img
              className="w-full h-[150px] rounded-lg object-cover object-center"
              src={item.image}
              alt={item.title}
            />

            <div className=" flex flex-col flex-1">
              <h1 className="font-semibold py-2">{item.title}</h1>

              <p className="text-neutral text-xs leading-relaxed line-clamp-3">
                {item.desc}
              </p>

              <Link
                to="/serviceproducts/servicename"
                className="flex items-center gap-1 text-sm font-semibold hover:underline mt-auto pt-8 w-fit"
              >
                <span>Pelajari Lebih Lanjut</span>
                <MoveRight size={15} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
