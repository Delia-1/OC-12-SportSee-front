import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useFetchData(userId, isMockedApi, mockFetcher, apiFetcher) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = isMockedApi
          ? await mockFetcher(userId)
          : await apiFetcher(userId);

        setData(result);
      } catch (error) {
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, isMockedApi, mockFetcher, apiFetcher, navigate]);

  return { data, loading, error };
}
