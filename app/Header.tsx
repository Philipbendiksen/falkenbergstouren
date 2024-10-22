import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-primary  p-2 flex flex-col md:flex-row items-center justify-between mx-auto rounded-lg shadow-lg">
      {/* Rubrik */}
      <Link href="/">
        <h1 className=" md:ml-12 text-2xl cursor-pointer text-center mb-2 md:mb-0">
          FalkenbergsTouren
        </h1>
      </Link>

      {/* Menyn */}
      <ul className="flex justify-center space-x-10 md:mr-16">
        <Link href="/resultat">
          <li className="cursor-pointer">Resultat</li>
        </Link>
        <Link href="/info">
          <li className="cursor-pointer">Info</li>
        </Link>
        <Link href="/bilder">
          <li className="cursor-pointer">Bilder</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
