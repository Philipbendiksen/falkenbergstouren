import Image from "next/image";

export default function FBGInfo() {
  return (
    <div className="text-center px-4 md:px-16 lg:px-32  bg-secondary">
      <h1 className="text-4xl pt-8 font-proxima font-black mb-8 text-gray-800">
        VÄLKOMMEN TILL FALKENBERG
      </h1>
      <p className="text-xl text-gray-600 mb-6 font-proxima font-regular">
        Upptäck vad Falkenberg har att erbjuda – från vackra kuster till
        fantastisk mat och natur!
      </p>

      <div className="text-left space-y-8">
        <section className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4 text-blue-800 font-proxima font-bold">
            Hav / Kust / Strand
          </h2>
          <p className="text-gray-700 font-baskerville leading-relaxed">
            I Falkenberg lever du sida vid sida med havet. Januari eller juli
            spelar ingen roll. Havet fascinerar alltid. Stanna till för ett
            uppfriskande dopp på väg hem från jobbet den där första sommardagen.
            Ta en promenad längs skummande vågor en blåsig höstdag. Föredrar du
            ett fartfyllt äventyr på kitebrädan eller totalt lugn i solstolen?
            Du behöver inte välja. Livet vid havet bjuder på storslagna
            upplevelser året om.
          </p>
        </section>

        <div>
          <Image
            src="/images/Bada.jpg"
            alt="Tullbron i Falkenberg"
            width={800}
            height={600}
            className="w-full mt-6 md:w-3/4 m-auto h-auto rounded-lg shadow-lg object-cover object-center"
          />
          <p className="text-gray-500 m-4 text-sm mt-2"></p>
        </div>

        <section className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl mb-4 text-green-800 font-proxima font-bold">
            Natur
          </h2>
          <p className="text-gray-700 font-baskerville leading-relaxed">
            Lämna trängsel och stress bakom dig och ge dig ut i naturen, känn
            friheten och få ro i kroppen. I Falkenberg finns en sandig
            kuststräcka med salta vindar och doften av tång. Men också djupa och
            trolska skogar som ruvar på hemligheter. Oavsett om du vill
            promenera längs en brusande fors, pröva fiskelyckan, cykla utmed
            havet eller bara ha picknick i en skogsglänta så står Falkenbergs
            fantastiska natur öppen för dig.
          </p>
        </section>

        <div>
          <Image
            src="/images/Morup.jpg"
            alt="Tullbron i Falkenberg"
            width={800}
            height={600}
            className="w-full mt-6  md:w-3/4 m-auto h-72  rounded-lg shadow-lg object-cover object-center"
          />
          <p className="text-gray-500 m-4 text-sm mt-2"></p>
        </div>

        <section className="bg-yellow-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl  mb-4 text-yellow-800 font-proxima font-bold">
            Mat
          </h2>
          <p className="text-gray-700 font-baskerville leading-relaxed">
            Falkenberg finns naturens skafferi – i havet, på de böljande fälten
            och i de stora skogarna. Här finns matentreprenörer som testar
            gränser och inspirerar till att upptäcka nya smaker på oväntade
            platser. I Falkenberg får maten ta plats och här finns utrymme för
            dig att utmana dina smaklökar.
          </p>
        </section>

        <div>
          <Image
            src="/images/Napoli.jpg"
            alt="Tullbron i Falkenberg"
            width={800}
            height={600}
            className="w-full md:w-3/4 mt-6 m-auto h-auto rounded-lg shadow-lg object-cover object-center"
          />
          <p className="text-gray-500 m-4 text-sm mt-2"></p>
        </div>

        <section className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-proxima font-bold mb-4 text-purple-800">
            Närhet
          </h2>
          <p className="text-gray-700 font-baskerville leading-relaxed">
            I Falkenberg är livet nära. Säg hej till fem minuter till skolan
            eller fem minuter till tåget som tar dig hundra mil genom Europa.
            Säg hej då till långa köer till barnens fritidsaktiviteter eller
            timmar med kollektivtrafik till naturen. I Falkenberg är livet lite
            enklare och du får mer tid till det som finns bortom måsten.
          </p>
        </section>
      </div>

      <div>
        <Image
          src="/images/Tullbron.jpg"
          alt="Tullbron i Falkenberg"
          width={800}
          height={600}
          className="w-full md:w-3/4 mt-6 m-auto h-auto rounded-lg shadow-lg object-cover object-center"
        />
        <p className="text-gray-500 font-baskerville pb-6 text-sm mt-4">
          Tullbron – En ikonisk plats i Falkenberg.
        </p>
      </div>
    </div>
  );
}
