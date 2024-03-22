import { memberState } from "@recoil/user/atoms.mjs";
import axios from "axios";
import { useRecoilValue } from "recoil";

const API_SERVER = "https://market-lion.koyeb.app/api";

function useCustomAxios() {
  // 로그인 된 사용자 정보
  const user = useRecoilValue(memberState);

  // ajax 통신에 사용할 공통 설정 지정
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 5000,
    headers: {
      "content-type": "application/json", // request 데이터 타입
      accept: "application/json", // reponse 데이터 타입
    },
  });

  // 요청 인터셉터
  instance.interceptors.request.use((config) => {
    // 사용자가 로그인한 상태라면 토큰값을 확인해서 헤더스에 실어 보내라~
    if (user) {
      const accessToken = user.token.accessToken;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  return instance;
}

export default useCustomAxios;
