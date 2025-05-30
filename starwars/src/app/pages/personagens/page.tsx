import Footer from "@/components/Footer/page";
import PeopleBox from "@/components/PeopleBox/page";
import { People } from "@/types/People";
import { fetchPeople } from "@/util/api/api";
import Topo from "@/widgets/Topo";

const Page = async () => {
  const people: People[] = await fetchPeople();

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white text-center">
      <header>
        <Topo />
      </header>

      <main>
        <div>
          <PeopleBox people={people} />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Page;
