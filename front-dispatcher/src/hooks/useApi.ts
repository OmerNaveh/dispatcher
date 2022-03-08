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
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(initialData);
        setLoading(false);
        setError(error);
      });
  }, [url]);
  return [data, loading, error];
}
