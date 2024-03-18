import axios from "axios";

const API_SERVER = "https://todo-api.frontendschool.shop/api";
const useAxiosInstance = () => {
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 3000,
    headers: {
      "Content-Type": "application/json", // request의 데이터 타입
      Accept: "application/json",
    },
  });
  return instance;
};

export default useAxiosInstance;
