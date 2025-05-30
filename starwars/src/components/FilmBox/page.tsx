import { Film } from "@/types/Film";
import formatDate from "@/util/conversions/dateConversion";

interface FilmsPageProps {
  films: Film[];
}

const FilmBox = (props: FilmsPageProps) => {
  const filmes = props.films;
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filmes.map((filme, indice) => (
          <div
            className="bg-[#ffe81f] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
            key={indice}
          >
            <h2 className="text-xl font-bold text-black mb-2">{filme.title}</h2>
            <p className="text-black text-sm mb-4 line-clamp-4">
              {filme.opening_crawl}
            </p>
            <div className="text-black text-sm mt-auto">
              <p>
                <span className="font-semibold">Diretor:</span> {filme.director}
              </p>
              <p>
                <span className="font-semibold">Lançamento:</span>{" "}
                {formatDate(filme.release_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilmBox;
