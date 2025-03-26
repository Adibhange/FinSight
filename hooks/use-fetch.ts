import { useState } from "react";
import { toast } from "sonner";

interface UseFetchState<T> {
  data: T | undefined;
  loading: boolean | null;
  error: Error | null;
}

interface UseFetchReturn<T, Args extends unknown[]> extends UseFetchState<T> {
  fn: (...args: Args) => Promise<void>;
  setData: React.Dispatch<React.SetStateAction<T | undefined>>;
}

const useFetch = <T, Args extends unknown[]>(
  cb: (...args: Args) => Promise<T>,
): UseFetchReturn<T, Args> => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fn = async (...args: Args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);

      if (response instanceof Response) {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        setData(response as T);
      }

      setError(null);
    } catch (error: unknown) {
      setError(error as Error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
