import { People } from "@/types/People";
import formatDate from "@/util/conversions/dateConversion";

interface PeopleBoxProps {
  people: People[];
}

const PeopleBox = ({ people }: PeopleBoxProps) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {people.map((p, index) => (
          <div
            className="bg-[#ffe81f] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col"
            key={index}
          >
            <h2 className="text-xl font-bold text-black mb-2">{p.name}</h2>
            <p className="text-black text-sm mb-4 line-clamp-4">
              {p.name} nasceu em {p.birth_year} e tem {p.height} cm de altura.
            </p>
            <div className="text-black text-sm mt-auto">
              <p>
                <span className="font-semibold">Gênero:</span> {p.gender}
              </p>
              <p>
                <span className="font-semibold">Cor da pele:</span>{" "}
                {p.skin_color}
              </p>
              <p>
                <span className="font-semibold">Cor do cabelo:</span>{" "}
                {p.hair_color}
              </p>
              <p>
                <span className="font-semibold">Cor dos olhos:</span>{" "}
                {p.eye_color}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleBox;
