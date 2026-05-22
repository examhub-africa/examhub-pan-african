import { AFRICAN_COUNTRIES } from '../../data/countries.js';

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Pan-African Exam Hub
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {AFRICAN_COUNTRIES.map((country) => (
          <a 
            key={country.code}
            href={`/${country.code}`}
            className="p-4 border rounded-lg text-center hover:bg-gray-100"
          >
            {country.name}
          </a>
        ))}
      </div>
    </main>
  );
}
