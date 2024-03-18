import useAxios from "@hooks/useAxios";
import { Link, useParams } from "react-router-dom";
import { Title, Todo, BtnWr } from "../components/Style";

const TodoDetail = () => {
  const params = useParams();
  const { data } = useAxios({ url: `/todolist/${params._id}` });
  const { title, content, done, createdAt, updatedAt } = data?.item || {};

  return (
    <div id="main">
      <Title>할일 상세 보기</Title>
      {data && (
        <Todo className="todo">
          <li>제목 : {title}</li>
          <li>내용 : {content}</li>
          <li>상태 : {done ? "완료" : "미완료"}</li>
          <li>작성일 : {createdAt}</li>
          <li>수정일 : {updatedAt}</li>
        </Todo>
      )}
      <BtnWr>
        <Link to="edit">수정</Link>
        <Link to="/list">목록</Link>
      </BtnWr>
    </div>
  );
};

export default TodoDetail;
