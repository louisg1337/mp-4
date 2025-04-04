'use client';

import { useEffect, useState } from 'react';
import getDogData from '../../../api/getDogData/route';
import { useParams } from 'next/navigation';
import { DogType } from '../../../types/type';

export default function Showcase() {
  const [dogs, setDogs] = useState<DogType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();


  useEffect(() => {
    const retrieveDogs = async () => {
        if (!params.number) {
            setError('Invalid number of dogs, please return home and provide a valid number.');
            return;
        }

        try {
            const data = await getDogData(Number(params.number));
            setDogs(data);
        }
        catch (error) {
            console.error('Error fetching dog data:', error);
            setError('Failed to fetch dog data. Please try again later.');
        }
        setLoading(false);
    };
    setLoading(true);
    retrieveDogs();
  }, [params.number]);


  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Dog Gallery</h1>
      {
        loading ?
        <p className="text-gray-600 text-center mb-4">Loading...</p>
        :
        error ? 
        <p className="text-red-600 text-center mb-4">{error}</p>
        :
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {dogs.map((dog, id) => (
            <div key={id} className="rounded-xl overflow-hidden shadow-md">
              <img src={dog.url} alt="A cute cat" className="w-full h-64 object-cover" />
            </div>
          ))}
      </div>
      }
    </main>
  );
};
