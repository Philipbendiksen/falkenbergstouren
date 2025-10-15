import Image from "next/image";
import Link from "next/link";
export default function sponspors() {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-10">
        Sponsorer
      </h1>
      <p className="text-base mb-10 md:text-lg text-center text-gray-700">
        Nedan presenteras våra sponsorer som är med och gör denna tour möjlig
      </p>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
          <Link
            href="https://jjsdack.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/JJ.jpg"
              alt="Allstars"
              width={250} // Ange bildens bredd
              height={250} // Ange bildens höjd
              className="rounded-lg max-h-64 max-w-52"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
          <Link href="/fbginfo ">
            <Image
              src="/images/FBGLogga.jpg"
              alt="Allstars"
              width={200} // Ange bildens bredd
              height={200} // Ange bildens höjd
              className="rounded-lg max-h-64 max-w-52"
            />
          </Link>
        </div>
        {/* <div className="flex flex-col items-center transition-transform duration-300 ease-in-out hover:scale-105">
          <Link href="https://www.vinbergslantmanna.se/ ">
            <Image
              src="/images/Vinbergs-Lantmanna_300x300.jpg"
              alt="Allstars"
              width={200} // Ange bildens bredd
              height={200} // Ange bildens höjd
              className="rounded-lg max-h-64 max-w-52"
            />
          </Link>
        </div> */}
      </section>
    </div>
  );
}
