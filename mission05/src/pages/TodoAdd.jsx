import { Link } from "react-router-dom";
import { BtnWr, InputWr, Title, Todo } from "../components/Style";

const TodoAdd = () => {
  return (
    <div id="main">
      <Title>할일 추가</Title>
      <Todo className="todo">
        <form>
          <InputWr>
            <label htmlFor="title">제목 </label>
            <input type="text" id="title" autoFocus />
          </InputWr>
          <InputWr>
            <label htmlFor="content">내용 </label>
            <input type="text" id="content" />
          </InputWr>
        </form>
      </Todo>
      <BtnWr>
        <Link to="/detail">추가</Link>
        <Link to="/list">취소</Link>
      </BtnWr>
    </div>
  );
};

export default TodoAdd;
