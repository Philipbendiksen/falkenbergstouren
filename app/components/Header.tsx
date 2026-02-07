"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useSelectedLayoutSegment } from "next/navigation";

const Header = () => {
  const segment = useSelectedLayoutSegment(); // Hämta aktuell layout-segment

  const [arkivOpen, setArkivOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-primary md:h-20 p-2 flex flex-col md:flex-row text-center justify-between items-center shadow-lg">
      {/* Flex-container för rubrik och bild */}
      <div className="flex items-center md:ml-12 m-4">
        {/* Rubrik */}
        <Link href="/">
          <h1 className="text-2xl md:text-3xl cursor-pointer mb-3 md:mb-0">
            Tour de Falkenberg
          </h1>
        </Link>

        {/* Bild */}
        <Link href="/fbginfo">
          <Image
            src="/images/fbgLoggaNed.jpg"
            alt="Mountain bike"
            width={100} // Ange bildens bredd
            height={100} // Ange bildens höjd
            className="w-16 h-20 ml-4"
          />
        </Link>
      </div>
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

        <li
          className={`relative cursor-pointer transition-all ${
            pathname?.startsWith("/arkiv") ? "border-b-2 border-black" : ""
          }`}
          onMouseLeave={() => setArkivOpen(false)}
          onClick={() => setArkivOpen(!arkivOpen)}
          onMouseEnter={() => setArkivOpen(true)}
        >
          Arkiv
          <ul
            className={`absolute left-1/2 -translate-x-1/2 top-full bg-white shadow-xl rounded-lg py-3 w-28 z-10 flex flex-col border border-gray-200 transition-all duration-200 ${
              arkivOpen
                ? "opacity-100 bg-secondary visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <Link href="/arkiv/5kmDam" onClick={() => setArkivOpen(false)}>
              <li className="cursor-pointer px-6 py-2 hover:bg-gray-100 transition-colors text-gray-700 hover:text-black rounded-md mx-2">
                2025
              </li>
            </Link>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
