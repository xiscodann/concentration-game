import { useState } from 'react';

export const useFetchCards = (perPage = 10) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAnimals = async () => {
    try {
      setLoading(true);
      setError(false);
      const numberOfCards = perPage / 2;
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/content/spaces/animals/types/game/entries?per_page=${numberOfCards}`
      );
      if (!response.ok) {
        setError(response.status);
        throw Error(`Error Status: ${response.status}`);
      }
      const animalList = await response.json();
      return animalList;
    } catch (err) {
      console.error(`Error: `, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { getAnimals, loading, error };
};
