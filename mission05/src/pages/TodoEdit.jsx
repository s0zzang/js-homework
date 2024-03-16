import { Link } from "react-router-dom";
import { Title, Todo, BtnWr, InputWr } from "../components/Style";

const TodoEdit = () => {
  return (
    <div id="main">
      <Title>할일 수정</Title>
      <Todo className="todo">
        <form>
          <InputWr>
            <label htmlFor="title">제목 </label>
            <input type="text" id="title" value="할일1" autoFocus />
          </InputWr>
          <InputWr>
            <label htmlFor="content">내용 </label>
            <input type="text" id="content" value="내용1" />
          </InputWr>
          <InputWr>
            <label htmlFor="done">완료 </label>
            <input type="checkbox" id="done" checked />
          </InputWr>
        </form>
      </Todo>
      <BtnWr>
        <Link to="/detail">수정</Link>
        <Link to="/list">취소</Link>
      </BtnWr>
    </div>
  );
};

export default TodoEdit;
