import useAxios from "@hooks/useAxios";
import { Link, useParams } from "react-router-dom";
import { Title, Todo, BtnWr } from "../components/Style";

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
      <Todo className="todo">
        <li>제목 : {data?.item.title}</li>
        <li>내용 : {data?.item.content}</li>
        <li>상태 : {data?.item.done ? "완료" : "미완료"}</li>
        <li>작성일 : {data?.item.createdAt}</li>
        <li>수정일 : {data?.item.updatedAt}</li>
      </Todo>
      <BtnWr>
        <Link to="/edit">수정</Link>
        <Link to="/list">목록</Link>
      </BtnWr>
    </div>
  );
};

export default TodoDetail;
