import Link from "next/link";

const Menu = () => {
  return (
    <div className="w-full">
      <ul className="flex gap-2 font-semibold">
        <Link href="/">
          <li className="hover-texto">Home</li>
        </Link>
        <li>-</li>
        <Link href="/pages/filmes">
          <li className="hover-texto">Filmes</li>
        </Link>
        <li>-</li>
        <Link href="/pages/personagens">
          <li className="hover-texto">Personagens</li>
        </Link>
      </ul>
    </div>
  );
};
export default Menu;
