import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="p-2">
        <Image
          width={100}
          height={100}
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
        />
      </div>
    </Link>
  );
};

export default Logo;
