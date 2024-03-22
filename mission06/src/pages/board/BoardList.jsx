import useCustomAxios from "@hooks/useCustomAxios.mjs";
import BoardListItem from "@pages/board/BoardListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BoardList = () => {
  const [data, setData] = useState();
  const axios = useCustomAxios();

  const fetchBoardList = async () => {
    const reponse = await axios.get("/posts");
    setData(reponse.data);
  };

  // useEffect를 비동기 함수로 만들지 말기 : 복잡해졌을 때 순서 알기 어려움
  useEffect(() => {
    fetchBoardList();
  }, []);

  const itemList = data?.item?.map((item) => (
    <BoardListItem key={item._id} item={item}></BoardListItem>
  ));

  return (
    <main>
      <div>
        <Link to="/boards/new">글쓰기</Link>
      </div>
      <section>
        {itemList ? (
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>조회</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>{itemList}</tbody>
          </table>
        ) : (
          <p>게시물이 없습니다.</p>
        )}
        <hr />
      </section>
    </main>
  );
};

export default BoardList;
