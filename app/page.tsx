export default function Home() {
  return (
    <main className=" bg-primary text-white">
      <header className="bg-secondary p-5 text-center">
        <img src="images/Final-logo-large.png" alt="" className="w-32" />
        <h1 className="text-4xl font-bold">Skidaddle</h1>
      </header>

      <section className="mt-10 p-5">
        <article className="bg-secondary p-6 rounded-lg">
          <p>
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
          <div className="grid grid-cols-3 gap-4">
            <img src="images/hat.png" alt="Hat nr 1" className="rounded-lg " />

            <img
              src="images/shirt-nr-3.png"
              alt="Image 2"
              className="rounded-lg"
            />
            <img
              src="images/shirt-nr-1.png"
              alt="Image 3"
              className="rounded-lg "
            />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="bg-secondary p-6 rounded-lg h-80 text-center flex items-center justify-center">
          <form className="flex justify-center items-center rounded-xl h-full w-2/3 bg-accent p-6 space-x-4">
            <div className="flex flex-col space-y-4 w-1/2">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Ditt namn"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700"></label>
                <input
                  type="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Din email"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md w-full bg-primary"
              >
                Skicka
              </button>
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700"></label>
              <textarea
                className="mt-1 p-2 border border-gray-300 rounded-md w-full h-40"
                placeholder="Skriv ditt meddelande här"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </section>

      <section className="mt-10">
        <div className="bg-secondary p-4 rounded-lg text-center">
          <div className="grid grid-cols-3 gap-4">
            <img src="images/hat.png" alt="Hat nr 1" className="rounded-lg " />

            <img
              src="images/shirt-nr-3.png"
              alt="Image 2"
              className="rounded-lg"
            />
            <img
              src="images/shirt-nr-1.png"
              alt="Image 3"
              className="rounded-lg "
            />
          </div>
        </div>
      </section>

      <footer className="mt-10 p-5 text-center bg-secondary rounded-lg">
        <h2>Copyright © Skidaddle 2023 - 2024 | All Rights Reserved</h2>
      </footer>
    </main>
  );
}
