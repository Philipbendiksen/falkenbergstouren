"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Results = () => {
  const segment = useSelectedLayoutSegment(); // Hämta aktuell layout-segment

  return (
    <div className=" bg-primary flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Här kommer resultaten
      </h1>

      {/* Menyn */}
      <nav>
        <ul className="flex flex-wrap justify-center gap-6 md:gap-12 text-lg font-medium text-gray-700">
          <li>
            <Link
              href="/resultat/5kmDam"
              className={`hover:text-black transition ${
                segment === "5kmDam" ? "border-b-2 border-black" : ""
              }`}
            >
              Dam 5km
            </Link>
          </li>
          <li>
            <Link
              href="/resultat/5kmHerr"
              className={`hover:text-black transition ${
                segment === "5kmHerr" ? "border-b-2 border-black" : ""
              }`}
            >
              Herr 5km
            </Link>
          </li>
          <li>
            <Link
              href="/resultat/10kmHerr"
              className={`hover:text-black transition ${
                segment === "10kmHerr" ? "border-b-2 border-black" : ""
              }`}
            >
              Herr 10km
            </Link>
          </li>
          <li>
            <Link
              href="/resultat/10kmDam"
              className={`hover:text-black transition ${
                segment === "10kmDam" ? "border-b-2 border-black" : ""
              }`}
            >
              Dam 10km
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Results;
