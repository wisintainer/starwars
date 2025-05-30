import FilmBox from "@/components/FilmBox/page";
import Footer from "@/components/Footer/page";
import { Film } from "@/types/Film";
import { fetchData } from "@/util/api/api";
import Topo from "@/widgets/Topo";

const Page = async () => {
  const filmes: Film[] = await fetchData();

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white text-center">
      <header>
        <Topo />
      </header>

      <main>
        <div>
          <FilmBox films={filmes} />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Page;
