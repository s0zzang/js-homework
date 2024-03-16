import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://todo-api.frontendschool.shop/api";
axios.defaults.timeout = 1500;

const useAxios = (fetchParams) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    request(fetchParams);
  }, []); // 마운트 때 한번만 호출 -> useEffect 사용하지 않으면 무한루프

  const request = async (params) => {
    try {
      setIsLoading(true);
      const res = await axios(params.url);
      setData(res.data);
      setError(null);
    } catch (err) {
      setError({
        message:
          "일시적인 문제로 인해 작업에 실패했습니다. 잠시 후 다시 시도해주세요.",
      });
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error };
};

export default useAxios;
