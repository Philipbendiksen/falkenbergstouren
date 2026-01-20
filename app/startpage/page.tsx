import Image from "next/image";
import Link from "next/link";
import Sponsors from "../components/Sponsors";
import ContactForm from "../components/contactform";

export default function Home() {
  return (
    <main className="bg-primary">
      <section className="relative">
        <Image
          src="/images/Stadslopp.jpg"
          alt="Mountain bike"
          width={800} // Ange bildens bredd
          height={600} // Ange bildens höjd
          className="w-full md:h-96 object-cover object-center"
        />
        <article className="bg-secondary/60 font-georgia p-6 rounded-lg lg:mr-10 lg:absolute top-40 lg:left-1/2">
          <p>
            Falkenberg har ett flertalet lopp av olika karaktär runt om i
            kommunen. Hade det inte varit roligt om alla dem samarbetade med
            varandra? Efter förra årets stora framgång med Tour de Falkenberg så
            har vi valt att även 2026 fortsätta med touren. Vill du återigen
            vara med och uppleva hela Falkenbergs kommun genom några av de
            finaste loppen i södra Sverige så tveka inte att anmäla dig så ses
            vi även 2026.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <div className="bg-secondary p-4 rounded-lg text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
            <Link
              href="https://krogseredsik.se/krogsereds-trailrun-2025/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/KrogseredsTrailRUN2025.jpg"
                  alt="Krogsered"
                  width={400} // Ange bildens bredd
                  height={400} // Ange bildens höjd
                  className="rounded-lg min-h-64"
                />
                <span className="mt-2 font-georgia">Krogsered trailrun</span>
              </div>
            </Link>

            <Link
              href="https://raceid.com/sv/races/12999/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/hallandsloppet.jpg"
                  alt="Hallandsloppet"
                  width={400} // Ange bildens bredd
                  height={400} // Ange bildens höjd
                  className="rounded-lg max-h-64"
                />
                <span className="mt-2 font-georgia">Hallandsloppet</span>
              </div>
            </Link>

            <Link
              href="https://www.falkenbergsstadslopp.se/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/Stadslopp.jpg"
                  alt="Falkenbergs Stadslopp"
                  width={400} // Ange bildens bredd
                  height={400} // Ange bildens höjd
                  className="rounded-lg max-h-64"
                />
                <span className="mt-2 font-georgia">Falkenbergs Stadslopp</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="bg-secondary p-4 rounded-lg text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
            <Link
              href="https://halloweenloppet.fok.se/?page_id=54"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/Halloweenloppet 2025 ny.jpg"
                  alt="Halloweenloppet"
                  width={400} // Ange bildens bredd`
                  height={400} // Ange bildens höjd
                  className="rounded-lg max-h-64"
                />
                <span className="mt-2 font-georgia">Halloweenloppet</span>
              </div>
            </Link>

            <Link
              href="https://www.facebook.com/FalkenbergAllstars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image
                  src="/images/FalkenbergsAllstars.jpg"
                  alt="Allstars"
                  width={400} // Ange bildens bredd
                  height={400} // Ange bildens höjd
                  className="rounded-lg max-h-64 min-h-64"
                />
                <span className="mt-2 font-georgia">Falktrailen</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Sponsors></Sponsors>

      <ContactForm></ContactForm>
    </main>
  );
}
