import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://openapi.foodsafetykorea.go.kr/api/${
          import.meta.env.VITE_API_KEY
        }/COOKRCP01/json/1/100`,
        // `http://api.kcisa.kr/openapi/API_CIA_086/request?serviceKey=02ac5562-a5e1-44e9-9a36-0380a6651d9e`,
        {
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
        }
      );
      setData(res.data["COOKRCP01"].row);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  const list = data?.map((item) => (
    <li key={item["RCP_SEQ"]}>
      <p>
        작은 이미지 <img src={item["ATT_FILE_NO_MAIN"]} alt="" />
      </p>
      <p>
        큰 이미지 <img src={item["ATT_FILE_NO_MK"]} alt="" />
      </p>
      <p>이름: {item["RCP_NM"]}</p>
      <p>카테고리: {item["RCP_PAT2"]}</p>
      <p>요리방법: {item["RCP_WAY2"]}</p>
      <p>재료: {item["RCP_PARTS_DTLS"]}</p>
      <ul>
        <li>열량: {item["INFO_ENG"]}</li>
        <li>탄수화물: {item["INFO_CAR"]}</li>
        <li>단백질: {item["INFO_PRO"]}</li>
        <li>지방: {item["INFO_FAT"]}</li>
        <li>나트륨: {item["INFO_NA"]}</li>
      </ul>
      <ul>
        <li>
          <img src={item["MANUAL_IMG01"]} alt="" />
          {item["MANUAL01"]}
        </li>
        <li>
          <img src={item["MANUAL_IMG02"]} alt="" />
          {item["MANUAL02"]}
        </li>
        <li>
          <img src={item["MANUAL_IMG03"]} alt="" />
          {item["MANUAL03"]}
        </li>
      </ul>
    </li>
  ));

  return <ul>{list}</ul>;
}

export default App;
