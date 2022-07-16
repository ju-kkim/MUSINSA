import { SetStateAction } from 'react';

export const useFetch = async (
  url: string,
  setLoading: React.Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  try {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    return data;
  } catch (error) {
    throw new Error(`ERROR : fetch ${error} `);
  }
};
