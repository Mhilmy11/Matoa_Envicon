import { Link } from "react-router-dom";
import Container from "../components/Container";
import { MoveRight } from "lucide-react";
import ArticleCard from "../components/ArticlePage/ArticleCard";

export default function ArticlePage() {
  return (
    <div>
      <div className=" bg-light py-4 mb-5">
        <Container>
          <div className=" text-xs">
            <Link to="/" className=" text-neutral hover:text-dark transition">
              Beranda
            </Link>
            <span className=" text-neutral px-2"> / </span>
            <span className=" text-dark font-bold">Artikel</span>
          </div>
        </Container>
      </div>

      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className=" w-[366px]">
            <div className=" flex">
              <p className=" text-xs font-semibold bg-near text-secnear py-1 px-5 rounded-full">
                ARTIKEL
              </p>
            </div>
            <div>
              <p className=" text-4xl font-semibold">Articles &</p>
              <p className=" text-4xl font-semibold">Insights</p>
            </div>
            <div>
              <p className=" text-xs text-neutral mt-4 max-w-xs">
                Wawasan seputar regulasi, tren, & praktik terbaik pengelolaan
                lingkungan di Indonesia.
              </p>
            </div>
          </div>

          <div>
            <div className=" bg-dark pb-2 pt-8 px-8 rounded-lg">
              <h3 className=" text-xl font-semibold text-white mb-4">
                Wanna be Our Writer?
              </h3>

              <p className=" text-xs text-near max-w-xs">
                Punya wawasan atau pengalaman seputar lingkungan & perizinan?
                Kirimkan tulisanmu dan jadi bagian dari komunitas penulis kami.
              </p>

              <form action="" className=" space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Write here ..."
                    className="mt-3 w-full rounded-sm border border-neutral bg-white px-4 py-2 text-sm text-black outline-none transition placeholder:text-neutral focus:border-secondary focus:ring-1 focus:ring-secondary"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className=" bg-primary hover:bg-orange-400 transition px-5 py-2 rounded-md flex items-center font-semibold gap-1 mt-4"
                  >
                    writings@matoaenvicon.co.id <MoveRight size={15} />
                  </button>
                </div>
              </form>

              <p className=" text-xs text-near mt-6">
                Kirim email tulisanmu ke alamat di atas
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className=" bg-light py-10">
        <Container>
          <h3 className=" font-semibold text-xl md:text-3xl mb-10">
            Artikel terbaru
          </h3>
          <ArticleCard />
        </Container>
      </div>
    </div>
  );
}
