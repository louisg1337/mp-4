"use server";
export default async function getDogData(numberDogs: number) {
    const DOG_API_KEY = process.env.DOG_API_KEY!;
    
    try {
      const res = await fetch(`https://api.thedogapi.com/v1/images/search?limit=${numberDogs}`, {
        method: 'GET',
        headers: {
          'x-api-key': DOG_API_KEY
        }
      });
  
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }
  
      const data = await res.json();
      return data; // ✅ Return the data so caller can use it
    } catch (error) {
      console.error('Error fetching cat images:', error);
      throw error; // ✅ Rethrow if you want the caller to handle it
    }
  }
