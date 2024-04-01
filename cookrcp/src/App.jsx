import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://openapi.foodsafetykorea.go.kr/api/${
          import.meta.env.VITE_API_KEY
          // }/COOKRCP01/json/1/100/RCP_WAY2=굽기&RCP_NM=전`,
          // }/COOKRCP01/json/1/1000/RCP_NM=라면`,
          // }/COOKRCP01/json/1/1000/RCP_PARTS_DTLS=숙주`,
          // }/COOKRCP01/json/1/100/RCP_WAY2=끓이기`,
        }/COOKRCP01/json/1/1001`,
        {
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
        },
      );
      setData(res.data["COOKRCP01"].row);
      // console.log(data);

      // 국물 요리만 - 해장 느낌
      // const processData = res.data["COOKRCP01"].row.filter(
      //   rcp => rcp["RCP_WAY2"] === "끓이기" && rcp["RCP_PAT2"] === "국&찌개",
      // );

      // 비오는 날 : 전
      // const processData = res.data["COOKRCP01"].row.filter(
      //   rcp => rcp["RCP_WAY2"] === "굽기" && rcp["RCP_NM"].includes("전"),
      // );

      // 비오는 날 : 고기 구워
      // const processData = res.data["COOKRCP01"].row.filter(
      //   rcp => rcp["RCP_WAY2"] === "굽기" && rcp["RCP_NM"].includes("삼겹살"),
      // );

      // 비오는 날 : 라면
      // const processData = res.data["COOKRCP01"].row.filter(
      //   rcp => rcp["RCP_WAY2"] === "끓이기" && rcp["RCP_NM"].includes("라면"),
      // );

      // 너무 더워 : 냉파스타/오이냉국 등등 '냉' 붙은거 다보여줘
      // const processData = res.data["COOKRCP01"].row.filter(
      //   rcp =>
      //     (rcp["RCP_NM"].includes("냉") || rcp["RCP_NM"].includes("초계")) &&
      //     !rcp["RCP_NM"].includes("함초"),
      // );

      // 너무 더워 : 이열치열? 매워
      const processData = res.data["COOKRCP01"].row.filter(rcp => rcp["RCP_NM"].includes("매운"));

      // 눈 와 : 전골류
      // const processData = res.data["COOKRCP01"].row.filter(rcp => rcp["RCP_NM"].includes("전골"));

      // 날씨별 -> 해쨍쨍(시원한), 구름꼈어(뜨끈한 국물), 비와(삼겹살/전), 특색 없는 날엔 메뉴 키워드 랜덤 추천하기
      // 불금 -> 해장국

      setData(processData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const list = data?.map(item => (
    <li key={item["RCP_SEQ"]}>
      <p>
        <div class="dis-no">작은 이미지</div> <img src={item["ATT_FILE_NO_MAIN"]} alt="" />
      </p>
      {/* <p>
        큰 이미지 <img src={item["ATT_FILE_NO_MK"]} alt="" />
      </p> */}
      <div class="flex">
        <p>
          <strong>이름</strong> {item["RCP_NM"]}
        </p>
        <p>
          <strong>카테고리</strong> {item["RCP_PAT2"]}
        </p>
        <p>
          <strong>요리방법</strong> {item["RCP_WAY2"]}
        </p>
      </div>
      <p>
        <strong>재료</strong> {item["RCP_PARTS_DTLS"]}
      </p>
      {/* <ul>
        <li>열량: {item["INFO_ENG"]}</li>
        <li>탄수화물: {item["INFO_CAR"]}</li>
        <li>단백질: {item["INFO_PRO"]}</li>
        <li>지방: {item["INFO_FAT"]}</li>
        <li>나트륨: {item["INFO_NA"]}</li>
      </ul> */}
      <ul>
        <li>
          {/* <img src={item["MANUAL_IMG01"]} alt="" /> */}
          {item["MANUAL01"]}
        </li>
        <li>
          {/* <img src={item["MANUAL_IMG02"]} alt="" /> */}
          {item["MANUAL02"]}
        </li>
        <li>
          {/* <img src={item["MANUAL_IMG03"]} alt="" /> */}
          {item["MANUAL03"]}
        </li>
        <li> {item["MANUAL04"]} </li>
        <li> {item["MANUAL05"]} </li>
        <li> {item["MANUAL06"]} </li>
        <li> {item["MANUAL07"]} </li>
      </ul>
    </li>
  ));

  return <ul className="flex">{list}</ul>;
}

export default App;
