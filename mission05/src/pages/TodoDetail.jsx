import { Link, useParams } from "react-router-dom";
import useAxios from "@hooks/useAxios";
import Title from "../components/Title";
import styled from "styled-components";

const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;
const BtnWrapStyled = styled.div`
  display: flex;
  gap: 0.4em;
  margin-top: 1em;
`;

const TodoDetail = () => {
  // params._id : rount.jsx에서 :콜론 뒤에 붙인 글자
  const params = useParams();
  const { isLoading, data, error } = useAxios({
    url: `/todolist/${params._id}`,
  });
  // const {title, content, done, createdAt, updatedAt} = data?.item

  return (
    <div id="main">
      <Title>할일 상세 보기</Title>
      <UlStyled className="todo">
        <li>제목 : {data?.item.title}</li>
        <li>내용 : {data?.item.content}</li>
        <li>상태 : {data?.item.done ? "완료" : "미완료"}</li>
        <li>작성일 : {data?.item.createdAt}</li>
        <li>수정일 : {data?.item.updatedAt}</li>
      </UlStyled>
      <BtnWrapStyled>
        <Link to="/edit">수정</Link>
        <Link to="/list">목록</Link>
      </BtnWrapStyled>
    </div>
  );
};

export default TodoDetail;
