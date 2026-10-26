import { Link } from "react-router-dom";
import Container from "../components/Container";
import ArticleCard from "../components/ArticlePage/ArticleCard";

export default function DetailArticlePage() {
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
              to="/article"
              className=" text-neutral hover:text-dark transition"
            >
              Artikel
            </Link>
            <span className=" text-neutral px-2"> / </span>
            <span className=" text-dark font-bold">Panduan AMDAL 2026</span>
          </div>
        </Container>
      </div>

      <div className=" max-w-[320px] md:max-w-[840px] mx-auto">
        <div className=" my-20">
          <h1 className=" text-xl md:text-4xl font-semibold">
            Panduan Lengkap Pengurusan AMDAL 2026
          </h1>

          <div className=" text-neutral space-y-0.5 md:mt-8 mt-4 md:text-xs text-xxs">
            <p>Tim Matoa Envicon</p>
            <p>18 Agustus 2026</p>
          </div>

          <div className=" py-0 md:py-4">
            <img
              src="/assets/images/detail-article-image.png"
              alt="detail-article-image"
              className=" w-full h-[400px] object-cover"
            />
          </div>

          <div className=" space-y-8 text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
              tellus ullamcorper, scelerisque libero in, bibendum neque. Proin
              elementum, tortor vitae cursus semper, leo arcu rutrum libero,
              vitae iaculis urna lacus ac nibh. In eget dictum ligula. Curabitur
              a nisl id elit tristique dictum. Ut a ante a nulla fringilla
              feugiat vel non nunc. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Praesent sem felis, hendrerit ut nibh in,
              placerat ullamcorper purus. Nulla id posuere nulla, non feugiat
              mauris. Fusce porta blandit velit. Duis blandit ex vitae augue
              egestas, id lobortis dolor viverra. Pellentesque ac elit in risus
              finibus egestas. Aenean condimentum eu tortor eget finibus.
            </p>

            <p>
              Curabitur ornare maximus ex eget commodo. Donec non pulvinar
              neque, non suscipit massa. Vestibulum tristique ligula tellus,
              eget maximus eros lacinia vel. Mauris pulvinar sit amet ex ac
              accumsan. Nullam aliquam odio odio, auctor tempor diam laoreet
              nec. Morbi nec sagittis neque. Aenean at maximus nibh. Ut ex
              velit, lobortis non fringilla non, iaculis hendrerit nisl. Aliquam
              erat volutpat.
            </p>

            <p>
              Aliquam leo arcu, facilisis ac lectus vitae, commodo sodales
              lacus. Suspendisse viverra massa a sapien suscipit, ac elementum
              justo ultricies. Aliquam rhoncus, dolor aliquam rhoncus ultrices,
              metus nulla mattis velit, at placerat lacus sem sed erat. Nulla
              egestas nec arcu quis vestibulum. Sed in ornare nisi. Sed lobortis
              tempor consequat. Nam facilisis dignissim magna, non ultrices diam
              varius non. Pellentesque bibendum quam in nibh pharetra dapibus.
              Aenean et mauris massa. Phasellus aliquet congue nibh. Praesent
              sed sem faucibus, pretium sem sit amet, congue nisl. Nullam justo
              ligula, lobortis at cursus vel, tincidunt et arcu. Sed mattis
              tincidunt venenatis. Curabitur vel magna id dui facilisis aliquam
              nec non mi. Morbi tellus nunc, aliquam eget purus sit amet,
              venenatis aliquam purus. Vestibulum ullamcorper rhoncus felis,
              aliquam luctus lacus.
            </p>

            <p>
              Aliquam sollicitudin sodales metus, eget pulvinar sem consequat
              vitae. Cras tempus velit odio, vel porta nibh condimentum a. Etiam
              varius nibh at odio sollicitudin imperdiet. Nam viverra quam quis
              odio imperdiet hendrerit. Phasellus eleifend mi euismod libero
              blandit dignissim. Aenean lacinia odio purus, et rutrum velit
              lacinia nec. Nam suscipit laoreet tristique. Nam vestibulum augue
              nunc, non porta est lacinia nec. Quisque feugiat luctus luctus.
              Nunc suscipit mollis augue ac pellentesque. Sed suscipit orci
              tempor enim condimentum, sed rhoncus urna sagittis. Sed eu urna
              cursus, pellentesque nunc vel, hendrerit libero. Duis scelerisque
              magna metus, vel accumsan mauris volutpat nec. Nulla aliquam, arcu
              accumsan suscipit mollis, ex ligula pharetra lacus, nec bibendum
              nunc enim vitae sapien.
            </p>

            <p>
              Duis tincidunt est purus, volutpat placerat dui tristique sit
              amet. Nullam neque est, congue a nisi at, mattis pharetra lacus.
              Curabitur condimentum urna sit amet magna dictum, in malesuada
              diam lacinia. Proin pharetra dignissim leo, ac viverra enim
              laoreet ut. Aenean elementum condimentum nulla, imperdiet pulvinar
              erat malesuada nec. Cras sed massa nunc. Nam pharetra gravida
              vestibulum. Nunc eu nulla tellus.
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-light py-10">
        <Container>
          <h3 className=" font-semibold text-xl md:text-3xl mb-10">
            Artikel Lainnya
          </h3>
          <ArticleCard />
        </Container>
      </div>
    </div>
  );
}
