import { useEffect, useState } from "react";

export function useFetchData(userId, isMockedApi, mockFetcher, apiFetcher) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = isMockedApi
          ? await mockFetcher(userId)
          : await apiFetcher(userId);

        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, isMockedApi, mockFetcher, apiFetcher]);

  return { data, loading, error };
}
