'use client';

import { useState } from 'react';
import getDogData from '../api/getDogData/route';

const Home = () => {
  const [count, setCount] = useState('5');
  const [dogs, setDogs] = useState<any[]>([]);
  

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Dog Gallery</h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="number"
          min="1"
          max="100"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="px-4 py-2 border rounded-md w-full sm:w-auto"
          placeholder="Number of cats"
        />
        <button
          onClick={() => getDogData(Number(count)).then((data) => setDogs(data)).catch((error) => console.error('Error fetching dog data:', error))}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Show Me Dogs
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {dogs.map((dog, id) => (
          <div key={id} className="rounded-xl overflow-hidden shadow-md">
            <img src={dog.url} alt="A cute cat" className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
