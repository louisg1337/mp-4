'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [count, setCount] = useState('1');

  return (
    <main className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Dog Showcase</h1>
        <p className="text-gray-600 mb-6">Enter the number of dogs you want to see!</p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full"
            placeholder="example: 5"
          />
          <Link
            href={`/dogs/${count}`}
            className="bg-blue-600 text-white px-6 py-2 rounded-md transition w-full"
          >
            Show Me Dogs
          </Link>
        </div>
      </div>
    </main>
  );
}
