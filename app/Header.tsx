"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const segment = useSelectedLayoutSegment(); // Hämta aktuell layout-segment

  return (
    <header className="bg-primary md:h-20 p-2 flex flex-col md:flex-row text-center justify-between items-center mx-auto rounded-lg shadow-lg">
      {/* Rubrik */}
      <Link href="/">
        <h1 className="md:ml-12 text-2xl md:text-4xl cursor-pointer mb-3 md:mb-0 mt-2">
          FalkenbergsTouren
        </h1>
      </Link>

      {/* Menyn */}
      <ul className="flex justify-center space-x-12 md:mr-16 mb-1">
        <Link href="/resultat">
          <li
            className={`cursor-pointer ${
              segment === "resultat" ? "border-b-2 border-black" : ""
            }`}
          >
            Resultat
          </li>
        </Link>
        <Link href="/info">
          <li
            className={`cursor-pointer ${
              segment === "info" ? "border-b-2 border-black" : ""
            }`}
          >
            Info
          </li>
        </Link>
        <Link href="/bilder">
          <li
            className={`cursor-pointer ${
              segment === "bilder" ? "border-b-2 border-black" : ""
            }`}
          >
            Bilder
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
