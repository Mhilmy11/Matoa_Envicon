import { ArrowRight } from "lucide-react";

const Article = [
  {
    image: "assets/articles/article-image-1.png",
    articleType: "AMDAL",
    title: "Analisis Dampak Lingkungan",
    date: "12 January 2024",
  },
  {
    image: "assets/articles/article-image-2.png",
    articleType: "UKL-UPL",
    title: "Upaya Pengelolaan Lingkungan",
    date: "12 January 2024",
  },
  {
    image: "assets/articles/article-image-3.png",
    articleType: "SPPL",
    title: "Surat Pernyataan Kesanggupan",
    date: "12 January 2024",
  },
];

export default function ArticleCard() {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
        {Article.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-h-24 object-cover rounded-t-md"
            />
            <div className="mt-1 p-4">
              <span className="bg-secondary text-dark text-xs font-semibold px-5 py-1 rounded-full">
                {item.articleType}
              </span>
              <h3 className="text-lg font-bold mt-2">{item.title}</h3>
              <p className="text-neutral mt-1 text-xs">{item.date}</p>
            </div>

            <div className="flex justify-center p-4">
              <a
                href="/articles"
                className=" flex items-center gap-1 bg-primary text-sm font-semibold rounded-md px-10 py-2"
              >
                <p>Baca Artikel</p>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex justify-center">
        <a
          href="/articles"
          className=" flex items-center gap-1 border text-sm font-semibold rounded-md px-6 py-3 mt-5 hover:bg-primary hover:text-white transition-colors duration-300"
        >
          <p>Artikel Selengkapnya</p> <ArrowRight size={12} />
        </a>
      </div>
    </>
  );
}
