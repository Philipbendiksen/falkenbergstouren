import Results from "../page";
import data from "./data.json";

const herr10km = () => {
  return (
    <div>
      <div>
        <Results />
      </div>
      <main className="bg-primary min-h-screen flex items-center justify-center p-14">
        <div className="overflow-x-auto w-full max-w-5xl rounded-2xl shadow-lg bg-white">
          <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-700">
            <thead className="bg-gray-100 text-left text-gray-700 uppercase tracking-wider text-xs">
              <tr>
                <th className="px-6 py-3">Förnamn</th>
                <th className="px-6 py-3">Efternamn</th>
                <th className="px-6 py-3">Klubb/ort</th>
                <th className="px-6 py-3">Poäng</th>
                <th className="px-6 py-3">Antal lopp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map((person) => (
                <tr
                  key={person.ID}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4">{person.Förnamn}</td>
                  <td className="px-6 py-4">{person.Efternamn}</td>
                  <td className="px-6 py-4">{person["Klubb/ort"]}</td>
                  <td className="px-6 py-4 font-semibold">
                    {person.Totalpoäng}
                  </td>
                  <td className="px-6 py-4">{person["Antal lopp"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default herr10km;
