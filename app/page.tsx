import StartPage from "./startpage/page";

export default function Homepage() {
  return (
    <div className="bg-background">
      <main>
        <StartPage />
        <footer className="p-5 text-center bg-secondary rounded-lg">
          <h2 className="font-georgia">
            Copyright © Tôur de Falkenberg 2024 - 2025 | All Rights Reserved
          </h2>
        </footer>
      </main>
    </div>
  );
}
