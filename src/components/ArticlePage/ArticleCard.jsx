import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const articleCard = [
  {
    image: "/assets/images/article-card-image.png",
    title: "Perbedaan AMDAL, UKL-UPL, dan SPPL",
    date: "14 Agustus 2026 ",
  },
  {
    image: "/assets/images/article-card-image.png",
    title: "Perbedaan AMDAL, UKL-UPL, dan SPPL",
    date: "14 Agustus 2026 ",
  },
  {
    image: "/assets/images/article-card-image.png",
    title: "Perbedaan AMDAL, UKL-UPL, dan SPPL",
    date: "14 Agustus 2026 ",
  },
  {
    image: "/assets/images/article-card-image.png",
    title: "Perbedaan AMDAL, UKL-UPL, dan SPPL",
    date: "14 Agustus 2026 ",
  },
  {
    image: "/assets/images/article-card-image.png",
    title: "Perbedaan AMDAL, UKL-UPL, dan SPPL",
    date: "14 Agustus 2026 ",
  },
  {
    image: "/assets/images/article-card-image.png",
    title: "Perbedaan AMDAL, UKL-UPL, dan SPPL",
    date: "14 Agustus 2026 ",
  },
];

export default function ArticleCard() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
      {articleCard.map((item, i) => (
        <div
          key={i}
          className=" bg-white border border-near px-4 py-2 rounded-lg"
        >
          <div>
            <img
              src={item.image}
              alt={item.title}
              className=" h-[180px] object-cover object-top w-full"
            />
          </div>

          <div className=" pt-3 space-y-14">
            <h1 className=" text-sm font-semibold">{item.title}</h1>

            <div>
              <p className=" text-neutral text-xxs mb-1">{item.date}</p>
              <Link
                to="/article/detail-article"
                className=" text-sm flex items-center font-semibold gap-1 hover:underline"
              >
                Baca selengkapnya
                <MoveRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
