import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 8);


  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTtile="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
}; 

export default Page;
