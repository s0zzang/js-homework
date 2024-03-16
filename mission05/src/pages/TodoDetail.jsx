import { Link, useParams } from "react-router-dom";
import useAxios from "@hooks/useAxios";

// 과제 : 상세 조회, 목록 스피너 추가, 에러 메시지 있다면 보여주기 추가
// 시간 남으면 css까지 입히기

const TodoDetail = () => {
  // params._id : rount.jsx에서 :콜론 뒤에 붙인 글자
  const params = useParams();
  const { isLoading, data, error } = useAxios({
    url: `/todolist/${params._id}`,
  });
  // const {title, content, done, createdAt, updatedAt} = data?.item

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      <div className="todo">
        <div>제목 : {data?.item.title}</div>
        <div>내용 : {data?.item.content}</div>
        <div>상태 : {data?.item.done ? "완료" : "미완료"}</div>
        <div>작성일 : {data?.item.createdAt}</div>
        <div>수정일 : {data?.item.updatedAt}</div>
        <Link to="/edit">수정</Link>
        <Link to="/list">목록</Link>
      </div>
    </div>
  );
};

export default TodoDetail;
