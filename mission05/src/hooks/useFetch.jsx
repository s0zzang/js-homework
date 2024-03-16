import { useEffect, useState } from "react";

const API_SERVER = "https://todo-api.frontendschool.shop/api";

const useFetch = (fetchParams) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    request(fetchParams);
  }, []); // 마운트 때 한번만 호출 -> useEffect 사용하지 않으면 무한루프

  const request = async (params) => {
    try {
      setIsLoading(true);
      const res = await fetch(API_SERVER + params.url);
      const data = await res.json();

      if (data.ok) {
        setData(data);
        setError(null);
      } else {
        throw new Error(data.error.message);
      }
    } catch (err) {
      setError(err);
      setData(null);
    } finally {
      // 성공, 실패 여부 상관없이 무조건 실행
      setIsLoading(false);
    }
  };

  return { isLoading, data, error };
};

export default useFetch;
