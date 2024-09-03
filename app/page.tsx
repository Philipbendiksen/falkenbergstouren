export default function Home() {
  return (
    <main className=" bg-primary">
      <header className="bg-primary p-2 flex items-center justify-between mx-auto rounded-lg shadow-lg">
        <img
          src="images/Final-logo-large.png"
          alt=""
          className="w-24 lg:ml-5 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out "
        />

        <img
          src="images/vit-text.png"
          alt=""
          className="w-52 md:w-72 lg:w-96 pt-6 flex items-center "
        />

        <img
          src="images/menu-kopiera.png"
          alt=""
          className="w-8 md:w-12 lg:mr-10 mr-4  hover:scale-110 transition-transform duration-300 ease-in-out "
        />
      </header>

      <section className="relative ">
        <img
          src="images/mtb.png"
          alt=""
          className="w-full md:h-96 object-cover object-center"
        />
        <article className="bg-secondary/60 font-georgia p-4 rounded-lg lg:mr-10 lg:absolute top-40 lg:left-1/2">
          <p className="">
            Vi på Skidaddle har en viktig grundtanke bakom allt vi gör och det
            är ”As it was”. Hur var det på 90-talet när Oasis erövrade England?
            Hur var det när Alperna faktiskt hade snö i sina backar? Och
            viktigast av allt, vad hade folk på sig när allt detta hände? Det är
            det vi vill återskapa med Skidaddle, en genuin 90-tals upplevelse.
          </p>
        </article>
      </section>

      <section className="mt-10">
        <div className="bg-secondary p-4 rounded-lg text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
            <img
              src="images/hat.png"
              alt="Hat nr 1"
              className="rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out "
            />

            <img
              src="images/shirt-nr-3.png"
              alt="Image 2"
              className="rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out "
            />
            <img
              src="images/shirt-nr-1.png"
              alt="Image 3"
              className="rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out "
            />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="bg-secondary p-6 rounded-lg h-80 text-center flex items-center justify-center">
          <form className="flex justify-center items-center rounded-xl h-full w-full md:w-2/3 bg-accent p-6 space-x-4 hover:scale-110 transition-transform duration-300 ease-in-out">
            <div className="flex flex-col space-y-4 w-1/2">
              <div className="w-full">
                <label className="block text-sm text-gray-700"></label>
                <input
                  type="text"
                  className="mt-1 text-sm sm:text-lg  text-primary  p-2 border border-gray-300 rounded-md w-full "
                  placeholder="Ditt namn"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-georgia text-gray-700"></label>
                <input
                  type="email"
                  className="mt-1 text-sm sm:text-lg font-georgia text-primary  p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Din email"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-georgia p-2 rounded-md w-full bg-primary hover:bg-secondary"
              >
                Skicka
              </button>
            </div>
            <div className="w-1/2 ">
              <textarea
                className=" mt-1 text-sm sm:text-lg p-2 font-georgia text-primary rounded-md w-full h-40"
                placeholder="Kontakta oss? skriv här! "
                required
              ></textarea>
            </div>
          </form>
        </div>
      </section>

      <section className="mt-10">
        <div className="bg-secondary p-4 rounded-lg text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
            <img
              src="images/hat.png"
              alt="Hat nr 1"
              className="rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out "
            />

            <img
              src="images/shirt-nr-3.png"
              alt="Image 2"
              className="rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out "
            />
            <img
              src="images/shirt-nr-1.png"
              alt="Image 3"
              className="rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out "
            />
          </div>
        </div>
      </section>

      <footer className="mt-10 p-5 text-center  bg-secondary rounded-lg">
        <h2 className="font-georgia">
          Copyright © Skidaddle 2023 - 2024 | All Rights Reserved
        </h2>
      </footer>
    </main>
  );
}
