import Conteudo from "@/components/ConteudoInicial/page";
import Footer from "@/components/Footer/page";
import Topo from "@/widgets/Topo";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-black text-white text-center">
      <header>
        <Topo />
      </header>

      <main className="p-2">
        <Conteudo />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
