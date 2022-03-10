import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useApi(
  url: string
): [data: APITypes.ApiResponseData, loading: boolean, error: string] {
  const initialData: APITypes.ApiResponseData = {
    articles: [],
    status: "",
    totalResults: 0,
  };
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
        setError("");
      } catch (error) {
        setData(initialData);
        if (error instanceof Error) setError(error.message);
      }
      setLoading(false);
    })();
  }, [url]);
  return [data, loading, error];
}
